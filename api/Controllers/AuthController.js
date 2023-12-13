const Users = require("../Models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config();

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const saltRounds = 10;

//helper function
function addTokenToCookie(dataForCookie, response) {
  const token = jwt.sign(dataForCookie, process.env.PRIVATE_KEY, {});
  response.cookie("yuwa_user", token);
}

//main functions
const failedMessage = (req, res) => {
  res.status(401).json({
    success: false,
    message: "auth controller failed message.",
  });
};

const successMessage = (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "auth controller success message.",
      user: req.user,
      cookies: req.cookies,
    });
  }
};

const google_logout = (req, res) => {
  req.logout();
  res.redirect("http://localhost:5173/");
};

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });

      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const register = (req, res) => {
  const { username, password } = req.body;
  if (username.trim() === "" || password.trim() === "") {
    res.status(400).json({
      message: "Please enter all required filled.",
    });
    return;
  }

  bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (err) throw err;
    try {
      const addUser = await Users.create({
        username,
        password: hash,
        admin: username === "nawaraj" ? true : false,
      });

      const dataForCookie = { username: addUser.username, userId: addUser._id };

      addTokenToCookie(dataForCookie, res);

      res.json({ message: `${addUser?.username} is created.`, register: true });
    } catch (e) {
      if (e.code === 11000) {
        res.status(400).json({
          message: `username ${username} is already in taken. Please choose different username.`,
        });
      } else {
        res.status(400).json({ message: e.message });
      }
    }
  });
};

function verifyToken(req, res, next) {
  const token = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token.yuwa_user, process.env.PRIVATE_KEY, {}, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    req.user = decoded;
    next();
  });
}

const check_login = async (req, res) => {
  const decoded = req.user; // req.user received from verifyToken middleware that use jwt.verify

  try {
    const defaultValues = {
      username: "",
      userId: "",
      likedProducts: [],
      logedIn: false,
    };

    const userData = await Users.findOne({ username: decoded.username });
    if (decoded.userId == userData._id) {
      res.json({
        username: decoded.username,
        userId: decoded.userId,
        likedProducts: userData.likedProducts,
        logedIn: true,
        admin: userData.admin,
      });
    } else {
      res.json(defaultValues);
    }
  } catch (e) {
    res.json(defaultValues);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const findUser = await Users.findOne({ username });

    if (!findUser) {
      res.json({ message: `${username} could not be found.` });
      return;
    }

    bcrypt.compare(password, findUser.password, (err, result) => {
      if (err) throw err;

      if (result) {
        const dataForCookie = {
          username: findUser.username,
          userId: findUser._id,
        };

        addTokenToCookie(dataForCookie, res);
        res.json({ message: "login successful." });
      } else {
        res.json({ message: "Cridential does not match. Please try again." });
      }
    });
  } catch (e) {
    res.status(400).res({ message: e.message });
  }
};

module.exports = {
  failedMessage,
  successMessage,
  register,
  check_login,
  verifyToken,
  login,
  google_logout,
};
