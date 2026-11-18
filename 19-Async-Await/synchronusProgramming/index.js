// 1. Synchronous

console.log("Task 1");

console.log("Task 2");

console.log("Task 3");

// 2. Blocking

console.log("Start");

function heavyTask() {
  let total = 0;

  for (let i = 0; i < 1000000000; i++) {
    total += i;
  }

  console.log("Heavy Task Complete");
}

heavyTask();

console.log("End");

/*
Start
Heavy Task Complete
End
*/
