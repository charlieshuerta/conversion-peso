'use strict'

var peso= parseInt(prompt("¿Cual es su peso?"));
var opc= parseInt(prompt("Seleccione una opción:\n1.Kilos a Libras\n2.Libras a Kilos"));
var conversion=0;
var txt="";

switch(opc){
    case 1:
        txt= "Libras";
        conversion= peso/0.454;
    break;
    case 2:
        txt= "Kilos";
        conversion=peso*0.454;
    break;
}
alert("Su peso es de "+conversion.toFixed(2)+" "+txt);