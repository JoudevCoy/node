const http = require("http");
const url = require("url");
const fs = require("fs");

const port = 3000;

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if(err){
      console.log("error 404");
    }
    res.write(data);
    res.end();
  });
}

http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    
    //memasukan nilai url
    
    switch(url){
      default:
        renderHTML('./index.html', res);
      case '/about':
        renderHTML('./about/index.html', res);
    }

  })
  .listen(port, () => {
  console.log(`Server Berjalan di Port ${port}..`);
});
