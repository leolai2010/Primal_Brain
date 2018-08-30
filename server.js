var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var app = express();
var multer  = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './public/src/assets/uploads/');
    },
    filename: (req,file,cb)=>{
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage})
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/mongoose.js');
require('./server/models/Worm.js');
require('./server/config/routes.js')(app, upload);
require('./server/controllers/worms.js');

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
app.listen(8000, function() {
    console.log("listening on port 8000");
})