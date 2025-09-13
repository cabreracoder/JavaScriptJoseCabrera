function numeros (){ 
    let numeritos = [1,2,3,4]; //Creo un Arreglo
    console.log (numeritos[2]); //Muestro el dato de la posicion 2 del arreglo.
    console.log (numeritos[0]); //Muestro el dato de la posucion 0 del arreglo.
    console.log(numeritos);  //muestro los datos del arreglo.
    numeritos[2]=7; //Modifico el dato de la poscion 2 del arreglo.
    console.log(numeritos); //mMuestro los datos del arreglo.
    numeritos[4]=22; //Agrego un nuevo dato al arreglo.
    console.log(numeritos); //muestro los datos del arreglo. 
    numeritos.push(33); //Agrego automaticamente un dato al arreglo.
    console.log(numeritos);  //Muestro los datos del arreglo.
}
numeros(); //LLamo la funcion.

