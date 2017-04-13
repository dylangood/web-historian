var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

exports.handleRequest = function (req, res) {
  var headers = defaultCorsHeaders;
  var method = req.method;
  var url = req.url;

  if ( url === ' ' ) {
    // isUrlInList(url, callback)
    if ( method === 'GET' ) {

    }
  }



  res.end(archive.paths.list);
};
