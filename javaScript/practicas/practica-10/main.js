const autos = [
    {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
];
// let comparar = function(a,b){
//     if (a>b) {
//       return -1;
//     }else if (a<b) {
//       return 1;
//     }
//     else{
//         return -1;
//     }
    
//   }
//   console.log(autos.color.sort(comparar));




function ordenarAutos(auto) {

    let comparar = function(a,b){
            if (a.color<b.color) {
              return -1;
            }else if (a.color>b.color) {
              return 1;
            }
            else{
                return -1;
            }
            
          }
    auto.sort(comparar);
    return auto;
    
}

let auto = ordenarAutos(autos)
console.log(auto)

let students = [
    {
      name: 'Alvaro',
      score: 10,
    },
    {
      name: 'Daniel',
      score: 16,
    },
    {
      name: 'Alexys',
      score: 12,
    },
    {
      name: 'Rafa',
      score: 17,
    },
    {
      name: 'Alejandro',
      score: 8,
    },
    {
      name: 'Sofia',
      score: 9,
    }
  ];

  let aprobados = students.filter((students)=>{
     if (students.score>=10){
        return students;
     }
     
  }) 
  console.log()

  const autos2 = [
    {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
];

const auto2 = autos2.map((auto)=>{
  let autosMapeados = {
    modelo: auto.modelo,
    year: auto.year,
    precio: auto.precio,

  };
  return autosMapeados;
})
console.log(auto2)