import express from 'express';
const app = express();

import * as calculateFunctionsJs from './controllers/calculateFunctions.js';

app.use(express.json());

/*app.get('/add',(req,res)=>{
    let n1=4;
    let n2=4;
    let sum=n1+n2;
res.send(`${sum}`);
});*/

app.post('/add', calculateFunctionsJs.add)

app.post('/subtract' , calculateFunctionsJs.subtract)

app.post('/multiply' ,calculateFunctionsJs.multiply )

app.post('/divide' , calculateFunctionsJs.divide)

app.post('/modulas' , calculateFunctionsJs.modulas)

app.post('/exponential', calculateFunctionsJs.exponent)

app.post('/log' , calculateFunctionsJs.logrithm)

app.listen(4000, ()=>{
    console.log("RUNNING AT PORt 4000");
});

function newFunction() {
    const express = require(express);
    const app = express();
    return { app, express };
}
