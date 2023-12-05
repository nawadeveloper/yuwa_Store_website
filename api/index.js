const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");

// import router
const authRouter = require("./Routers/AuthRouter.js");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

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
