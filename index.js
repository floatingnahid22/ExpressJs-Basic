// locals, headerSent
// const express  = require('express');

// const app = express();

// app.set('view engine', 'ejs');

// app.get('/about',(req, res) => {
//     console.log(res.headersSent);
//     res.render('pages/about', {
//         name: 'Bangladesh',  // send object to ejs file as locals
//     });
//     console.log(res.headersSent);

// });

// app.listen(3000, () => {
//     console.log('listening on port 3000');
// });

//methods
// const express = require("express");

// const app = express();

// app.set("view engine", "ejs");

// app.get("/about", (req, res) => {
// //   res.send("About"); //with data for ending response
// //   res.end(); //without data for ending response
// //   res.json({
// //     name: "Bangladesh",
// //   });
//     // res.status(200);
//     // res.end();
//     // or
//     res.sendStatus(200);
// });

// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });


// res.formate()

// const express = require("express");

// const app = express();

// app.set("view engine", "ejs");



// app.get('/test', (req, res) => {
//     res.send('Hello');
// });
// app.get("/about", (req, res) => {
//     // res.format({
//     //     'text/plain': () => {
//     //         res.send('Hi');
//     //     },
//     //     'text/html': () => {
//     //         res.render('pages/about', {
//     //             name: 'Bangladesh',
//     //         });
//     //     },
//     //     'application/json': () => {
//     //         res.json({
//     //             message: 'About',
//     //         });
//     //     },
//     //     default: () => {
//     //         res.status(403).send('not acceptable');
//     //     }
//     // });

//     // res.cookie
//     // res.cookie('name', 'Nahid', {});
//     // res.end();

//     //res.location
//     // res.location('/test');    
//     res.redirect('/test');    
//     res.end();
// });

// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });



// res.get/set()

const express = require("express");

const app = express();

app.set("view engine", "ejs");



app.get('/test', (req, res) => {
    res.send('Hello');
});
app.get("/about", (req, res) => {
    res.set('title', 'Express Basic');
    console.log(res.get('title'));
    res.end();
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
