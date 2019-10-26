const express = require('express');
const router = express.Router();

router.get('/',function(req,res,next){
	res.render('index',{
		title :'JSON formatter',
		name : 'Raghav'
	});
});
module.exports= router;