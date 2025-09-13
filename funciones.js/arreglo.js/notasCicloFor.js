function notas(){
    let nota =[];

    
    for(let cont=0; cont<5;cont++){
        let datos= parseFloat(prompt("Ingrese nota " +cont));
        nota[cont]=datos;
    }

    let lista= "";
        for(let i=0;i<=nota.length;i++){
            lista += "Nota " + (i+1) + " : " + nota[i] + "\n";
        }
        alert(lista);
}

notas();
