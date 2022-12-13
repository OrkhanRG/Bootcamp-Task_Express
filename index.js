let employee = [
    {id:'1', name:'Orxan', age:20},
    {id:'2', name:'Mumin', age:19},
    {id:'3', name:'Elcan', age:19}
]

const express = require('express')
const app = express();

employee = JSON.stringify(employee)

app.get('/', (req,res) =>{
    res.send(employee)
})

app.listen(3002)

fetch('http://localhost:3002/')
.then(res =>res.json())
.then(data =>[
    console.log(data)
])