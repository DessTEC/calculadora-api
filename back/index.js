//import expŕess and cors
const cors = require('cors')
const express = require('express');

//create the express app with cors enabled
const app = express();
app.use(cors());
app.options('*',cors());

//define port
const port = 8085;

//define root controller (GET)
app.get('/', (req,res,next) =>{
    res.send('welcome to my api...');
});

//define GET controller for triangulo
app.get('/calculadora/suma', (req, res, next) => {
    var num1 = req.query.num1;
    var num2 = req.query.num2;
    console.log(num1);
    console.log(num2);

    var suma = parseFloat(num1)+parseFloat(num2);
    var objResult = {
        result: suma
    }
    res.send(objResult);
});

//define GET controller for triangulo
app.get('/calculadora/suma', (req, res, next) => {
    var num1 = req.query.num1;
    var num2 = req.query.num2;
    console.log(num1);
    console.log(num2);

    var suma = parseFloat(num1)+parseFloat(num2);
    var objResult = {
        result: suma
    }
    res.send(objResult);
});

//define GET controller for triangulo
app.get('/calculadora/resta', (req, res, next) => {
    var num1 = req.query.num1;
    var num2 = req.query.num2;
    console.log(num1);
    console.log(num2);

    var resta = num1 - num2;
    var objResult = {
        result: resta
    }
    res.send(objResult);
});

//define GET controller for triangulo
app.get('/calculadora/mult', (req, res, next) => {
    var num1 = req.query.num1;
    var num2 = req.query.num2;
    console.log(num1);
    console.log(num2);

    var mult = num1 * num2;
    var objResult = {
        result: mult
    }
    res.send(objResult);
});

//define GET controller for triangulo
app.get('/calculadora/div', (req, res, next) => {
    var num1 = req.query.num1;
    var num2 = req.query.num2;
    console.log(num1);
    console.log(num2);

    var div = num1/num2;
    var objResult = {
        result: div
    }
    res.send(objResult);
});

//define GET controller for triangulo
app.get('/calculadora/pow', (req, res, next) => {
    var num1 = req.query.num1;
    var num2 = req.query.num2;
    console.log(num1);
    console.log(num2);

    var pow = Math.pow(num1,num2);
    var objResult = {
        result: pow
    }
    res.send(objResult);
});



app.listen(port, () => console.log('listening on port ' + port));