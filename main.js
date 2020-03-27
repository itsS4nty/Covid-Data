const https = require('https');

https.get('https://api.covid19api.com/summary', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).Countries[1]);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});