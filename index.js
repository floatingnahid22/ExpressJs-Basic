// middleware- functions that have access to req and res object and also next function
// tasks:
// 1. executes any js code
// 2. can change req and res objects
// 3. can end request/response cycle
// 4. call next middleware by next()
// 5. throw and catch errors

const express = require("express");
const cookieParser = require("cookie-parser");
const { options } = require("nodemon/lib/config");

const app = express();
app.use(express.json());
app.use(cookieParser());

const adminRouter = express.Router();

const loggerWrapper = (options) => {
  return function (req, res, next) {
    if (options.log) {
      console.log(
        `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${
          req.originalUrl
        } - ${req.protocol} - ${req.ip}`
      );
      next();
    } else {
      throw new Error("failed to log");
    }
  };
};

adminRouter.use(loggerWrapper({ log: /*false*/ true}));

adminRouter.get("/dashboard", (req, res) => {
  res.send("dashboard");
});

app.use("/admin", adminRouter);

app.get("/about", (req, res) => {
  res.send("About");
});

// error handling middleware
const errorMiddleware = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).send("there was a serverside error!");
};

adminRouter.use(errorMiddleware);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
