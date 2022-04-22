/*
// const express = require("express");
// const multer = require("multer");

// // file upload folder
// const UPLOADS_FOLDER = "./uploads/";

// // prepare final multer upload object
// var upload = multer({
//   dest: UPLOADS_FOLDER,
//   limits: {
//     fileSize: 1000000, // byte size- 1MB
//   },
//   // single file
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype === "image/png" ||
//       file.mimetype === "image/jpg" ||
//       file.mimetype === "image/jpeg"
//     ) {
//       cb(null, true);
//     } else {
//       cb(new Error("Only .png, .jpg or .jpeg formate allowed"));
//     }
//   },
// });

// const app = express();

// // application route
// // multiple file uploads
// // app.post("/", upload.fields([
// //   {name: "avatar", maxCount:1},
// //   {name: "gallery", maxCount:2},
// // ]), (req, res) => {
// //   res.send('Hello World');
// // });

// app.post("/", upload.single("avatar"), (req, res) => {
//   res.send("Hello World");
// });

// // default error handler
// app.use((err, req, res, next) => {
//   if (err) {
//     if (err instanceof multer.MulterError) {
//       res.status(500).send("There was an upload error!");
//     } else {
//       res.status(500).send(err.message);
//     }
//   } else {
//     res.send("Success");
//   }
// });

// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });
*/

/*
// multiple file error handeling
// const express = require("express");
// const multer = require("multer");

// // file upload folder
// const UPLOADS_FOLDER = "./uploads/";

// // prepare final multer upload object
// var upload = multer({
//   dest: UPLOADS_FOLDER,
//   limits: {
//     fileSize: 1000000, // byte size- 1MB
//   },
//   // single file
//   fileFilter: (req, file, cb) => {
//     if (file.fieldname === "avatar") {
//       if (
//         file.mimetype === "image/png" ||
//         file.mimetype === "image/jpg" ||
//         file.mimetype === "image/jpeg"
//       ) {
//         cb(null, true);
//       } else {
//         cb(new Error("Only .png, .jpg or .jpeg formate allowed"));
//       }
//     } else if (file.fieldname === "doc") {
//       if (file.mimetype === "application/pdf") {
//         cb(null, true);
//       } else {
//         cb(new Error("Only .pdf formate allowed"));
//       }
//     }
//   },
// });

// const app = express();

// app.post(
//   "/",
//   upload.fields([
//     { name: "avatar", maxCount: 1 },
//     { name: "doc", maxCount: 1 },
//   ]),
//   (req, res) => {
//     res.send("Hello World");
//   }
// );

// // default error handler
// app.use((err, req, res, next) => {
//   if (err) {
//     if (err instanceof multer.MulterError) {
//       res.status(500).send("There was an upload error!");
//     } else {
//       res.status(500).send(err.message);
//     }
//   } else {
//     res.send("Success");
//   }
// });

// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });
*/

// storage configure/control
const express = require("express");
const multer = require("multer");
const path = require("path");

// file upload folder
const UPLOADS_FOLDER = "./uploads/";

// define the storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();
    cb(null, (fileName + fileExt));
  },
});

// prepare final multer upload object
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000, // byte size- 1MB
  },
  // single file
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "avatar") {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(new Error("Only .png, .jpg or .jpeg formate allowed"));
      }
    } else if (file.fieldname === "doc") {
      if (file.mimetype === "application/pdf") {
        cb(null, true);
      } else {
        cb(new Error("Only .pdf formate allowed"));
      }
    }
  },
});

const app = express();

app.post(
  "/",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "doc", maxCount: 1 },
  ]),
  (req, res) => {
    console.log(req.files);
    res.send("File uploaded successfully");
  }
);

// default error handler
app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send("There was an upload error!");
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send("Success");
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
