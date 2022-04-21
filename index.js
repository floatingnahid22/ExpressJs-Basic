//synchronous code error handle

// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//       next("there was an error!");
//     } else {
//       res.write("a");
//     }
//   }
//   res.end();
// });

// // 404 error handle
// app.use((req, res, next) => {
//   next("Requested url was not found!");
// });

// app.use((err, req, res, next) => {
//   // it has to be last middleware
//   if (res.headerSent) {
//     next("there was a problem!");
//   } else {
//     if (err.message) {
//       res.status(500).send(err.message);
//     } else {
//       res.send("there was an error");
//     }
//   }
// });

// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });

//assynchronous code error handle
const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", [
  (req, res, next) => {
    fs.readFile("/file-does-not-exist", (err, data) => {
      console.log(data);
      next(err);
    });
  },
  (req, res, next) => {
    console.log(data.property);
  },
]);

app.use((req, res, next) => {
  console.log("i am not called");
  next();
});

app.use((err, req, res, next) => {
  // it has to be last middleware
  if (res.headerSent) {
    next("there was a problem!");
  } else {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.send("there was an error");
    }
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

