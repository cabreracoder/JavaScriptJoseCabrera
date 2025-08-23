let opc = parseFloat(prompt("digite un número sabiendo que: \n1.Lunes \n2.Martes \n3.Miercoles \n4.Jueves \n5.Viernes \n6.Sabado \n7.Domingo"));
    if(opc>=1 && opc<6){
        alert("El dia que haz ingresado es un dia laboral");
    }else if(opc>5 && opc<8){
        alert("El dia que haz ingresado es fin de semana... DESCANSA");
    }