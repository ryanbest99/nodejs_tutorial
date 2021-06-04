// Common JS, every file is module(by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names.js");
const sayhi = require("./5-utils.js");
const data = require("./6-alternative-flavor");
const mind = require("./7-mind-grenade");

mind(1, 2);

// console.log(names);
// console.log(sayhi);
// console.log(data);

// sayhi("Ryan");
// sayhi(names.peter);
