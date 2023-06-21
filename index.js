const http = require("http");
const fs = require("fs");

const port = 3000;

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
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
    const url = req.url;
    
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
