const express = require('express');
const router = express.Router();

router.get('/',function(req,res,next){
	res.render('hello',{
		title :'Kaiser',
		name : 'Raghav'
	});
});
module.exports= router;