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
# V. Output HTML File Nodejs

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
