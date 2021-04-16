var echo = require("../src/echo.js");
var http = require("../src/http.js");

describe("Test echo", function() {
    it("Should return a number", function() {
        expect(echo.echo_number(47)).toEqual(47);
    });

    it("Should return a string", function() {
        expect(echo.echo_string("Salut")).toEqual("Salut");
    });

    it("Should return a string", function() {
        expect(echo.echo_string("Hello World")).toEqual("Hello World");
    });
});

var request = require("request");

describe("Test http", function() {
    it("returns status code 200", function() {
        request.get("http://postman-echo.com/status/200", function(error, response, body) {
          expect(response.statusCode).toBe(200);
        });
    });
});

/*
Exemples de matchers avec Jasmine
expect(true).toBe(true);
expect(message).toMatch(/quux/);
expect(a.bar).toBeDefined();
expect(foo).toBeTruthy();
expect(foo).toBeFalsy();
expect(a).toContain(‘bar’);
expect(e).toBeLessThan(pi);
expect(pi).toBeGreaterThan(e);
expect(pi).toBeCloseTo(e, 0);
expect(bar).toThrow();
http://jasmine.github.io/1.3/introduction.html#section-Matchers

Inverser la condition avec .not.
.not peut être ajouté afin d’inverser le résultat attendu d’un test.

expect(pi).not.toBeCloseTo(e, 2);
expect(pi).toBeCloseTo(e, 0);
expect(true).toBe(true);
expect(false).not.toBe(true);
*/