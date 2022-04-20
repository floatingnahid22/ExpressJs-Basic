// const express  = require('express');

// const app = express();

// //express.static()
// // app.use(express.static(`${__dirname}/public/`, {
// //     index: "home.html",
// // })
// // );

// //express.router
// const router = express.Router({
//     caseSensitive: false,
// });
// app.use(router);

// app.get('/about', (req, res) => {
//     res.send('this is home page');
// });

// app.post('/', (req, res) => {
//     // console.log(req.body);
//     res.send('this is home page with post request');
// });

// app.listen(3000, () => {
//     console.log('listening on port 3000');
// });

//application object 
//app locals
// const express  = require('express');
// const handle  = require('./handle');

// const app = express();


// app.locals.title = 'My App';

// app.get('/', handle);

// app.listen(3000, () => {
//     console.log('listening on port 3000');
// });

//app sub app

// const express  = require('express');

// const app = express();
// const admin = express();

// admin.get('/dashboard',(req, res) => {
//     console.log(admin.mountpath);
//     res.send('Welcome to admin dashboard');
// });

// app.get('/',(req, res) => {
//     res.send('Welcome to homepage');
// });

// app.use('/admin', admin)

// app.listen(3000, () => {
//     console.log('listening on port 3000');
// });

//different methods
//app.all()

// const express  = require('express');

// const app = express();

// app.all('/',(req, res) => {
//     res.send('Welcome to homepage');
// });

// app.listen(3000, () => {
//     console.log('listening on port 3000');
// });


//app.disable()/enable()
// const express  = require('express');

// const app = express();

// app.enable('case sensitive routing');
// app.disable('case sensitive routing');

// //app.param()
// app.param('id', (req, res, next, id) => {
//     const user = {
//         userid: id,
//         name: 'Bangladesh'
//     };
//     req.userDetails = user;
//     next();
// });


// app.get('/user/:id',(req, res) => {
//     console.log(req.userDetails);
//     res.send('Welcome to homepage');
// });

// app.listen(3000, () => {
//     console.log('listening on port 3000');
// });


//app.route()
// const express  = require('express');

// const app = express();


// app.route('/about/mission')
//     .get((req, res) => {
//         res.send('Welcome to application home get');
//     })
//     .post((req, res) => {
//         res.send('Welcome to application home post');
//     })
//     .put((req, res) => {
//         res.send('Welcome to application home put');
//     });

// app.listen(3000, () => {
//     console.log('listening on port 3000');
// });

//template engine 
//ejs
const express  = require('express');

const app = express();

app.set('view engine', 'ejs');

app.route('/about/mission')
    .get((req, res) => {
        res.render('pages/about');
    })
    .post((req, res) => {
        res.send('Welcome to application home post');
    })
    .put((req, res) => {
        res.send('Welcome to application home put');
    });

app.listen(3000, () => {
    console.log('listening on port 3000');
});