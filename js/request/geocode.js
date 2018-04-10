const request=require('request');
const argv=require('yargs').argv;

let direccion = argv.direccion;
let url = `http://maps.googleapis.com/maps/api/geocode/json?address=${direccion}`;

request({
    url: url,
    json: true
},(error, response, body)=>{
    if(error){
        console.log('Servicio no disponible');
    }else if(body.status ==='ZERO_RESULTS'){
        console.log('nohay datoa a mostrar');
    }else if(body.status ==='OK'){
        console.log(JSON.stringify(body, undefined, 1));
        console.log(JSON.stringify(`Ubicacion:${body.results[0].formatted_address}`));
        console.log(JSON.stringify(`Latitud:${body.results[0].geometry.location.lat}`));
        console.log(JSON.stringify(`Longitud:${body.results[0].geometry.location.lng}`));
    }


});