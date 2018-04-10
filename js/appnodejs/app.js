
const os = require('os');
const fs =require('fs');
const mi=require('./mito');
let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();
let cpu_string = JSON.stringify(cpu);
// mi.saludar();
// console.log(mi.subs);
let res=mi.sumar(20,9);
console.log(res);
// console.log(mi.sgh);
// fs.appendFile('mitocode.txt',`Informacion del cpu: ${cpu_string} `, function(error){
//     if(error){
//         console.log('error al crear archivo');
//     }
// })
// console.log(cpu);
// console.log(sistema);
// console.log(usuario);