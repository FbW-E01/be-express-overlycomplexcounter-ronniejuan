import express from 'express';

const app = express();

let numberr = 100;


// Get Method
app.get('/',(req,res)=>{
    res.send(`number is ${numberr}`)
});

// POST method

app.post('/inc',(req,res)=>{
    numberr = numberr + 50
    res.send(`number is ${numberr}`)
});

// POST method

app.post('/dec',(req,res)=>{
    numberr = numberr - 120
    res.send(`number is ${numberr}`)
});

// POST method //die

app.post('/die',(req,res)=>{
    process.exit(0)
    res.send(`number is ${numberr}`)
});



const port = 9090;
app.listen(port,()=>{
    console.log("http://localhost:" + port)

}
)