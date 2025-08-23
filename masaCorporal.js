var peso = parseFloat(prompt("Ingrese su peso por favor en Kilobramos"));
let estatura = parseFloat(prompt("Ingrese por favor su estatura en metros"));
var imc = peso/(estatura*estatura)

    if(imc<18.5){
        alert("Tu peso actual es : "+ peso + " y tu estatura es : " + estatura + "\n!UPS¡ estas en BAJO PESO, debes comer mas");
    }else if(imc>=18.5 && imc<25){
        alert("Tu peso actual es : "+ peso + " y tu estatura es : " + estatura + "\n!MUY BIEN¡ tu peso es normal");
    }else if(imc>=30){
        alert("Tu peso actual es : "+ peso + " y tu estatura es : " + estatura + "\n!OJO¡ estas en obesidad, haz dieta");
    }

