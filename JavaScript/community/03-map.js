const arrayNames = ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva'];
function map(myArray, callback) {
    let newArray = [];
    for (let i = 0; i<myArray.length; i++){
        const elementCurrent = myArray[i];
        const newElement = callback(elementCurrent);
        newArray.push(newElement)                                          
    }
    return newArray  
}
const iniciales = (myArray) => {
    const arraySplit = myArray.split(' ');
    let inicialesCompletas = [];
    for(let i=0; i<arraySplit.length; i++) {
        inicialesCompletas.push(arraySplit[[0]])
    }
    const stringInitials = inicialesCompletas.join(' ') // 'M.-C.-R.'
    // .concat([1,2,3], [3,4,6]) // -> [1,2,3,3,4,6]
    return stringInitials
}
const inicialesFinales = map(arrayNames, iniciales)
console.log(inicialesFinales)
// const numbersArray = [2,5,8,8]
// const numbersReduced = map(numbersArray, (number) => number -1 );
// console.log(numbersReduced)

// const numbersDuplicated = map(numbersArray,(number) => number*2)
// console.log(numbersDuplicated)
// const nameArray = ['Jonatan', 'Manu', 'Annie', 'Cin'];
// const primeraInicial = map(nameArray, (myArray) => (myArray[0]))
// console.log(primeraInicial)