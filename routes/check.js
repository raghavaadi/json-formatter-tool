const express = require('express');
const router = express.Router();
const db=require('../dbhelper/dbstuff.js');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

async function createuser(user1,password1,name1,email1)
{
	const register= await new  db.user({
		user:user1,
		password: password1,
		name:name1,
		email:email1
	}); 
	const result= await register.save();
    console.log(result);
    console.log("result saved successfuly")
};
router.post('/',urlencodedParser,function(req,res){
    res.send("hello");
})
module.exports= router;