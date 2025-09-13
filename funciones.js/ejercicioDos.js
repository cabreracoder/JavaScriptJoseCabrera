function Resta (num1,num2){
    let resultado = num1-num2;
    alert ("El resultado de la RESTA es: " + resultado);
}
function Suma (num1,num2){
    let resultado = num1+num2;
    alert("El resultado de la SUMA es: " + resultado);
}
function Multiplicacion (num1,num2){
    let resultado = num1*num2;
    alert("El resultado de la MULTIPLICACION es: " + resultado);
}
function Division (num1,num2){
    if(num2===0){
        alert("No se puede dividir entre cero");
        }else{
    let resultado = num1/num2;
    alert("El resultado de la DIVISION es: " + resultado);
    }
}
var n1 = parseInt (prompt("Digite numero 1."));
let n2 = parseInt (prompt("Digite el numero 2."));

    let opc = parseInt (prompt("Seleccione la operacion deseada:\n"+
        "1.Resta\n"+
        "2.Suma\n"+
        "3.Multiplicacion\n"+
        "4.Division"
    ));

    switch(opc){
        case 1:
          Resta(n1,n2);
          break;
        case 2:
           Suma( n1,n2);
           break;
        case 3:
            Multiplicacion(n1,n2);
            break;
        case 4:
            Division(n1,n2);
            default:
                alert("Opcion NO valida");  
    }