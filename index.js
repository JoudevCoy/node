const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // res.send('Ini adalah halaman Home');
  // res.json({
  //   nama: "joudev",
  //   umur: 14,
  //   tempat: "desa Telap"
  // });
  res.sendFile('./index.html', {root: __dirname});
});

app.get('/dashboard', (req, res) => {
  res.send(" ini adalah halaman dashboard " + req.query.name);
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: __dirname});
});

app.get('/about/:info/nama/:name', (req, res) => {
  res.send(`ini adalah halaman ${req.params.info} <a href="/about/info/nama/jonathan"> lihat lebih lanjut </a> <br> perkenalkan nama saya ${req.params.name} `);
});

app.get('/info', (req, res) => {
  res.send(`Apakah kamu mencari: ${req.query.search}`);
});





//404 
app.use('/', (req, res) => {
  res.status(404)
  res.send('404 not found');
});


//start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})




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
