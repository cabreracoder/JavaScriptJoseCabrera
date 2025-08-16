let num1 = parseInt (prompt("Ingresa el primer numero"));
var num2 = parseInt (prompt("Ingresa el segundo numero"));
let num3 = parseInt (prompt("Ingresa el tercer numero"));
var mayor; 


if(num1>num2 && num1>num3){
    mayor=num1;
}else if(num2>num1 && num2>num3){
    mayor=num2;
}else {
    mayor= num3;
}

alert("LOS NUMEROS INGRESADOS FUERON:\nNumero 1: " + num1+
    "\nNumero 2: " + num2+
    "\nNumero 3: " + num3+
    "\nEl numero mayor entre los 3 es : " + mayor);