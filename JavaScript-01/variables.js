const accountId = 144553;
let accountEmail = "jaman@mail.com";
var accountPassword = "12345";
accountCity = "Dhaka";

// accountId = 2; NOT ALLOWED

accountEmail = "jbj@mail.com";

accountPassword = "6789";

accountCity = "Barishal";

let accountState;

/**
 * prefer not to use var bcz of issue in block scope and functional scope
 */

console.log(accountId);

console.log(accountEmail);

console.log(accountPassword);

console.log(accountCity);

console.log(accountState);

console.table([accountId, accountEmail, accountPassword, accountCity]);