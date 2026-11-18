// 1.

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

/*
Start
End
Promise


*/
