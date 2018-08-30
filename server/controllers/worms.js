const mongoose = require('mongoose');
var Worm = mongoose.model('Worm');
var Drug = mongoose.model('Drug');
var fs = require('fs');

module.exports = {
    index:(req,res)=>{
        Worm.find({}, (err, worm)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                res.json(worm);
             }
        });
    },
    new:(req,res)=>{          
        img = fs.readFileSync(req.file.path);
        bodyCopy = req.body;
        bodyCopy.media = img;
        Drug.findOneAndUpdate({_id: req.params.id},{$push:{worms:bodyCopy}}, (err, worm)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(worm);
            }
        });
    },
    delete:(req,res)=>{
        Worm.remove({_id:req.params.id}, (err, worm)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(worm);
            }
        });
    },
    show:(req,res)=>{
        Worm.findOne({_id:req.params.id}, (err, worm)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(worm);
            }
        })
    },
    edit:(req,res)=>{        
        Worm.update({_id: req.body._id}, req.body, (err,data)=>{
            if(err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else { 
                res.json(data);
            }
        });
    },
    main:(req,res)=>{
        Drug.find({}, (err, drug)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                res.json(drug);
             }
        });
    },
    create:(req,res)=>{
        console.log(req.file.path)
        img = fs.readFileSync(req.file.path);
        bodyCopy = req.body;
        bodyCopy.image = img;
        Drug.create(bodyCopy, (err, drug)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(drug);
            }
        });
    },
    remove:(req,res)=>{
        Drug.remove({_id:req.params.id}, (err, drug)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(drug);
            }
        });
    },
    display:(req,res)=>{
        Drug.findOne({_id:req.params.id}, (err, drug)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(drug);
            }
        })
    },
    update:(req,res)=>{        
        Drug.update({_id: req.body._id}, req.body, (err,data)=>{
            if(err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else { 
                res.json(data);
            }
        });
    },
}