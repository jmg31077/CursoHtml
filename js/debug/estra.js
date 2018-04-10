let mensaje="Debugeando Coder!";
// saludar(=>(){
//     console.log(mensaje);
// })
function saludar(){
    debugger;
    console.log(mensaje);
}
module.exports={
    saludar: saludar
}