var http = require('http');
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

var username = "";

rl.question("Enter Facebook username: ", function(answer) {
  username = answer;
  rl.close();
  
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
        console.log(key + ": " + jsonResponse[key]);
      }
    });
  });

  request.on('error', function(ex) {
    console.log(e.message);
  });

  request.end();
});


