//Variable
const accountId=155653
let accountEmail="Nandani@google.com"
var accountPassword="12345"
accountCity="Mumbai"
let accountState; //undefined

// accountId =2 //not allowed
accountEmail ="Na@gc.com"
accountPassword="8923454"
accountCity="Pune"
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and function scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity ,accountState]);
