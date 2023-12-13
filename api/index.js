const cookieSession = require("cookie-session");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const passport = require("passport");

// import router
const authRouter = require("./Routers/AuthRouter.js");
const productRouter = require("./Routers/ProductRouter.js");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(
  cookieSession({
    name: "session",
    keys: ["google_user"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(function (request, response, next) {
  if (request.session && !request.session.regenerate) {
    request.session.regenerate = (cb) => {
      cb();
    };
  }
  if (request.session && !request.session.save) {
    request.session.save = (cb) => {
      cb();
    };
  }
  next();
});

app.use(express.json());
app.use(cookieParser());

app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello again!");
});

mongoose
  .connect(process.env.MONG_DB_CONNECTION)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(mongoose.connection.readyState)
    )
  )
  .catch((e) => console.log(e));

//set route
app.use("/auth", authRouter);
app.use("/product", productRouter);
