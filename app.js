var express = require('express')
var app = express()
var port = process.env.PORT || 3000
app.listen(port)

app.get('/name/:id',(req,res)=>{
res.end(req.params.id)
})