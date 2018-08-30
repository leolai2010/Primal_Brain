var mongoose = require('mongoose');
var WormSchema = new mongoose.Schema({
    wormname: {type: String, required: [true, "Name is required"], minlength: [3, "Must have 3 Characters"]},
    velocity: {type: Number, required: [true, "Velocity is required"], minlength: [1, "Must have at least 1 Digit"]},
    behavior: {type: String, required: [true, "Behavior is required"], minlength: [3, "Must have at least 3 Characters"]},
    media: {data: Buffer, type: String}
}, {timestamps: true})
var DrugSchema = new mongoose.Schema({
    drugname: {type: String, required: [true, "Name is required"], minlength: [3, "Must have 3 Characters"]},
    concentration: {type: Number, required: [true, "Concentration is required"], minlength: [1, "Must have at least 1 Digit"]},
    image: {data: Buffer, type: String},
    worms: [WormSchema]
}, {timestamps: true})
mongoose.model('Worm', WormSchema); 
mongoose.model('Drug', DrugSchema);