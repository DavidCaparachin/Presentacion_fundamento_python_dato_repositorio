const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const allowed = {'/':'index.html','/index.html':'index.html','/styles.css':'styles.css','/app.js':'app.js','/visuals.js':'visuals.js'};
http.createServer((req,res)=>{const file=allowed[new URL(req.url,'http://localhost').pathname];if(!file){res.writeHead(404);res.end('No encontrado');return;}res.setHeader('Content-Type',file.endsWith('.css')?'text/css; charset=utf-8':file.endsWith('.js')?'text/javascript; charset=utf-8':'text/html; charset=utf-8');fs.createReadStream(path.join(__dirname,file)).pipe(res);}).listen(4187,'127.0.0.1',()=>console.log('Presentación: http://127.0.0.1:4187'));

