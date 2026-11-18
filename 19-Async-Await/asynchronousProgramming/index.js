// 1. Asynchronous

console.log("Start");

setTimeout(() => {
  console.log("Async Task Complete");
}, 2000);

console.log("End");

/*
Start
End
Async Task Complete
*/

// setTimeout(callback, 2000) মানে ঠিক ২ সেকেন্ড পর Callback Execute হবেই, এমন নয়। এটি কমপক্ষে প্রায় ২ সেকেন্ড পর Callback-কে Execute হওয়ার জন্য প্রস্তুত করে। JavaScript-এর Call Stack এবং Event Loop-এর পরিস্থিতির ওপর প্রকৃত Execution নির্ভর করে।
