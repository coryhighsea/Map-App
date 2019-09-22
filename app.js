var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    router = express.Router(),
    path = require('path')

mongoose.connect("mongodb://localhost/map_app", {useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')

var locationSchema = new mongoose.Schema({
    name: String,
    lat: Number,
    long: Number 
});

var Location = mongoose.model('Location', locationSchema);



app.get('/', function(req, res){
    res.render('landing')
});

app.get('/map', function(req, res){
    Location.find({}, function(err, allLocations){
        if(err){
            console.log(err)
        } else{
            res.render('map', {locations: allLocations})

        }
    });
});

// app.get('/locations', function(req, res){
//     Location.find({}, function(err, allLocations){
//         if(err){
//             console.log(err);
//         }else {
//              res.render('locations', {locations: allLocations})

//         }
//     });
//     // res.render('campgrounds', {campgrounds: campgrounds})
// });

app.post('/map', function(req, res){
    var name = req.body.name;
    var lat = req.body.lat;
    var long = req.body.long;
    var newLocation = {name: name, lat: lat, long: long}
    // campgrounds.push(newCampground);
    Location.create(newLocation, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect('/map');

        }
    })
    // res.send('You hit the post route')
});


app.get('/locations/new', function(req, res){
    res.render('new.ejs')
    });

    

app.listen(3000, function(){
    console.log('The MapApp server has started');
})

