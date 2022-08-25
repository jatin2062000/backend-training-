const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://jatinkumar0007:zWDyt4ENYWMMhjva@cluster0.a0k73vb.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) );

const moment = require('moment');
let time = moment();
app.use (function (req, res, next) {
    let url= req.originalUrl
    console.log(url)
    let ip= req.ip
    console.log(ip)
    console.log(time.format('h:mm:ss a'));
    console.log(time.format('YYYY,MM,DD'));
    next()
})
// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});