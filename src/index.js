const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

mongoose.connect("mongodb+srv://jatinkumar0007:zWDyt4ENYWMMhjva@cluster0.a0k73vb.mongodb.net/?retryWrites=true&w=majority",{
    useNewurlparser:true
}) 
.then( ()=> console.log("Mongodb is connected"))
.catch(  err => console.log(err))


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


