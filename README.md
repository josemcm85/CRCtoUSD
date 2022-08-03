# CRCtoUSD
Current exchange rate CRC/USD obtained from BCCR website

#Libraries required

## Cheerio
```cmd
npm i cheerio
```
## Request-promise
```cmd
npm i request-promise
```

## How to run

```cmd
node index.js
```

## Result

File ExchangeRate.json will update with the current exchange rate obtain from [BCCR](https://gee.bccr.fi.cr/indicadoreseconomicos/Cuadros/frmVerCatCuadro.aspx?idioma=1&CodCuadro=%20400) as example below:

```json
{"fecha":"2/Ago/2022","compra":"666,72","venta":"674,67"}
```
