- Microtask Queue কী?
- এটি Promise বোঝার জন্য অত্যন্ত গুরুত্বপূর্ণ।
- Microtask Queue হলো একটি বিশেষ Queue যেখানে Promise-এর .then(), .catch(), .finally()-এর মতো Reaction Callback এবং queueMicrotask()-এর মতো Microtask Schedule হয়।

- Q3. What is the difference between Microtask Queue and Task Queue?

- The Microtask Queue contains callbacks such as Promise reactions and queueMicrotask() callbacks. The Task Queue contains scheduled tasks such as timer callbacks and certain browser events. At a microtask checkpoint, pending microtasks are processed before the runtime proceeds to another task.
