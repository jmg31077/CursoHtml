let prom = require('./promesa');

prom.calcular(4,3).then((resultado)=>{
    console.log(resultado)
},(error)=>{
    console.log(error);
});
// let promesa = new Promise((res, rej)=>{
//     //resolve('Exito al procesar los datos');
//     rej('Error');
// });
// promesa.then((resultado)=>{
//     console.log(resultado);
// },(error)=>{
//     console.log(error);
// });