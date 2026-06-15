const bcrypt = require("bcryptjs");

const hash = bcrypt.hashSync("123456", 10);

console.log("HASH GERADO:");
console.log(hash);