//path

// const express  = require('express');

// const app = express();

// const adminRoute = express.Router();
// adminRoute.get('/dashboard', (req, res) => {
//     console.log(req.path);
//     res.send('We are in admin dashboard');
// });

// app.use('/admin', adminRoute);

// app.get('/user/:id',(req, res) => {
//     console.log(req.path);
//     res.send('Hello World');
// });
    
// app.listen(3000, () => {
//     console.log('listening on port 3000');
// });

// const express  = require('express');
// const cookieParser  = require('cookie-parser');


// const app = express();
// app.use(express.json());
// app.use(cookieParser());

// const adminRoute = express.Router();
// adminRoute.get('/dashboard', (req, res) => {
//     console.log(req.hostname);
//     res.send('We are in admin dashboard');
// });

// app.use('/admin', adminRoute);

// app.get('/user/:id',(req, res) => {
//    // console.log(req.hostname);
//    // console.log(req.protocol);
//    // console.log(req.params);
//    // console.log(req.query);
//    // console.log(req.query);
//    // console.log(req.cookies);
//     console.log(req.secure);
//     res.send('Hello World');
// });

// app.post('/user/',(req, res) => {
//     console.log(req.body);
//     res.send('Hello World post');
// });
    
// app.listen(3000, () => {
//     console.log('listening on port 3000');
// });


//route
// 


// methods
const express  = require('express');
const cookieParser  = require('cookie-parser');
const handle = require('./handle');


const app = express();
app.use(express.json());
app.use(cookieParser());

const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
    console.log(req.hostname);
    res.send('We are in admin dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/:id', handle);

app.post('/user/',(req, res) => {
    console.log(req.route);
    res.send('Hello World post');
});
app.get('/user/',(req, res) => {
    console.log(req.route);
    res.send('Hello World get');
});
    
app.listen(3000, () => {
    console.log('listening on port 3000');
});