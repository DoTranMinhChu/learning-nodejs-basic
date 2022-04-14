const http = require('http');

const hepler = require('./MModules/hepler');
const myModule = require('./MModules/module');
const config = require('./MModules/config');


const hostname = config.hostname;
const port = config.port;

const server = http.createServer(hepler.onRequest);

server.listen(port, hostname, () => {
    myModule.notifiRunServer(hostname, port);
});


