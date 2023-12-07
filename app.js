require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();

const authRoute = require("./routes/userRoute");

//call the database
require("./config/db");

app.use(logger("dev"));
// localhost: 5173;
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// endpoint for the user registration and login
app.use("/api/user", authRoute);




app.listen(port, () => {
  console.log(`server running on ${port}`);
});
 