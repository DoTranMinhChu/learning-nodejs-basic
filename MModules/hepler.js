const fs = require('fs')
const url = require('url')

const renderPage = (pathname, res) => {
    fs.readFile(pathname, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.write("<h1 style='color : red'>Not found</h1>");
        } else {
            res.write(data);
        }

        res.end('End page');
    })
}

const render404 = (pathname, res) => {
    res.statusCode = 404;
    renderPage(pathname, res);
}

function onRequest(req, res) {
    const pathname = url.parse(req.url, true).pathname
    console.log(">> check url.parse(req.url).pathname : ", pathname);
    switch (pathname) {
        case '/':
        case '/home':
            renderPage('./page/home/index.html', res)
            break;
        case '/about':
            renderPage('./page/about/index.html', res)
            break;
        default:
            render404('./page/error/index.html', res)

    }

}

module.exports = {
    onRequest: onRequest
}