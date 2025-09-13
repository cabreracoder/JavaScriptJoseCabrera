var peso = parseFloat(prompt("Ingrese su peso por favor en Kilobramos"));
let estatura = parseFloat(prompt("Ingrese por favor su estatura en metros"));
var imc = peso/(estatura*estatura)

    if(imc<18.5){
        alert("Tu peso actual es : "+ peso + " KG"+ " y tu estatura es : " + estatura +" Mts "+ "\n!UPS¡ estas en BAJO PESO, debes comer mas");
    }else if(imc>=18.5 && imc<25){
        alert("Tu peso actual es : "+ peso + " KG"+ "  y tu estatura es : " + estatura +" Mts "+  "\n!MUY BIEN¡ tu peso es normal");
    }else if(imc<=25 && imc<30){
        alert("Tu peso actual es : "+ peso + " KG"+ "  y tu estatura es : " + estatura +" Mts "+  "\n!ATENTO¡ estas en sobrepeso :(");
    }else if(imc>=30){
        alert("Tu peso actual es : "+ peso + " KG"+ "  y tu estatura es : " + estatura +" Mts "+  "\n!OJO¡ estas en obesidad, haz dieta");
    }

