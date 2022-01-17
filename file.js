const fs=require('fs');
const https = require('https');
const args=process.argv.slice(2);
const fileName=args[0];
const ext=args[1];
const indicator=args[2];
const qty=args[3];

let currency=null;
let template ='';

https.get('https://mindicador.cl/api', res => {
  let data = [];

  console.log('Status Code:', res.statusCode);

  res.on('data', chunk => {
    data.push(chunk);
  });

  res.on('end', () => {
    console.log('Response ended: ');
    const indicators = JSON.parse(Buffer.concat(data).toString());
    currency=indicators[indicator];
    let total=Number(qty)*Number(currency.valor);
    template=`A la fecha ${currency.fecha}\n Fue realizada la cotización con los siguientes datos:\nCantidad de pesos a convertir:${qty} pesos\nConvertido a "${indicator}" da un total de:\n$${total}`

    fs.writeFile(`${fileName}.${ext}`,template ,'utf8',()=>{
        console.log(template);
    });


  });
}).on('error', err => {
  console.log('Error: ', err.message);
});





