var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/create", function(req, res) {
	burger.create(["burger_name"], [req.body.name], function() {
	});
	res.redirect('/');
});

router.get("/update/:id", function(req, res) {
	console.log(req.body);
    var objColValsObject = {devour: true};
    var condition = 'id = ' + req.params.id;
    burger.update(objColValsObject, condition, function() {
    });
    res.redirect('/');
});

module.exports = router;