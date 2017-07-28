const express = require('express');
const fs = require('fs');
const convert = require('./lib/markdown-parser.js');

const app = express();

app.get('/', function(req, res) {
  fs.readFile('./example/example.md', (err, data) => {
    if (err) {
      console.log('读取文件失败!')
    }
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    let html = data.toString();
    console.log('读取文件成功');
    res.end(html);
  })
  
});

app.listen(8888, function() {
  console.log('Example app listening on port 8888!');
})