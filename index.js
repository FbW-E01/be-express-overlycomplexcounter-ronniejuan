import express from 'express'

const app = express()

let number = 0
app.get('/', (req,res)=>{
    res.send(`number is ${number}`)
})

app.post('/inc',(req,res)=>{
    number = number +1 
    res.send(`number is ${number}`)
})



app.post('/dec',(req,res)=>{
    number = number  - 1 
    res.send(`number is ${number}`)
})


app.post('/die',(req,res)=>{
    process.exit(0)
})



const port = 2121
app.listen(port,()=>{
    console.log("http://localhost:" + port)
}
)