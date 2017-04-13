var path = require('path');
var archiveHelpers = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var headers = httpHelpers.headers;
  var method = req.method;
  var url = req.url;

  if ( method === 'GET' ) {
    if ( url === '/' ) {
      console.log('index path: ' + archiveHelpers.paths.siteAssets + '/index.html');
      res.setHeader('Content-Type', 'text/html;charset=utf-8');
      res.writeHead(200);
      fs.readFile( archiveHelpers.paths.siteAssets + '/index.html', function(err, data) {
        if (err) { console.error(err); }
        res.end(data);
      });
    }
    // send 404 error when asked for a nonexistent file
    // return the content of a website from the archive
  } else if ( method === 'POST' ) {
    // append submitted sites to \'sites.txt\'
  }



  // res.end(archiveHelpers.paths.list);
};
