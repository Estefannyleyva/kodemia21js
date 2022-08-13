// ejercicio 1 string


// let nameGlobal = 'Ivan';

// function changeName(name) {
//     nameGlobal = 'fanny';
//     console.log(nameGlobal);
// }

// changeName();


// ejercicio 1 number
let numberGlobal = 5;

function changeNumber(number) {
    // let numberIncremental = ++numberGlobal;
    // console.log(numberIncremental);
    numberGlobal++; 
    console.log(numberGlobal);
}

changeNumber();
changeNumber();


// ejercicio 2 
let tipoNumero = function (number2) {
    let par;
    if (number2 % 2 === 0) {
        par = true;
    }else {
        par = false;
    }
   return par;
}
console.log(tipoNumero(11));
