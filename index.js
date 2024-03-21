const express= require('express');
const app=express();
const cors=require('cors');

app.use(cors({
    path:'*'
}))

PORT=4000;

app.get('/', (req, res)=>{
    res.send('HELLO AWS!!!!')
})

app.get('/name', (req, res)=>{
    res.json({
        name:'Vibha Mishra'
    })
})
app.listen(PORT, (req, res)=>{
    console.log('server is ready');
})