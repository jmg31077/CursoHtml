const _ =require('lodash');
const argv = require('yargs').argv;

//let comando=process.argv[2];
//if(comando ==='usuario'){
if(argv.usuario === 'dessofth') {
    let x={"nombre":"Jesus"}
let y={"apodo":"dessofth"}
let z= [
    {nombre:"Jesus", apellido:"Machicado",edad:35},
    {nombre:"dessofth", apellido:"Developer",edad:35}
]

// let res= _.assign(x,y);
// console.log(res);
// _.times(2,()=>console.log('MOdificar'));
let res=_.find(z,{nombre:"Jesus",apellido:"Machicado"});
console.log(res);
}else{
    console.log('usuario no valido');
}
//}

