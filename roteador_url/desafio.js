var http = require('http');
var url = require('url');
var fs = require('fs');

function getHtml(htmlFile) {
    var file = 'Html not found!';
    console.log(htmlFile);
    console.log(__dirname + '/' + htmlFile);

    // if (fs.exists(__dirname + '/' + htmlFile)) {
    //     console.log('Arquivo existe');
    file = fs.readFile(__dirname + '/' + htmlFile);
    // }

    return file;
}

function router(pathName) {

    pathName = pathName.toLowerCase();

    if (pathName == '/artigos' || pathName == '/') {
        return getHtml('artigos.html');
    } else if (pathName == '/contato') {
        return getHtml('contato.html');
    } else {
        return getHtml('erro.html');
    }

}

var server = http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    var result = url.parse(request.url, true);

    var html = router(result.pathname);

    response.end(html);
});
server.listen(3000, function() {
    console.log('Servidor http.');
});