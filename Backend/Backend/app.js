const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const registerRoutes = require("./routes/register");
const exploreRoutes = require("./routes/explore");
const loginRoutes = require("./routes/login");
const talentDashboard = require("./routes/talentDashboard");
const cart = require("./routes/cart")
const uploads = require("./routes/uploads")
const cors = require("cors");

const corsOptions = {
  origin: ['*'],
  methods: ["GET", "POST", "PUT", "PATCH","DELETE"],
};
// const corsOptions = {
//   origin: ["http://127.0.0.1:5501", "http://127.0.0.1:5500", "http://127.0.0.1:5551", "http://127.0.0.1:5502","https://potter-pallete-fb.vercel.app/"],
//   methods: ["GET", "POST", "PUT", "PATCH","DELETE"],
// };
const multer  = require('multer');





app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors(corsOptions));
app.use("/register", registerRoutes)
app.use("/login", loginRoutes)
app.use("/explore", exploreRoutes)
app.use("/talentDashboard", talentDashboard)
app.use("/cart", cart)
app.use("/uploads", uploads)


app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
  });
  
  if (app.get("env") === "development") {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.send({
        message: err.message,
        error: err
      });
    });
  }
  
  app.listen(305, function() {
    console.log("Server starting on port 305!");
  });
  