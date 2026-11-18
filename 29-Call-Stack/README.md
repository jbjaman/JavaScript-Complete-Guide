- Call Stack কী?
- Call Stack হলো JavaScript Engine-এর একটি Stack Data Structure, যেখানে বর্তমানে Execute হওয়া Function-গুলোর Execution Context রাখা হয়।
- সহজভাবে:

যখন JavaScript কোনো Function Call করে, তখন সেই Function-এর Execution Context Call Stack-এ Push হয়।

Function-এর কাজ শেষ হলে সেটি Call Stack থেকে Pop হয়ে যায়।

- Call Stack কাজ করে LIFO Principle অনুসারে। অর্থাৎ সর্বশেষ যে Function Stack-এ ঢুকবে, সেটিই সবার আগে বের হবে।

- Q6. What is Stack Overflow?

- Stack Overflow occurs when the Call Stack exceeds its available capacity, often because of uncontrolled recursion or excessively deep function calls.

- Q7. Is JavaScript single-threaded?

- JavaScript code typically executes on a single main thread within a given execution context. However, the runtime can use additional threads and system facilities for operations such as I/O, networking, and background processing.

-গুরুত্বপূর্ণ Terminology
Term অর্থ
JavaScript Engine JavaScript Code Execute করে
Runtime Environment JavaScript চালানোর পরিবেশ
Call Stack Function Execution পরিচালনা করে
Web APIs Browser-এর দেওয়া সুবিধা
Callback অন্য Function-এ পাঠানো Function
Task Queue Scheduled Task-এর অপেক্ষার জায়গা
Microtask Queue Promise Reaction-এর অপেক্ষার জায়গা
Event Loop Execution Scheduling পরিচালনা করে
LIFO Last In, First Out
libuv Node.js-এর Asynchronous I/O ও Event Loop Infrastructure-এর অংশ
