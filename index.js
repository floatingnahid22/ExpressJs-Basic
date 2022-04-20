const express  = require('express');

const app = express();

//express.static()
// app.use(express.static(`${__dirname}/public/`, {
//     index: "home.html",
// })
// );

//express.router
const router = express.Router({
    caseSensitive: false,
});
app.use(router);

app.get('/about', (req, res) => {
    res.send('this is home page');
});

app.post('/', (req, res) => {
    // console.log(req.body);
    res.send('this is home page with post request');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});