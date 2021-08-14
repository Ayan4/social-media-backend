require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users.router");
const authRoute = require("./routes/auth.router");
const postRoute = require("./routes/post.router");

dbConnect();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
