/*process.argv.forEach((index, value) => {
    console.log(`${index} : ${value}`);
});
const colors = [`Blue`,`Yellow`,];
console.table(colors);*/

const { Interface } = require("readline");

/*const edad = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout,
});

edad.question("cual es tu edad: ", edad=>{
    if(edad >= 18){
        console.log(`Es mayor de edad`);
    }else{
        console.log('Es menor de edad')
    }
});*/

let response = "";

do{
    console.log("1_Suma");
    console.log("2_Resta");
    console.log("3_Multiplicacion");
    console.log("4_Division");
    console.log("5_Salir");
    response = Interface.question("Que operacion desea realixar, escriba el numero");

    if (response !="5"){
        const firstNumber = interface.question("Digite el primer numero: ");
        const secondNumber = interface.question("Digite el primer numero: ");

        switch(response){
            case "1":
                var result = parseInt(firstNumber) + parseInt(secondNumber);
                console.log("El resultado es: "+result);
                break;
            case "2":
                var result = parseInt(firstNumber) - parseInt(secondNumber);
                console.log("El resultado es: "+result);
                break;
            case "3":
                 var result = parseInt(firstNumber) * parseInt(secondNumber);
                 console.log("El resultado es: "+result);
                 break;
            case "4":
                var result = parseInt(firstNumber) / parseInt(secondNumber);
                console.log("El resultado es: "+result);
                default:
                break;
        }
    }

}while(response !="5");


