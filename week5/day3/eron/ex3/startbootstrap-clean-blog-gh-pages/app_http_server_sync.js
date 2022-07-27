
const http = require('node:http');
const fs = require('node:fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, 'public', 'index.html'));
const post = fs.readFileSync(path.join(__dirname, 'public', 'post.html'));
const contact = fs.readFileSync(path.join(__dirname, 'public', 'contact.html'));
const about = fs.readFileSync(path.join(__dirname, 'public', 'about.html'));
const notFound = fs.readFileSync(path.join(__dirname, 'public', '404.html'));

const cache = new Map();

cache['/'] = index;
cache['/post'] = post;
cache['/contact'] = contact;
cache['/about'] = about;

function getFileContent(targetFile, extension) {
    let resolvedFile = path.join(__dirname, 'public');
    if (extension === '.css'){
        resolvedFile =  path.join(resolvedFile, 'css', targetFile);
    } else if (extension === '.js') {
        resolvedFile = path.join(resolvedFile, 'js', targetFile);
    } else if (extension === '.jpg') {
        resolvedFile = path.join(resolvedFile, 'assets', 'img', targetFile);
    } else {
        resolvedFile = path.join(resolvedFile, targetFile);
    }

    if (fs.existsSync(resolvedFile)) {
        return fs.readFileSync(resolvedFile, {encoding: 'utf-8'});
    } else {
        throw new Error('파일을 찾을 수 없습니다!', resolvedFile);
    }
}

function getContentType(extension) {
    switch(extension){
        case '.html':
            return 'Content-Type: text/html';
        case '.css':
            return 'Content-Type: text/css';
        case '.jpg':
            return 'Content-Type: image/jpeg';
        case '.js':
            return 'Content-Type: text/javascript';
        default:
            return 'Content-Type: application/octet-stream';
    }
}

const server = http.createServer((req, res)=>{
    try {
        const requestedFileName = req.url === '/' ? 'index.html' : path.basename(req.url);
        const extension = path.extname(requestedFileName);
        //if (fs.existsSync(targetAbsolutePath)) {
        const content = getFileContent(requestedFileName, extension);
        const mime_type = getContentType(extension);
        res.writeHead(200, mime_type);
        res.end(content);
        // } else {
        //     res.writeHead(404, 'Content-Type: text/html');
        //     res.end(notFound);
        // }
    } catch (err) {
        res.writeHead(404, 'Content-Type: text/html');
        res.end(notFound);
        server.emit('error', err);
    }
});

server.on('error', (err)=>{
    console.log('error', err);
});

server.listen(3001);


// Server Software:
// Server Hostname:        host.docker.internal
// Server Port:            3001
//
// Document Path:          /
// Document Length:        8213 bytes
//
// Concurrency Level:      1000
// Time taken for tests:   11.501 seconds
// Complete requests:      10000
// Failed requests:        0
// Keep-Alive requests:    0
// Total transferred:      83090000 bytes
// HTML transferred:       82130000 bytes
// Requests per second:    869.49 [#/sec] (mean)
// Time per request:       1150.100 [ms] (mean)
// Time per request:       1.150 [ms] (mean, across all concurrent requests)
// Transfer rate:          7055.26 [Kbytes/sec] received



