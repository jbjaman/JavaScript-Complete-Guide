- Async/Await Promise handle করার আরও readable syntax
- Synchronous Programming কী?
- Synchronous Programming হলো এমন একটি Programming Execution Model যেখানে Code সাধারণত একটির পর একটি নির্দিষ্ট ক্রমে Execute হয়।
- Blocking কী?
- Synchronous Programming-এর একটি গুরুত্বপূর্ণ বিষয় হলো Blocking। Blocking বলতে বোঝায় কোনো একটি কাজ চলার কারণে পরবর্তী কাজের Execution আটকে থাকা।
- Asynchronous Programming কী?
- Asynchronous Programming হলো এমন একটি Programming Model যেখানে কোনো নির্দিষ্ট কাজের ফলাফলের জন্য অপেক্ষা করার সময় অন্য কাজের Execution চালিয়ে যাওয়া সম্ভব হয়।

> Synchronous vs Asynchronous — পার্থক্য

বিষয় --- Synchronous --- Asynchronous
Execution --- ক্রমানুসারে --- অপেক্ষার সময় অন্য কাজ চলতে পারে
Waiting --- কাজের ওপর নির্ভর করে Blocking হতে পারে --- Non-blocking Workflow সম্ভব
Execution Flow --- পরবর্তী কাজ আগের কাজের পর --- Completion পরে Handle হয়
Example --- Normal Function --- Timer, API Request
ব্যবহার --- সাধারণ Calculation --- Network Request, File I/O

> JavaScript-এ কোন কোন জায়গায় Asynchronous Programming ব্যবহার হয়?

Technology / Operation ---- Asynchronous ব্যবহারের উদাহরণ
setTimeout() ---- নির্দিষ্ট সময় পর Callback
setInterval() ---- নির্দিষ্ট বিরতিতে Callback
fetch() ---- HTTP Request
Promises ---- Asynchronous Result Handle
async/await ---- Promise-based Workflow
Node.js File System ---- File Read/Write
Database Operations ---- Database Query

- Question: What is the difference between synchronous and asynchronous JavaScript?

- Synchronous JavaScript executes code sequentially, where each operation generally completes before the next statement executes. This can cause blocking when an operation takes a long time. Asynchronous JavaScript allows certain operations, such as network requests and timers, to complete without blocking the main JavaScript execution flow. While waiting for those operations, JavaScript can continue executing other tasks. We commonly handle asynchronous operations using callbacks, Promises, and async/await. This is particularly important in modern web applications because it helps maintain a responsive user interface while handling operations such as API requests

- Is JavaScript synchronous or asynchronous?

- JavaScript is fundamentally single-threaded and executes JavaScript code synchronously on its main execution thread. However, it supports asynchronous operations through runtime APIs, callbacks, Promises, and the Event Loop.

- Does asynchronous JavaScript mean multiple JavaScript statements execute simultaneously?

- No. Asynchronous JavaScript does not automatically mean that multiple JavaScript statements execute simultaneously on the main thread. It allows certain operations to progress independently while JavaScript continues executing other tasks.

- Why is asynchronous programming important in web applications?

- It helps applications remain responsive while waiting for external operations such as API requests, timers, and I/O operations.

- What is blocking code?

- Blocking code is code that prevents subsequent work on the same thread from executing until the current operation finishes.

- What are the common ways to handle asynchronous operations in JavaScript?

- Callbacks, Promises, and async/await are the common approaches.

> > Quick

- Synchronous: একটি কাজের পর আরেকটি কাজ Execute হয়।
- Asynchronous: অপেক্ষার সময় অন্য কাজ চালিয়ে যাওয়া সম্ভব।
- Blocking: একটি কাজের কারণে একই Thread-এর পরবর্তী কাজ আটকে যায়।
- Non-blocking: অপেক্ষার সময় অন্য কাজ করার সুযোগ থাকে।
- Callback: অন্য একটি Function-এ Argument হিসেবে পাঠানো Function।
- Event Loop: Asynchronous Callback ও Task-কে উপযুক্ত সময়ে JavaScript Execution-এর জন্য Scheduling করতে সাহায্য করে।
