const accountId  = 12345
let accountEmail  = "abc@gmail.com"
var accountPassword = "abc@12345"
accountCity = "Jaipur"
let accountState;

//accountId  = 8986 //not allowed
accountEmail = "manish@gmail.com"
accountPassword = "21212121"
accountCity = "Patna"





/*Prefer not to use var because of issue in block scope and functional scope */
//console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);