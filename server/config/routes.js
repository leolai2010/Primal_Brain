var Worm = require('../controllers/worms.js');
var Drug = require('../controllers/worms.js');
module.exports = (app, upload)=>{
    app.get('/worms', (req,res)=>{
        Worm.index(req,res);
    });
    app.post('/new/worm/:id', upload.single('media'), (req,res)=>{
        Worm.new(req,res);
    });
    app.get('/delete/worm/:id', (req,res)=>{
        Worm.delete(req,res);
    });
    app.get('/show/worm/:id', (req,res)=>{
        Worm.show(req,res);
    });
    app.post('/edit/worm/:id', (req,res)=>{
        Worm.edit(req,res);
    });
    app.get('/drugs', (req,res)=>{
        Drug.main(req,res);
    });
    app.post('/create/drug/', upload.single('image'), (req,res)=>{
        Drug.create(req,res);
    });
    app.get('/remove/drug/:id', (req,res)=>{
        Drug.remove(req,res);
    });
    app.get('/display/drug/:id', (req,res)=>{
        Drug.display(req,res);
    });
    app.post('/update/drug/:id', (req,res)=>{
        Drug.update(req,res);
    });
}