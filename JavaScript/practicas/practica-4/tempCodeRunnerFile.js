let numberGlobal = 5;

function changeNumber(number) {
    let numberIncremental = ++numberGlobal;
    console.log(numberIncremental);
    ++numberGlobal; 
    console.log(numberGlobal);
}

changeNumber();
changeNumber();