NODEJS FOR BEGINNERS


====================================================================
# I . Install Environments
* Nodejs docs : https://nodejs.org/dist/



====================================================================
# I . Install Environments

* Dowload and Install Visual Studio Code (https://code.visualstudio.com/download)
* Dowload and Install NodeJS (https://nodejs.org/en/download)
* Dowload and Install Git (https://git-scm.com/downloads)   // For source code management
* Check NodeJS : Open 'Command Prompt' enter 'node -v' 


====================================================================
# II. Hello World with ReactJS
> ref : https://nodejs.dev/learn/introduction-to-nodejs#a-vast-number-of-libraries

* Create new React App (https://reactjs.org/docs/create-a-new-react-app.html)
    * Open the folder where you want to create the project
    * Open 'Command Prompt' or 'Git Bash' in this folder
    * Type the following commands

            mkdir learning-nodejs-basic
            cd learning-nodejs-basic

    * note : In it you can replace [learning-nodejs-basic] with your project name ( npx create-react-app <project-name> )

    * Reopen your project ReactJS with Visual Studio Code
    * Create file [app.js] in folder [learning-nodejs-basic]

* Open app.js anh write the code following :


        const http = require('http');

        const hostname = '127.0.0.1';
        const port = 3000;

        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello World');
        });

        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });


* Open Termial (in Visual Studio Code) 
    * Type the following commands

            node app.js

    * Output :

        Server running at http://127.0.0.1:3000/

    * Now, run your web server using node app.js. Visit http://localhost:3000 and you will see a message saying "Hello World". 


* Explain code : 
            
    * Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
    > To include the HTTP module, use the require() method:

            const http = require('http');

    * The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
    > Use the createServer() method to create an HTTP server:

            const hostname = '127.0.0.1';
            const port = 3000;

            const server = http.createServer((req, res) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Hello World');
            });

            server.listen(port, hostname, () => {
                console.log(`Server running at http://${hostname}:${port}/`);
            });


    * In this case with:

            res.statusCode = 200

    > we set the statusCode property to 200, to indicate a successful response.

    * We set the Content-Type header:

            res.setHeader('Content-Type', 'text/plain')

    * And we close the response, adding the content as an argument to end():

            res.end('Hello World')

        > The res.end() function will end the process and send the response


====================================================================
# II. Node.js Local Module
* Local module are modules created locally in your Node.js application
* These modules include different functionalities of your applicaiton in separete files and folders

* Writing Simple Module
    * Create file [module.js] in folder [learning-nodejs-basic]
    * Write the following code into the file [module.js]

            function notificationRunningServer(hostname, port) {
                console.log(`Server running at http://${hostname}:${port}/`);
            }

            module.exports.notifiRunServer = notificationRunningServer

    * Change code in file [app.js] follows:

            const http = require('http');
            const myModule = require('./module');

            const hostname = '127.0.0.1';
            const port = 3000;

            const server = http.createServer((req, res) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Hello World');
            });

            server.listen(port, hostname, () => {
                myModule.notifiRunServer(hostname,port);
                myModule.notifiRunServer('localhost',port);
            });

    * To use local modules in your application, you need to load it using require() function in the same way as core module.

            const myModule = require('./module');
            ..
            ..
            myModule.notifiRunServer(hostname,port);



====================================================================
# III. Output HTML Tag
* For ease we will refactor the project
    * Create folder [MModules] to contain local module
    * Move file [module.js] into folder [MModules]
    * Create file [MModules>config.js]
    * 

            "Your project"
            │
            │   app.js
            │
            └───MModules
                    config.js
                    module.js


* Write the following code into the file [MMdoules>config.js]


        module.exports = {
            hostname : '127.0.0.1',
            port : 3000,
        }


* Write the following code into the file [app.js]

        const http = require('http');
        const myModule = require('./MModules/module');
        const config = require('./MModules/config')

        const hostname = config.hostname;
        const port = config.port;

        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1 style="color : red">Hello World</h1>\<h2 style="color : red">Hello MinhChu</h2>');
        });

        server.listen(port, hostname, () => {
            myModule.notifiRunServer(hostname, port);
            myModule.notifiRunServer('localhost', port);
        });

* Note: need set Content-type is 'text/html' to using html tag

        res.setHeader('Content-Type', 'text/html');

* Run code

    node app.js

* Content-Type :
1. Type application

        application/java-archive
        application/EDI-X12   
        application/EDIFACT   
        application/javascript   
        application/octet-stream   
        application/ogg   
        application/pdf  
        application/xhtml+xml   
        application/x-shockwave-flash    
        application/json  
        application/ld+json  
        application/xml   
        application/zip  
        application/x-www-form-urlencoded  
        
2. Type audio

        audio/mpeg   
        audio/x-ms-wma   
        audio/vnd.rn-realaudio   
        audio/x-wav

3. Type image

        image/gif   
        image/jpeg   
        image/png   
        image/tiff    
        image/vnd.microsoft.icon    
        image/x-icon   
        image/vnd.djvu   
        image/svg+xml    

4. Type multipart

        multipart/mixed    
        multipart/alternative   
        multipart/related (using by MHTML (HTML mail).)  
        multipart/form-data 

5. Type text

        text/css    
        text/csv    
        text/html    
        text/javascript (obsolete)    
        text/plain    
        text/xml

6. Type video

        video/mpeg    
        video/mp4    
        video/quicktime    
        video/x-ms-wmv    
        video/x-msvideo    
        video/x-flv   
        video/webm   

7. Type vnd :

        application/vnd.android.package-archive
        application/vnd.oasis.opendocument.text    
        application/vnd.oasis.opendocument.spreadsheet  
        application/vnd.oasis.opendocument.presentation   
        application/vnd.oasis.opendocument.graphics   
        application/vnd.ms-excel    
        application/vnd.openxmlformats-officedocument.spreadsheetml.sheet   
        application/vnd.ms-powerpoint    
        application/vnd.openxmlformats-officedocument.presentationml.presentation    
        application/msword   
        application/vnd.openxmlformats-officedocument.wordprocessingml.document   
        application/vnd.mozilla.xul+xml   





====================================================================
# IV. Automatically restarting the node application with nodemon (https://www.npmjs.com/package/nodemon)
* nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* Install nodemon 

        npm install -g nodemon

* Check install

        npm ls -g

* Try run code with nodemon

        nodemon app

    * note : nodemon [your node app]

* Fix error :
> nodemon : File ..... cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=.....

1. Open PowerShell (Run As Administrator)
2. Check the current execution policy using this command

        Get-ExecutionPolicy
        # You should get 'Restricted'

3. Run this command to make it 'Unrestricted'

        Set-ExecutionPolicy Unrestricted

4. Check again whether execution policy changed by running this command

        Get-ExecutionPolicy
        # You should get 'Unrestricted'

5. Now try to run nodemon on your project

        nodemon [your node app]

* cre : https://stackoverflow.com/questions/63423584/how-to-fix-error-nodemon-ps1-cannot-be-loaded-because-running-scripts-is-disabl




====================================================================
# V. Output HTML File using File System with Nodejs 

* Create folders and files following : 

        "your project"
        │   
        └───page
            └───home
                    homepage.html


* Writing simple code
    * Write the following code into file [page>home>homepage.html] :


            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>

            <body>
                <h1 style="color : red">Hello World</h1>
                <h2 style="color : rgb(0, 110, 255)">Home Page</h2>
            </body>

            </html>



    * Write the following code into the file [app.js] 


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

    
* Explain code : (ref : https://nodejs.org/api/fs.html#fsreadfilepath-options-callback)

        readFile('./page/home/homepage.html', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end('End page');
        })       

    * Function:

            fs.readFile(path[, options], callback)
            
    * The callback is passed two arguments (err, data), where data is the contents of the file.



====================================================================
# VI. Routing basic with NodeJS

* Write the following code into the file [app.js]

        const http = require('http');
        const { readFile } = require('fs')
        const url = require('url')

        const myModule = require('./MModules/module');
        const config = require('./MModules/config')

        const hostname = config.hostname;
        const port = config.port;

        function onRequest(req, res) {
            console.log(">> check req.url : ", req.url);
            console.log(">> check url.parse(req.url) : ", url.parse(req.url,true));
            readFile('./page/home/homepage.html', (err, data) => {
                    if (err) throw err;
                    res.write(data);
                    res.end('End page');
            })
        }
        const server = http.createServer(onRequest);

        server.listen(port, hostname, () => {
            myModule.notifiRunServer(hostname, port);
            myModule.notifiRunServer('localhost', port);
        });

* Run code and try

    http://127.0.0.1:3000/
    
    http://127.0.0.1:3000/abc

    http://127.0.0.1:3000/abc/xyz


    http://127.0.0.1:3000/abc/xyz?foo=bad&baz=foo 



* Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties
* Ref url.parse() : https://nodejs.org/api/url.html#urlparseurlstring-parsequerystring-slashesdenotehost
* Ref query parameters : https://nodejs.org/en/knowledge/HTTP/clients/how-to-access-query-string-parameters/


* Writing simple routing with NodeJS

    * Create files and folders as follows:


            │   app.js
            │   README.md
            │
            ├───MModules
            │       config.js
            │       hepler.js
            │       module.js
            │
            └───page
                ├───about
                │       index.html
                │
                ├───error
                │       index.html
                │
                └───home
                        index.html

    * Write the following code into the file [page>about>index.html]

                <!DOCTYPE html>
                <html lang="en">

                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>About</title>
                </head>

                <body>
                    <h1 style="color : red">Hello World</h1>
                    <h2 style="color : rgb(0, 255, 38)">About Page</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum fuga ipsam. Atque voluptatibus
                            officiis dignissimos, consequuntur ipsa ut vel vitae pariatur repellendus ea ducimus in similique dolor aliquam.
                            Accusantium.</p>
                </body>

                </html>


    * Write the following code into the file [page>home>index.html]

            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Home</title>
            </head>

            <body>
                <h1 style="color : red">Hello World</h1>
                <h2 style="color : rgb(0, 26, 255)">Home Page</h2>
            </body>

            </html>


    * Write the following code into the file [page>error>index.html]


            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Error</title>
            </head>

            <body>
                <h1 style="color : red">Hello World</h1>
                <h2 style="color : rgb(255, 0, 0)">Error Page</h2>
            </body>

            </html>

    * Write the following code into the file [MModules>hepler.js]

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

    * Write the following code into the file [MModules>config.js]

            module.exports = {
                hostname : '127.0.0.1',
                port : 3000,
            }
    
    * Write the following code into the file [MModules>module.js]

            function notificationRunningServer(hostname, port) {
                console.log(`Server running at http://${hostname}:${port}/`);
            }

            module.exports.notifiRunServer = notificationRunningServer

    
    * Write the following code into the file [app.js]


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



* Run code and testing



====================================================================
# VI. ExpressJS https://expressjs.com/

* Note : You can create a new project or delete everything in the old project

* Install ExpressJS (https://expressjs.com/en/starter/installing.html)

        npm init


        npm install express
        

* Hello World Example (https://expressjs.com/en/starter/hello-world.html)
    * Create file [index.js] and write code into this file :


            const express = require('express')
            const app = express()
            const port = 3000

            app.get('/', (req, res) => {
                res.send('Hello World!')
            })

            app.listen(port, () => {
                console.log(`Example app listening on port http://localhost:${port}/`)
            })

* Run app
    * In the file [package.json], adding line "start": "nodemon index.js" into "scripts" 

            .
            ..
            .
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "start": "nodemon index.js"
            },
            .
            .
            ..
            ...
            .
            .


    * Run app with command

            nodemon 

    Or 

            npm start

====================================================================
# VII. Router in ExpressJS (https://expressjs.com/en/guide/routing.html#express-router)

* Create new files [apiRouter.js]
* Example code :
    * Write the following code into the file [apiRouter.js]

            const express = require('express');
            const router = express.Router();

            router.use((req, res, next) => {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write('<a href="/api/v1/about">/api/v1/about</a> </br>')
                res.write('<a href="/api/v1/cart">/api/v1/cart</a></br>')
                res.write('<a href="/api/v1/cart/abcxyz">/api/v1/cart/abcxyz</a></br>')
                res.write('<a href="/api/v1/cart/a1b2c3">/api/v1/cart/a1b2c3</a></br>')
                res.write('<a href="/api/v1/">/api/v1/</a></br>')
                res.write(`</br>Time: ${Date.now()} </br>`);
                next();
            })


            router.get('/about', (req, res) => {
                res.write('This is "About" page</br>');
                res.send();
            })

            router.get('/cart', (req, res) => {
                res.write('Welcome</br>');
                res.write('This is "cart" page');
                res.send();
            })
            router.get('/cart/:id', (req, res) => {
                res.write(`This is "cart" page , with parameter id : ${req.params.id}`)
                res.send();
            })


            router.get('/', (req, res) => {
                res.write('This is "Home" page')
                res.send();
            })


            module.exports = {
                router
            } 


    * Write the following code into the file [index.js]

            const express = require('express');
            const app = express();
            const port = 3000;
            const { router } = require('./apiRouter');

            app.use("/api/v1", router);
            app.listen(port, () => {
                console.log(`Example app http://localhost:${port}/api/v1`)
            })
        
* Explain code:
    * In the file [apiRouter.js]
        *  Middleware that is specific to this router

                router.use((req, res, next) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    ...
                    ..
                    res.write('<a href="/api/v1/">/api/v1/</a></br>')
                    res.write(`</br>Time: ${Date.now()} </br>`);
                    next();
                })

        > If the current middleware function does not end the request-response cycle, it must call **next()** to pass control to the next middleware function. Otherwise, the request will be left hanging.
        > Middleware : https://expressjs.com/en/guide/writing-middleware.html

    * In the file [index.js]

            const { router } = require('./apiRouter');
            .
            .
            .
            app.use("/api/v1", router);

        * The app will now be able to handle requests to /api/v1/ and /api/v1/about and /api/v1/cart and ....
        * As well as call the timeLog middleware function that is specific to the route.


====================================================================
# VII. Middleware (https://expressjs.com/en/guide/using-middleware.html)
* Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named next.

* Example code :
    * Write the following code into the file [index.js]

            const express = require('express');
            const app = express();
            const port = 3000;
            const { router } = require('./apiRouter');

            app.use("/", router);
            app.listen(port, () => {
            console.log(`Example app http://localhost:${port}/`)
            })

    * Write the following code into the file [apiRouter.js]

            const express = require('express');
            const router = express.Router();

            router.use((req, res, next) => {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write('<a href="/user/abcxyz">/user/abcxyz</a></br>')
                res.write('<a href="/user/a1b2c3">/user/a1b2c3</a></br>')
                res.write('<a href="/user/0">/user/abcxyz</a></br>')
                res.write('<a href="/admin/abcxyz">/admin/abcxyz</a></br>')
                res.write('<a href="/admin/a1b2c3">/admin/a1b2c3</a></br>')
                res.write('<a href="/admin/0">/admin/0</a></br>')
                res.write('<a href="/">/</a></br>')
                res.write(`</br>Time: ${Date.now()} </br>`);
                next();
            })

            const checkReq = (req, res, next) => {
                console.log(">> Check req : ", req)
                next();
            }
            const getMethod = (req, res, next) => {

                res.write(`Request Type: ${req.method} </br>`);
                next();
            }

            const getOriginalUrl = (req, res, next) => {
                res.write(`Request origin Url: ${req.originalUrl} </br>`);
                next();
            }

            const getParamsId = (req, res, next) => {
                res.write(`Request params id  : ${req.params.id} </br>`);
                next();
            }

            const checkID = (req, res, next) => {
                if (req.params.id === '0') next('route')
                // otherwise pass control to the next middleware function in this stack
                else next()
            }

            //---------------------------

            router.get('/user/:id', getMethod, checkID, getOriginalUrl, getParamsId)

            router.get('/user/:id', (req, res, next) => {
                res.write('This is "User" page(1)</br>');
                res.send();
            })

            //---------------------------

            const logStuff = [getMethod, getOriginalUrl, getParamsId]
            router.get('/admin/:id', checkID, (req, res, next) => {
                res.write('This is "Admin" page(1)</br>');
                res.send();
            }, logStuff)


            router.get('/admin/:id', (req, res, next) => {
                res.write('This is "Admin" page(2)</br>');
                res.send();
            }, logStuff)

            router.get('/', (req, res) => {
                res.write('This is "Home" page')
                res.send();
            })


            module.exports = {
                router
            } 


* Explain code:
    * The function middleware first has a chance to call **next()** to pass control to middleware second, or **next('route')** to pass control to the next matching route altogether.


====================================================================
# VIII. GET POST PUT DELETE 
* Install extensions JSON viewer for google chrome to easily view .json file
    * Link install : https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh
* Install body-parser

        npm install body-parser

    > Node.js body parsing middleware.
    > Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
    > ref : http://expressjs.com/en/resources/middleware/body-parser.html


* Example code 
    * Write the following code into the file [index.js]


            const express = require('express');
            const app = express();
            var bodyParser = require('body-parser');

            const port = 3000;
            const { router } = require('./apiRouter');

            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(bodyParser.json());

            app.get("/", (req, res) => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write("<h1>TEST GET</h1>");
                res.write('<a href="/api?username=admin&pass=123456">/api?username=admin&pass=123456</a></br>');

                res.write("<h1>TEST POST</h1>");
                res.write("<form action='/api' method='POST'>");
                res.write("<label>Username: </label><input type='text' name='username'></br>");
                res.write("<label>Pass: </label><input type='text' name='pass'></br>");
                res.write("<input type='submit' name='submit' value='submit POST'></br>");
                res.write("</form>");

                res.write("<h1>TEST PUT</h1>");
                res.write("<form action='/api' method='PUT'>");
                res.write("<label>Username: </label><input type='text' name='username'></br>");
                res.write("<label>Pass: </label><input type='text' name='pass'></br>");
                res.write("<input type='submit' name='submit' value='submit PUT'></br>");
                res.write("</form>");

                res.write("<h1>TEST DELETE</h1>");
                res.write("<form action='/api' method='DELETE'>");
                res.write("<label>Username: </label><input type='text' name='username'></br>");
                res.write("<label>Pass: </label><input type='text' name='pass'></br>");
                res.write("<input type='submit' name='submit' value='submit DELETE'></br>");
                res.write("</form>");

                res.send();
            });

            app.use("/api", router);
            app.listen(port, () => {
                console.log(`Example app http://localhost:${port}/`);
            });

    * Write the following code into the file [apiRouter.js]

            const express = require('express');
            const router = express.Router();


            router.get('/', (req, res) => {
                res.json({ Method: "Router using GET", Headers: req.headers, Body: req.body })
            })

            router.post('/', (req, res) => {
                res.json({ Method: "Router using POST", headers: req.headers, body: req.body })
            })


            router.put('/', (req, res) => {
                res.json({ Method: "Router using PUT", headers: req.headers, body: req.body })
            })


            router.delete('/', (req, res) => {
                res.json({ Method: "Router using DELETE", headers: req.headers, body: req.body })
            })


            module.exports = {
                router
            } 

* Run code and testing



====================================================================
# VIII. MongoDB

* Dowload MongoDB 
    * Link web dowload : https://www.mongodb.com/try/download/community
    * Dowload MongoDB v.5.0.7 (Windows) : https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.7-signed.msi

* Setup Enviroment Variables for mongoDB in Windows (Condition : Downloaded mongoDB successfully)
    0. Copy MongoDB's bin directory
        * Exmaple 
        
                C:\Program Files\MongoDB\Server\5.0\bin

    1. Using Windows Search for search **Advanced system settings**
    2. Open **Advanced system settings** ,  select the **Advanced** tab and click **Environment Variables**
    3. In **System variables** tab , select row **Path** and click **Edit...**
    4. When **Edit environment variable** tab appears , click **New**
    5. Paste the copied MongoDB bin folder into path
    6. Click **Ok**
    7. Test MongoDB by opening cmd or powerShell and running the command 
        
            mongo

    8. Done

* Simple command with MongoDB (opening cmd or powerShell and running the command **mongo** to using MongoDB)
    * **Create new database** in MongoDB


            use database_name


        * Note : If database already exists then switched to this database
    
    * **Display databases in MongoDB** 


            databases 
            
        or 

            show dbs 
      

    * **Drop database in MongoDB**


            db.dropDatabase()


        * Note :  You must connect to the database to be deleted first before executing the **db.dropDatabase()** command

    * **Creating Collections in MongoDB**


            db.createCollection(name, options)


        * Example 1: 
                

                use my_database

                db.createCollection('accounts')


        * Example 2 : 


                use my_database

                db.createCollection('company',{capped:true, size: 6142800, max: 10000})
            

        * Note: name is the name of the collection, options are the accompanying options such as size, indexing ability...



    * **Show Collections in MongoDB**


            show collections


        * Note :  You must connect to the database to be deleted first before executing the **show collections** command

    * **Drop Collections in MongoDB**


            db.COLLECTION_NAME.drop()


        * Example: 
                

                use my_database

                show collections

                db.company.drop()

                show collections


    * **Insert document in MongoDB**

            db.COL
            LECTION_NAME.insert(document)


        * Example 1:
        

                use my_database

                show collections

                db.accounts.insert({"username":"admin001","password": "123456", "old": 21})

                db.accounts.insert({username:"admin002",password: "passadmin", old: 20})


         * Example 2 (Insert multiple documents):
        

                use my_database

                show collections

                db.accounts.insert([{"username":"user001","password": "pass001", "old": 23},{"username":"user002","password": "pass002", "old": 22}])


        * Example 3 (Insert into a collection that doesn't exist):


                use my_database

                show collections

                db.company.insert({"name":"FPT","address":"Vietnam"})

                show collections


    * **Query data in MongoDB**


            db.COLLECTION_NAME.find()


        **or** (Pretty() result data **JSON format**)


            db.COLLECTION_NAME.find().pretty()


        * Example:


                use my_database

                show collections

                db.accounts.find()

                db.accounts.find().pretty()

                db.company.find()

                db.company.find().pretty()


    * **Query by condition in MongoDB**

        | CONDITION | SYNTAX          | EXAMPLE | COMPATIBILITY SQL          |
        | ------------- | ----------- | ------------- | ----------- |
        | Equal | {&lt;key&gt;:value&gt;} | db.accounts.find({"username":"admin001"}) | where username= 'admin001' |
        | Like | {&lt;key&gt;:regex&gt;} | db.accounts.find({"username":/user/}) | where username like '%user%' |
        | Less than | {&lt;key&gt;:&lt;$lt:value&gt;}} | db.accounts.find({"old":{$lt:22}}) | where old < 22 |
        | Less than or equal | {&lt;key&gt;:&lt;$lte;value&gt;}} | db.accounts.find({"old":{$lte:22}}) | where old <= 22 |
        | Greater than | {&lt;key&gt;:{$gt:&lt;value&gt;}} | db.accounts.find({"old":{$gt:22}}) | where old > 22 |
        | Greater than or equal | {&lt;key&gt;:{$gte:&lt;value&gt;}} | db.accounts.find({"old":{$gte:22}}) | where old >= 22 |
        | Difference | &lt;key&gt;:{$ne:value&gt;}} | db.accounts.find({"old":{$ne:22}}) | where old != 22 |


        * Can using pretty()

                db.accounts.find({"old":{$lte:22}}).pretty()

                db.accounts.find({"old":{$ne:22}}).pretty()

    * **Using AND, OR , IN in query MongoDB**

        * **AND**

            {$and: [{key1: value1}, {key2:value2},...]}

        * **OR**

            {$or: [{key1: value1}, {key2:value2},...]}

        * **IN**

            {key:{$in: [value1, value2,...]}}

        * Example 1 (**AND**): 


                use my_database

                db.accounts.find({$and: [ {"username":/admin/}, {"old":{$gte:20}}] })

        * Example 2 (**OR**): 


                use my_database

                db.accounts.find({$or: [ {"username":/admin/}, {"old":{$gte:20}} ]})


        * Example 3 (**OR , AND**)


                use my_database

                db.accounts.find({$or: [ {"username":/admin/},{ $and: [{"old":{$gte:20}}, {"old":{$lte:22}}] } ]})


        * Example 4 (**IN**)


            use my_database 

            db.accounts.find({'username':{$in: ['admin001', 'user001']}})

    * **Remove document in MongoDB**
        * Syxtax

                db.COLLECTION_NAME.remove(DELLETION_CRITTERIA, justOne)

        * Explain
            * DELLETION_CRITTERIA: Is the delete condition (which records will be deleted)
            * justOne: If value equals **1** or **true**, only *one* record will be deleted 


        * Create collection for testing :

                use my_database

                db.players.drop()

                db.players.insert([{'_id':'1', 'name':'neymar', 'country':'brazil', 'age':'25'},{'_id':'2', 'name':'hazard', 'country':'belgium', 'age':'25'},{'_id':'3', 'name':'mbappe', 'country':'france', 'age':'18'},{'_id':'4', 'name':'modric', 'country':'croatia', 'age':'30'},{'_id':'5', 'name':'ronaldo', 'country':'portugal', 'age':'33'}])

                db.players.find()
                
            
        * Example 1 :


                use my_database

                db.players.find()

                db.players.remove({'name':'neymar'})

                db.players.find()


        * Example 2 :


                use my_database

                db.players.find()

                db.players.remove({'name':/n/})

                db.players.find()


        * Example 3:

                use my_database

                db.players.find()

                db.players.remove({'name':/a/},true)

                db.players.find()


        * Example 4:


                use my_database

                db.players.find()

                db.players.remove({$and: [{'name':/^m/},{'country':'france'}]})

                db.players.find()

    * **Update document in MongoDB**
        * 
                db.collection_name.update(
                    <SELECTION_CRITERIA&gt>
                    <UPDATE>,
                    {
                        upsert: <boolean>,
                        multi: <boolean>,
                        writeConcern: <document>,
                        collation: <document>,
                        arrayFilters: [ <filterdocument1>, ... ]
                    }
                )

            while &lt;UPDATE&gt; :

                    {$set: {key1:value1, key2:value2, ...}}

            * SELECTION_CRITERIA: Is the delete condition (which records will be updated)
            * UPDATE: The field is updated and the new value is updated.
            * upsert: (boolean): default is false. If true, a new document will be created if no documents are found that satisfy SELECTION_CRITERIA
            * multi: (boolean): default is false. If it is true, then it is allowed to update multiple documents with the same SELECTION_CRITERIA
            * ...

        * Create collection for testing :

                use my_database

                db.players.drop()

                db.players.insert([
                    {'_id':'1', 'name':'neymar', 'country':'brazil', 'age':'25'},
                    {'_id':'2', 'name':'hazard', 'country':'belgium', 'age':'25'},
                    {'_id':'3', 'name':'mbappe', 'country':'france', 'age':'18'},
                    {'_id':'4', 'name':'modric', 'country':'croatia', 'age':'30'},
                    {'_id':'5', 'name':'ronaldo', 'country':'portugal', 'age':'33'}
                ])

                db.players.find()


        * Example 1:


                use my_database

                db.players.find()

                db.players.update({'age':'25'},{$set: {'country':'spain'}})

                db.players.find()


            * Meaning (Change the first document with 'country'= 'spain' to become 'age' = '25'):
                * SELECTION_CRITERIA : {'age':'25'}
                * UPDATE : {$set: {'country':'spain'}}


        * Example 2:


                use my_database

                db.players.find()

                db.players.update({'_id':'1'},{$set: {'country':'japan','name':'honda'}})

                db.players.find()

            * Meaning (Change the first document with '_id' = '1' to become 'country' = 'japan', name = 'honda'):
                * SELECTION_CRITERIA : {'_id':'1'}
                * UPDATE : {$set: {'country':'japan','name':'honda'}}

        * Example 3:


                use my_database

                db.players.find()

                db.players.update({'name': {$in :['ronaldo', 'modric']}},{$set: {'country':'vn'}}, {'multi':true})

                db.players.find()


            * Meaning (Change the all documents with name = 'ronaldo' or name = 'modric' to become 'country' = 'vn'):
                * SELECTION_CRITERIA : {'name': {$in :['ronaldo', 'modric']}}
                * UPDATE : {$set: {'country':'vn'}}
                * multi : true     

        * Example 4 :


                use my_database

                db.players.find()

                db.players.update({'_id':'1'}, {'country':'japan','name':'honda'})

                db.players.find()


            * Meaning :
                * SELECTION_CRITERIA : {'name': {$in :['ronaldo', 'modric']}}
                * UPDATE : {$set: {'country':'vn'}}
                * multi : true
                * Note, if you do not use $set in the update section, the fields that are not specified will be null

    
    * **Sorting in MongoDB**
        * Syntax


                db.COLLECTION_NAME.find().sort({field1:1, field2:-1,...})


        * Explain:
            * field1: 1 means sort ascending by *field1*
            * field2: -1 means sort descending by *field2*
            * Note : *field1* has priority over *field2*
        * Create collection for testing :

                use my_database

                db.players.drop()

                db.players.insert([
                    {'_id':'1', 'name':'neymar', 'country':'brazil', 'age':25},
                    {'_id':'2', 'name':'hazard', 'country':'belgium', 'age':25},
                    {'_id':'3', 'name':'mbappe', 'country':'france', 'age':18},
                    {'_id':'4', 'name':'modric', 'country':'croatia', 'age':30},
                    {'_id':'5', 'name':'ronaldo', 'country':'portugal', 'age':33},
                    {'_id':'6', 'name':'messi', 'country':'argentina', 'age':31},
                    {'_id':'7', 'name':'icardi', 'country':'argentina', 'age':25},
                    {'_id':'8', 'name':'griezmann', 'country':'france', 'age':28}
                ])

                db.players.find()

        * Example 1:

                use my_database

                db.players.find().sort({'name':1})

        * Example 2:

                use my_database
                
                db.players.find().sort({'country':1, 'age':-1})


    * **Projection in MongoDB**
        * Syntax


                db.COLLECTION_NAME.find({condition},{field1:1,field2:0,...})

        * Explain:
            * {condition}: is the search condition, if you leave {} it will find all documents.
            * field1: 1 indicates field1 to be displayed in the returned results. (By default the _id field is always returned)
            * field2: 0: indicates field2 will not be displayed in the returned results.

        * Create collection for testing :


                use my_database

                db.players.drop()

                db.players.insert([
                    {'_id':'1', 'name':'neymar', 'country':'brazil', 'age':'25'},
                    {'_id':'2', 'name':'hazard', 'country':'belgium', 'age':'25'},
                    {'_id':'3', 'name':'mbappe', 'country':'france', 'age':'18'},
                    {'_id':'4', 'name':'modric', 'country':'croatia', 'age':'30'},
                    {'_id':'5', 'name':'ronaldo', 'country':'portugal', 'age':'33'}
                ])

                db.players.find()


        * Example 1:


                use my_database
                
                db.players.find({},{'name':1})


        * Example 2:


                use my_database

                db.player.find({'age':25},{'name':1, '_id':0})


        * Example 3:


                use my_database

                db.players.find({},{'name':1})

    * **Paging in MongoDB**

        * Create collection for testing :


                use my_database

                db.players.drop()

                db.players.insert([
                    {'_id':'1', 'name':'neymar', 'country':'brazil', 'age':'25'},
                    {'_id':'2', 'name':'hazard', 'country':'belgium', 'age':'25'},
                    {'_id':'3', 'name':'mbappe', 'country':'france', 'age':'18'},
                    {'_id':'4', 'name':'modric', 'country':'croatia', 'age':'30'},
                    {'_id':'5', 'name':'ronaldo', 'country':'portugal', 'age':'33'}
                ])

                db.players.find()


        * Example 1 (**limit()**):


                use my_database
                
                db.players.find().limit(2)


        * Example 2 (**skip()**):


                use my_database
                
                db.players.find().skip(2)

        * Exmample 3:


                use my_database
                
                db.players.find().limit(2).skip(3)