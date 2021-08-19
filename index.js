require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users.router");
const authRoute = require("./routes/auth.router");
const postRoute = require("./routes/post.router");
const path = require("path");

dbConnect();

app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  }
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res
      .status(200)
      .json({ success: true, message: "File uploaded sucessfully" });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
});

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Hello from sokal media server",
    success: true
  });
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Backend server is running! " + PORT);
});
