const express = require('express')
const app = express()

app.get('/hehe',(req,res)=>{
  res.send('呵呵哒 线上测试')
})
app.listen(3000,()=>{
  console.log('server start')
})