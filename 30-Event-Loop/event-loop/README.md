- Event Loop কী?

- Event Loop হলো JavaScript Runtime-এর একটি Mechanism, যা Call Stack এবং বিভিন্ন Task Queue-এর মধ্যে Coordination করে।

- সহজভাবে এর কাজ:

1. Call Stack-এ JavaScript Code Execute হচ্ছে কি না তা পর্যবেক্ষণ করা।
2. JavaScript-এর বর্তমান Execution শেষ হলে Pending Microtask-গুলো Execute করার ব্যবস্থা করা।
3. এরপর উপযুক্ত Task Queue থেকে পরবর্তী Task Execute হওয়ার সুযোগ দেওয়া।

- Browser-এ Rendering-এর সুযোগও এই Scheduling Process-এর সঙ্গে সম্পর্কিত।

- Q1. What is the JavaScript Event Loop?

- The Event Loop is a mechanism in the JavaScript runtime that coordinates the execution of JavaScript code and scheduled callbacks. It allows asynchronous operations to be handled without blocking the main JavaScript execution thread while those operations are waiting to complete.
