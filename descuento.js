let totalCompra = parseInt (prompt("Ingresa el valor de tu compra"));
var totalDescuento ;

if(totalCompra>100 && totalCompra<200){
    totalDescuento= totalCompra-(totalCompra*0.10);    
    alert("Tu compra supero el valor de $100, obtienes un 10% de descuento. Total a pagar " + totalDescuento);
}

else if(totalCompra>200){
    totalDescuento= totalCompra-(totalCompra*0.20);
    alert("Tu compra supero el valor de $200, obtienes un 20% de descuento. Total a pagar " + totalDescuento);
}
else {
    alert("NO tienes descuento");
}

// OPERADOR TERNARIO

(totalCompra>100 && totalCompra<200)?
alert("Tu compra supero el valor de $100, obtienes un 10% de descuento. Total a pagar " + totalDescuento):
(totalCompra>200)?
alert("Tu compra supero el valor de $200, obtienes un 20% de descuento. Total a pagar " + totalDescuento):
(totalCompra<100)?alert("Total a pagar " + totalCompra):alert("NO tienes descuento")



