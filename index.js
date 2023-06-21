const http = require("http");
const fs = require("fs");

const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    
    //memasukan nilai url
    const url = req.url;
    const errorUrl = console.log("error url");
    
    if (url === "/"){
      fs.readFile('./index.html', (err, data) => {
        if (err) {
          errorUrl
        } else {
          res.write(data);
        }
        res.end();
      });
    }
  })
  .listen(port, () => {
  console.log(`Server Berjalan di Port ${port}..`);
});
