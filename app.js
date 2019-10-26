const express = require('express')
const app = express()
const path = require('path')
var methodOverride = require('method-override')
const bodyParser = require('body-parser')
const index = require('./routes/index.js')
const json = require('./routes/json.js')

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use('/',index);
app.use('/json',json);
app.use( express.static( "public" ) )
app.use(methodOverride());
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.render('error.ejs');
})
const port = process.env.PORT || 3004
app.listen(port,(err)=>
{
if(err)
{
 console.log('something wrong')   
}
console.log(`this is running on ${port}`)
console.log('Press Ctrl+C')
}
)