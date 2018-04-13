const fetch= require('node-fetch');
fetch('https://api.github.com/users/cursohtml').then((res)=>{
    return res.json();
}).then((json)=>{
    console.log(json);
});