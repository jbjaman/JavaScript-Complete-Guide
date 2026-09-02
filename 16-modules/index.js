import { add, subtract } from "./auth";
import { add2, multiply2, subtract2 } from "./math";
import { add3 as sum } from "./math2";
import * as math from "./math3";
import user from "./user";
import user4, { getUserRole } from "./user3.js";
import { users } from "./users";

// Module Basic

console.log(users);

// Named Export

console.log(add);
console.log(subtract);

// একসাথে অনেক কিছু export

console.log(add2, multiply2, subtract2);

// export default

console.log(user);

// Import alias

console.log(sum(10, 20));

// Default + Named export

console.log(user4);
console.log(getUserRole);

// *

console.log(math.add5(4, 5));
console.log(math.subtract5(46, 5));
