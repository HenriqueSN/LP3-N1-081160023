
function Binary_to_Decimal()
{
var binary = document.conversor.visor1.value;
var decimal = parseInt( binary, 2 );
document.conversor.visor1.clear;
document.conversor.visor1.value = decimal;    

}

