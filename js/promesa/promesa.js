let calcular =(n1,n2)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            let suma=n1+n1;
            if(suma>=5){
                res(n1+n2);
            }else{
                rej('Error al procesar los datos')
            }
        },2000);
    });
}
module.exports={
    calcular
}