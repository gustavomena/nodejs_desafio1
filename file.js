const https = require('https');
let datos= null;

https.get('https://mindicador.cl/api', res => {
  let data = [];
  //const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.statusCode);
  //console.log('Date in Response header:', headerDate);

  res.on('data', chunk => {
    data.push(chunk);
  });

  res.on('end', () => {
    console.log('Response ended: ');
    const indicators = JSON.parse(Buffer.concat(data).toString());

    console.log( indicators.dolar);
   datos= indicators;
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});
return datos;