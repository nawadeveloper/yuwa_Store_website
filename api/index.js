const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
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
  );
