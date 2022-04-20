// accepts method
// const handle = (req, res) => {
//     console.log(req.accepts('json'));
//     res.send('hello');
// };

//get method
const handle = (req, res) => {
    console.log(req.get('Accept'));
    res.send('hello world');
};

module.exports = handle;