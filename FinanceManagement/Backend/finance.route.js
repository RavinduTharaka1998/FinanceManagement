const express = require('express');
const financeRoutes = express.Router();


let NativeTickets = require('./nativeTicket.model');
let ForeignTickets = require('./foreignTicket.model');

financeRoutes.route('/addnativeticket').post(function (req,res){
    console.log("native ticket add function called...")
    let nativetickets = new NativeTickets(req.body);
    nativetickets.save()
        .then(customers => {
            res.status(200).json({'nativeticket' : 'nativetickets is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

financeRoutes.route('/addforeignticket').post(function (req,res){
    console.log("foreign ticket add function called...");
    let foreigntickets = new ForeignTickets(req.body);
    foreigntickets.save()
        .then(foreigntickets => {
            res.status(200).json({'foreignticket' : 'foreigntickets is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

financeRoutes.route('/nativeticket').get(function (req, res){
    console.log("native ticket get function called...");
    NativeTickets.find(function (err,native){
        if(err)
            console.log(err);
        else{
            res.json(native)
        }
    });

});


financeRoutes.route('/onenativeticket/:id').get(function (req, res){
    console.log("one native ticket get function called...");
    let id = req.params.id;
    NativeTickets.findById(id,function (err,native){
        if(err)
            console.log(err);
        else{
            res.json(native)
        }
    });

});

financeRoutes.route('/foreignticket').get(function (req, res){
    console.log("foreign ticket get function called...");
    ForeignTickets.find(function (err,foreign){
        if(err)
            console.log(err);
        else{
            res.json(foreign)
        }
    });

});

financeRoutes.route('/oneforeignticket/:id').get(function (req, res){
    console.log("one foreign ticket get function called...");
    let id = req.params.id;
    ForeignTickets.findById(id,function (err,foreign){
        if(err)
            console.log(err);
        else{
            res.json(foreign)
        }
    });

});

financeRoutes.route('/editnativeticket/:id').get(function (req,res){
    let id = req.params.id;
    console.log("native ticket edit function called..." +id);
    NativeTickets.findById(id, function (err,native){
        res.json(native);
    });
});

financeRoutes.route('/updatenativeticket/:id').post(function (req,res){
    let id = req.params.id;
    NativeTickets.findById(id, function (err, native){
        if(!native)
            res.status(404).send("Data is not found??");
        else{
            native.rnumber = req.body.rnumber;
            native.adult = req.body.adult;
            native.child = req.body.child;
            native.aprice = req.body.aprice;
            native.cprice = req.body.cprice;
            native.total = req.body.total;
            native.date = req.body.date;


            native.save().then(native => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

financeRoutes.route('/deletenativeticket/:id').get(function(req,res){
    NativeTickets.findByIdAndRemove({_id:req.params.id}, function (err, native){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});


financeRoutes.route('/editforeignticket/:id').get(function (req,res){
    let id = req.params.id;
    console.log("foreign ticket edit function called..." +id);
    ForeignTickets.findById(id, function (err,foreign){
        res.json(foreign);
    });
});

financeRoutes.route('/updateforeignticket/:id').post(function (req,res){
    let id = req.params.id;
    ForeignTickets.findById(id, function (err, foreign){
        if(!foreign)
            res.status(404).send("Data is not found??");
        else{
            foreign.rnumber = req.body.rnumber;
            foreign.adult = req.body.adult;
            foreign.child = req.body.child;
            foreign.aprice = req.body.aprice;
            foreign.cprice = req.body.cprice;
            foreign.total = req.body.total;
            foreign.date = req.body.date;


            foreign.save().then(foreign => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

financeRoutes.route('/deleteforeignticket/:id').get(function(req,res){
    ForeignTickets.findByIdAndRemove({_id:req.params.id}, function (err, foreign){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});




module.exports = financeRoutes;