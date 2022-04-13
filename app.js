const http = require('http');
const { readFile } = require('fs')

const myModule = require('./MModules/module');
const config = require('./MModules/config')

const hostname = config.hostname;
const port = config.port;

const server = http.createServer((req, res) => {
    readFile('./page/home/homepage.html', (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end('End page');
    })
   
});

server.listen(port, hostname, () => {
    myModule.notifiRunServer(hostname, port);
    myModule.notifiRunServer('localhost', port);
});