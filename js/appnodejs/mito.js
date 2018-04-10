//console.log(module);
// console.log('Inicia hoy descarga');
// function saludar(){
//     console.log('Inicia Descarga')
// }
let subscriptores =20000;
// let sergral= 1538;

// //module.exports.subscriptores=20000;
// module.exports.saludar=function(){
// console.log('Inicia descarga 2');
// }

// module.exports.subs=subscriptores;
// module.exports.sgh=sergral;
module.exports={
    subs:subscriptores,
    // saludar:function(){
    saludar: () => {
        console.log('Hola Developer');
    },
    sumar: (a, b) =>  a + b,
    restar: (a, b)=> a - b,
    multi:(a, b)=> a * b,
    dividir:(a,b)=>a/b,
    }

