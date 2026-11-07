import {readFile,writeFile,mkdir} from 'node:fs/promises';
const read=p=>readFile(new URL('../'+p,import.meta.url),'utf8');
let core=await read('src/core.js'),templates=await read('src/templates.js'),app=await read('src/app.js');
core=core.replaceAll('export ','');templates=templates.replaceAll('export ','').replace(/^import .*?;\n/gm,'');
app=app.replace(/^import .*?;\n/gm,'');
const html=(await read('src/shell.html')).replace('/* APP_CSS */',await read('src/style.css')).replace('/* APP_JS */',core+'\n'+templates+'\n'+app);
await writeFile(new URL('../index.html',import.meta.url),html);await mkdir(new URL('../dist/',import.meta.url),{recursive:true});await writeFile(new URL('../dist/interactive-call-flow.html',import.meta.url),html);console.log('Built identical hosted and standalone apps.');
