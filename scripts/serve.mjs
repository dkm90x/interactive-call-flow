import http from 'node:http';import {readFile} from 'node:fs/promises';
const port=Number(process.env.PORT)||8780;
http.createServer(async(req,res)=>{if(!['/','/index.html'].includes(req.url?.split('?')[0])){res.writeHead(404);res.end('Not found');return;}try{const html=await readFile(new URL('../index.html',import.meta.url));res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});res.end(html);}catch{res.writeHead(500);res.end('Run npm run build first.');}}).listen(port,'127.0.0.1',()=>console.log(`Interactive Call Flow: http://localhost:${port}`));
