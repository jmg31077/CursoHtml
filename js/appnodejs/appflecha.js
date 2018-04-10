const mi=require('./mito');
let res=mi.sumar(20,9);
console.log('la suma es:',res);
let res1=mi.restar(20,9);
console.log('la resta es:',res1);
let res2=mi.multi(20,9);
console.log('la multiplicacion es:',res2);
let res3=mi.dividir(20,9);
console.log('la Division es:',res3);
setTimeout(()=>{
    console.log("Termine")
},2000);
//cambio de function por (()=>)