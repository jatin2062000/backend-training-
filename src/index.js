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
.catch ( err => console.log(err) )



app.use('/', route);

app.use (
    function (req, res, next) {
        // console.log ("inside GLOBAL MW");
        let obj={
         "name":"jatin",
         "city":"delhi",
         "address_pincode":"110045",
        }
        obj.age=12             // agr hum bhr bhi bhi likh kr print kr sakte hai toh hum bhr bhi write kr skate hai
        obj["age"]=12


        console.log(obj.name)
        console.log(obj["name"])
        console.log(obj.city)
        console.log(obj["city"])
        console.log(obj.address_pincode)
        console.log(obj["city"],obj["address_pincode"])
        console.log(obj.age)
        console.log(obj["age"])
       

        res.send({msg:"done"})
  }
  );


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
