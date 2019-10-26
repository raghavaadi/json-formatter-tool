const express = require('express');
const router = express.Router();

router.get(function(err,req,res,next){
	res.render('error',{
		title :'vada pocheaaa',
		name : 'Raghav'
	});
});
module.exports= router;