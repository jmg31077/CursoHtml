const fetch= require('node-fetch');
fetch('https://github.com/jmg31077/empoderar.git').then((res)=>{
    return res.json();
}).then((json)=>{
    console.log(json);
});