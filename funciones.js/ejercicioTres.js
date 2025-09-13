//Hacer un programa que muestre por ALERT o por CONSOLA los numeros del 1 al 100,
// sutitullalos segun los sgts puntos:
// 1.los multiplos de 3 por la palabra FIZZ.
// 2. los multiplos de 5 por la plabra BUZZ.
// 3: Los multiplos de 3 y 5 por la palabra FIZZBUZZ.

function fizzbuzz (numero){
        if (numero>1 && numero <100){
            if (numero %3 === 0 && numero % 5 === 0){
                alert(" el " + num + "es multiplo de 3 y 5 ...FIZZBUZZ");
               }
               if (numero % 3 === 0 && numero % 3 !== 0 ){
                alert("EL " + num + " es multiplo de 3 ...FIZZ");
               }
               if (numero % 5 === 0 && numero % 5 !== 0 ){
                alert("EL " + num + " es multiplo de 5 ... BUZZ");
               }

        }
}
let num = parseInt(prompt("Digite el numero a evaluar"));
fizzbuzz(num);