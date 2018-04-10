 const fs=require('fs');
 console.log('Iniciado')
// fs.readFile('data.txt','utf-8',(error, data)=>{
//     if(error){
//         console.log(`Error ${error}`);
//     }else{
//         console.log(data);
//     }
// })
//  let data=fs.readFileSync('data.txt','utf-8');
// console.log(data)
//  console.log('Finalizado')
// fs.rename('data.txt','servicios.txt',(error)=>{
//     if(error)throw error;
//     console.log('¡Renombrado!');
// });
// fs.appendFile('data.txt', '\n Verificar todos los puntos',(error)=>{
//     if(error)console.log(`Error ${error}`);
// });
// fs.unlink('data3.txt',(error)=>{
//     if(error)throw error;
//     console.log('Eliminado');
// });
// fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));
// fs.readdir('./../../../cursohtml',(error, files)=>{
//     files.forEach(file=>{
//         console.log(file);
//     });
// });
fs.readdirSync('./../../../cursohtml').forEach(file=>{
    console.log(file);
});
console.log('Finalizado')