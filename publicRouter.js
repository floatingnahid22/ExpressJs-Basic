// const express = require("express");


// const publicRouter = express.Router();

// // router.all()

// // const log = (req, res, next) => {
// //     console.log('i am logging something');
// //     next();
// // };
// // publicRouter.all('*', log); // *- all route


// //router.param()
// publicRouter.param('user', (req, res, next, id) => {
//     req.user = id === '1' ? 'Admin' : 'Annonymous';
//     next();
// });

// publicRouter.get('/:user', (req, res) => {
//     res.send(`Hello ${req.user}`);
// });

// publicRouter.get('/about', (req, res) => {
//     res.send('About');
// });

// module.exports = publicRouter;


//give one parameter as function which returns another fnction
// const express = require("express");

// const publicRouter = express.Router();

// publicRouter.param((param, option) => (req, res, next, val) => {
//      if(val === option) {
//          next();
//      } else {
//          res.sendStatus(403);
//      }
// });

// publicRouter.param('user', '12');

// publicRouter.get('/:user', (req, res) => {
//     res.send(`Hello Admin`);
// });

// publicRouter.get('/about', (req, res) => {
//     res.send('About');
// });

// module.exports = publicRouter;


//Router.route() method
// const express = require("express");

// const publicRouter = express.Router();

// publicRouter
//     .route('/user')
//         .all((req, res, next) => {
//             console.log('I am logging something');
//             next();
//         })
//         .get((req, res) => {
//             res.send('GET');
//         })
//         .post((req, res) => {
//             res.send('POST');
//         })
//         .put((req, res) => {
//             res.send('PUT');
//         })
//         .delete((req, res) => {
//             res.send('DELETE');
//         });

// module.exports = publicRouter;



//Router.use()
const express = require("express");
const adminRouter = require("./adminRouter");

const publicRouter = express.Router();

publicRouter.use((req, res, next) => {
    console.log('logging');
    next();
});

publicRouter.use(adminRouter);

module.exports = publicRouter;