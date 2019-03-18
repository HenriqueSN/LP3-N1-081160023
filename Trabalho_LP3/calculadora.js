function botao(num)
{
    
    var x = document.calc.visor.value;
    document.calc.visor.value = x + num;
}

function reset()
{
    document.calc.visor.clear;
}

function calculo()
{
    var resultado;
    
    resultado = eval(document.calc.visor.value);
    
    reset();
    
    document.calc.visor.value = resultado;
}