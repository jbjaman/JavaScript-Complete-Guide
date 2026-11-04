- JavaScript মূলত single-threaded, অর্থাৎ সাধারণ JavaScript execution একটি সময়ে একটি কাজ করে।

- তবে asynchronous কাজ পরিচালনার জন্য JavaScript runtime-এর বিভিন্ন mechanism ব্যবহার করা হয়।

- Event Loop-এর প্রধান অংশগুলো :

> Call Stack
> যেখানে synchronous code execute হয়

> Microtask Queue
> Promise callbacks

> Task Queue
> setTimeout callbacks

- Event Loop উপযুক্ত সময়ে queue থেকে callback Call Stack-এ পাঠাতে সাহায্য করে।
