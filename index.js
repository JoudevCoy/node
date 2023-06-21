const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
});




// const http = require("http");
// const url = require("url");
// const fs = require("fs");

// const port = 3000;

// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if(err){
//     } else {
//       res.write(data);
//       res.end();
//     }
//   });
// }

// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       'Content-Type': 'text/html',
//     })
    
//     //memasukan nilai url
//     const url = req.url;
    
//     switch(url){
//       case '/about':
//         renderHTML('./about.html', res);
//         console.log("about");
//         break;
//       default:
//         renderHTML('./index.html', res);
//         console.log("home");
//         break;
//     }

//   })
//   .listen(port, () => {
//   console.log(`Server Berjalan di Port ${port}..`);
// });
