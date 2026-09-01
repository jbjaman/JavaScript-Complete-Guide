- filter() ব্যবহার করো যখন: কিছু condition অনুযায়ী array থেকে কিছু element রাখতে চাই।
- filter() → সব matching element-এর array দেয়।

- find() অনেকটা filter()-এর মতো condition check করে।
- find() → প্রথম matching element দেয়।

- includes() দিয়ে check করবে কোনো value array-এর মধ্যে আছে কি না। যদি শুধু জানতে চাও: আছে কি না? তাহলে includes() অনেক বেশি expressive।

- some() প্রশ্ন করে কমপক্ষে একজন element condition satisfy করছে কি
- every() ঠিক উল্টো ধরনের প্রশ্ন করে: সবগুলো element condition satisfy করছে কি
- some() → অন্তত একজন, every() → সবাই?
