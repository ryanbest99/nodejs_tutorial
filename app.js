// Common JS, every file is module(by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names.js");
console.log(names);
const sayhi = require("./5-utils.js");
const data = require("./6-alternative-flavor");

console.log(data);

sayhi("Ryan");
sayhi(names.peter);
