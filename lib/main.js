#!/usr/bin/env node
(function() {
  var fbinfo = require('./fbinfo');
  var readline = require("readline");
  if(process.argv.length > 2) {
    fbinfo.getInfo(process.argv[2]);
  } else {
   var rl = readline.createInterface(process.stdin, process.stdout); 

   rl.question("Enter Facebook username or id: ", function(answer) {
     fbinfo.getInfo(answer);
     rl.close();
   });
  }
}).call(this);

