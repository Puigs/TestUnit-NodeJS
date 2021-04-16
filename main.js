console.log("Main.js start");

var echo = require("./src/echo.js");
var http = require("./src/http.js");

function main() {
    console.log("Some test");
    var n = echo.echo_number(47);
    var s = echo.echo_string("Ceci est un test");
    //http.get_simple("http://postman-echo.com/status/200");
}

// Call to remove
console.log("Need to test request http with json");

main();