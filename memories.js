// Primitive (Stack) => call by value

let idName1 = "Jubayer";

let idName2 = idName1;

idName2 = "Junayed";

console.log(idName1);

console.log(idName2);

// Non Premitive (Heap) => call by reference

let userList1 = ["Dhaka", "Khulna", "Barishal"];

let userList2 = userList1;

userList2[0] = "Bogra";

console.log(userList1);

console.log(userList2);