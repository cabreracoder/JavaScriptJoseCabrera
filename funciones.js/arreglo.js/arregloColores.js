function colores (){
    let colors =[]; // Creo el arreglo. 
    colors.push("Rojo"); // Agrego un dato al arreglo.
    colors.push("Verde"); //Agrego un dato al arreglo.
    colors.push("Azul"); //Agrego un dato al arreglo. 
    colors.unshift("Blanco"); //Agrega un nuevo dato al INICIO del arreglo.
    colors.pop(colors); // ELIMINA EL ULTIMO dato del arreglo. 
    colors.shift(colors); // ELIMINA EL PRIMER dato del arreglo.
    console.log(colors);
}
colores();