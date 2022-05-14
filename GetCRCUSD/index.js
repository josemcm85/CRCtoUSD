const request = require("request-promise")
const cheerio = require("cheerio");

let today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '/' + mm + '/' + dd;

request("https://gee.bccr.fi.cr/indicadoreseconomicos/Cuadros/frmVerCatCuadro.aspx?CodCuadro=400&Idioma=1&FecInicial="+ today + "&FecFinal=" + today + "&Filtro=0", (error, response, html) => {
    if(!error && response.statusCode == 200){
        const $= cheerio.load(html);


        const datarow= $(".celda400");
        let output= datarow.text();
        let fulldata = output.replace(/\s+/g, " ");
        const myArray = fulldata.split(" ");
        let fecha = myArray[1] + "/" + myArray[2] + "/" + myArray[3];
        let compra = myArray[4];
        let venta = myArray[5];

        console.log("Fecha: " + fecha);
        console.log("Compra: " + compra);
        console.log("Venta: " + venta);
        
    }

})