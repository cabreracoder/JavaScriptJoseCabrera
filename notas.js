let nota1 = parseFloat (prompt ("Ingrese nota 1 : "));
var nota2 = parseFloat (prompt ("Ingrese nota 2 : "));
let nota3 = parseFloat (prompt ("Ingrese nota 3 : "));

var promedio = (nota1+nota2+nota3)/3;

    if (promedio>=3){
        alert(" Su estado es APROBADO");
    }else if (promedio>=2 && promedio<3){
        alert ("Su estado es RECUPERACION");
    }else 
        alert ("Su estado es REPROBADO");

