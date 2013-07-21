var http = require('http');
var colors = require('colors');

exports.getInfo = function(username) {
  var httpOptions = {
    hostname: "graph.facebook.com",
    port: 80,
    method: 'GET',
    path: "/" + username
  };

  var request = http.request(httpOptions, function(response) {
    response.on('data', function(chunk) {
      var jsonResponse = JSON.parse(chunk);
      for (var key in jsonResponse) {
        console.log(key.green.bold + ": " + jsonResponse[key]);
      }
    });
  });

  request.on('error', function(ex) {
    console.log(e.message);
  });

  request.end();
}
