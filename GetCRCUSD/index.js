const request = require("request-promise")
const cheerio = require("cheerio");

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = yyyy + '/' + mm + '/' + dd;

request("https://gee.bccr.fi.cr/indicadoreseconomicos/Cuadros/frmVerCatCuadro.aspx?CodCuadro=400&Idioma=1&FecInicial="+ today + "&FecFinal=" + today + "&Filtro=0", (error, response, html) => {
    if(!error && response.statusCode == 200){
        const $= cheerio.load(html);

        const datarow= $(".celda400");
        let output= datarow.text().replace(/\s+/g, " ");
        const myArray = output.split(" ");

        let jsonObj = {"fecha" : myArray[1] + "/" + myArray[2] + "/" + myArray[3], 
                    "compra" : myArray[4], 
                    "venta" : myArray[5]};
        
        let jsonString = JSON.stringify(jsonObj);
        let fs = require('fs');
        fs.writeFileSync("ExchangeRate.json",jsonString);
        
    }

})