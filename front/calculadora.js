function suma(){
    var num1 = $('#num1').val();
    var num2 = $('#num2').val();

    var url = "http:localhost:8085/calculadora/suma/?num1=" + num1+"&num2=" + num2;
    console.log(url);

    $.getJSON(url, function(json){
        console.log(json);
        $('#result').html('<h1>'+json.result+'</h1>');
    });
}

function resta(){
    var num1 = $('#num1').val();
    var num2 = $('#num2').val();

    var url = "http:localhost:8085/calculadora/resta/?num1=" + num1+"&num2=" + num2;
    console.log(url);

    $.getJSON(url, function(json){
        console.log(json);
        $('#result').html('<h1>'+json.result+'</h1>');
    });
}

function multiplicacion(){
    var num1 = $('#num1').val();
    var num2 = $('#num2').val();

    var url = "http:localhost:8085/calculadora/mult/?num1=" + num1+"&num2=" + num2;
    console.log(url);

    $.getJSON(url, function(json){
        console.log(json);
        $('#result').html('<h1>'+json.result+'</h1>');
    });
}

function division(){
    var num1 = $('#num1').val();
    var num2 = $('#num2').val();

    var url = "http:localhost:8085/calculadora/div/?num1=" + num1+"&num2=" + num2;
    console.log(url);

    $.getJSON(url, function(json){
        console.log(json);
        $('#result').html('<h1>'+json.result+'</h1>');
    });
}

function potencia(){
    var num1 = $('#num1').val();
    var num2 = $('#num2').val();

    var url = "http:localhost:8085/calculadora/pow/?num1=" + num1+"&num2=" + num2;
    console.log(url);

    $.getJSON(url, function(json){
        console.log(json);
        $('#result').html('<h1>'+json.result+'</h1>');
    });
}