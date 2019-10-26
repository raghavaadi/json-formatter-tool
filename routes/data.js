const express = require('express');
const router = express.Router();

router.get('/',function(req,res,next){
	res.render('data',{
		title :'Kaiser',
		name : 'Raghav'
	});
});
module.exports= router;