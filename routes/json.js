const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonlib=require('comment-json')

router.get('/',function(req,res,next){
	res.render('json',{
		title :'JSON formatter',
        name : 'Raghav',
        input: '',
        ress: ''
	});
});
router.post('/', urlencodedParser, function (req, res) {
    console.log(req.body);
    var h=req.body.input_json
    var value=h.toString();
    if(req.body.ma){
    try{  
    const preFinal =JSON.parse(value)
    //res.send(JSON.stringify(preFinal, null, 2));
    res.render('json',{
		title :'JSON formatter',
        name : 'Raghav',
        input:h,
        ress: JSON.stringify(preFinal, null, 2)
	});
    console.log(JSON.stringify(preFinal, null, 2))
    }
    catch{
        console.log('eerror')
        res.send('enter a valid JSON');
    }
}
else if(req.body.ma1)
{
    try{  
        
        res.send(JSON.stringify(value));
        }
        catch{
            console.log('eerror')
            res.send('enter a valid JSON');
        }
    console.log('reached here')
}
//  res.send('welcome, ' + req.body.user);
})
module.exports= router;