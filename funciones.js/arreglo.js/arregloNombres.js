function nombres (){ //Creo una funcion.
    let nombre = []; // creo un arreglo.
    nombre.push("Ana"); //Agrego un dato al arreglo.
    nombre.push("Luis"); //Agrego un dato al arreglo.
    nombre.push("Carlos"); //Agrego un dato al arreglo.
    nombre.push("Jose"); //Agrego un dato al arreglo.
    console.log(nombre); // Muestro los datos del arreglo.
    nombre[1]="Maria"; //Modifico el dato existente en la posicion 1 del arreglo.
    console.log(nombre); // Muestro los datos del arreglo.
    nombre.splice(2,3); // ELIMINAMOS 2 datos con posiciones espesificas.
    nombre.splice(1,0,"Jairo","Javier"); // AGREGAMOS Datos desde una posicion seleccionada.
    nombre.splice(1,2, "Sandra"); // MODIFICAMOS un dato especificando la posicion.
    console.log(nombre);
}
nombres();