let temperatura = parseInt (prompt("Ingresa la temperatura actual"));
    if (temperatura <15){
        alert("la temperatura actual está en el parametro de FRIO");
    }else if(temperatura>=15 && temperatura<26){
        alert("la temperatura actual esta en el parametro AGRADABLE");
    }else if(temperatura>=26 && temperatura<36){
        alert("la temperatura actual esta en el parametro CALUROSO");
    }else if(temperatura>=36){
        alert("la temperatura actual esta en el parametro MUY CALUROSO");
    }

//OPERADOR TERNARIO

(temperatura <15)?alert("la temperatura actual está en el parametro de FRIO"):
(temperatura>=15 && temperatura<26)?alert("la temperatura actual esta en el parametro AGRADABLE"):
(temperatura>=26 && temperatura<36)?alert("la temperatura actual esta en el parametro CALUROSO"):
alert()