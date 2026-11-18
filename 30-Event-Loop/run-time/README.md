- Browser এবং Node.js উভয় জায়গাতেই JavaScript Engine থাকতে পারে, কিন্তু Runtime Environment আলাদা।

> Browser Runtime

- DOM API
- Window
- fetch
- Browser Timers
- User Events

> Node.js Runtime

- File System
- HTTP Server
- Process
- Timers
- libuv Event Loop

- Node.js-এর ক্ষেত্রে Event Loop এবং Asynchronous I/O পরিচালনায় libuv গুরুত্বপূর্ণ ভূমিকা পালন করে।

- Q5. Why does Promise execute before setTimeout?

- Promise reaction callbacks are scheduled as microtasks, whereas setTimeout() callbacks are scheduled as tasks. The runtime processes pending microtasks before moving on to another task, which is why Promise callbacks commonly execute first.
