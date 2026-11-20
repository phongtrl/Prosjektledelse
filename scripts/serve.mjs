import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');const file=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return}const body=await readFile(file);res.writeHead(200,{'Content-Type':({'html':'text/html','js':'text/javascript','css':'text/css','svg':'image/svg+xml'})[file.split('.').pop()]||'application/octet-stream','Cache-Control':'no-store'});res.end(body)}catch{res.writeHead(404).end('Not found')}}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
