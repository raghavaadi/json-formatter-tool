const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonlib=require('comment-json')
var format = require('xml-formatter');

router.get('/',function(req,res,next){
	res.render('xml',{
		title :'xml formatter',
        name : 'Raghav',
        input: '',
        ress: ''
	});
});
router.post('/', urlencodedParser, function (req, res) {
    console.log(req.body);
    var h=req.body.input_xml
    var value=h.toString();
    if(req.body.ma){
    try{  
    const preFinal =format(value)
    //res.send(JSON.stringify(preFinal, null, 2));
    res.render('xml',{
		title :'xml formatter',
        name : 'Raghav',
        input:h,
        ress: preFinal
	});

      
    // for(const objs of Object.keys(JSON.parse(value)) )
    // {
    //    // console.log(obs)
    // }
    }
    catch{
        console.log('eerror')
        res.send('enter a valid xml');
    }
}
else if(req.body.ma1)
{
    try{  
        
        res.render('xml',{
            title :'xml formatter',
            name : 'Raghav',
            input:h,
            ress: format(value)
        });
       // res.send(JSON.stringify(value));
        }
        catch{
            console.log('eerror')
            res.send('enter a valid xml');
        }
    console.log('reached here')
}
else if(req.body.ma2)
{
    try{  
        
        res.render('xml',{
            title :'xml formatter',
            name : 'Raghav',
            input:h,
            ress: format(value)
        });
       // res.send(JSON.stringify(value));
        }
        catch{
            console.log('eerror')
            res.send('enter a valid xml');
        }
    console.log('reached here')
}
//  res.send('welcome, ' + req.body.user);
})
module.exports= router;