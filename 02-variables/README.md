- var vs let vs const

Feature -- var -- let -- const
Reassign -- Yes -- Yes -- No
Redeclare -- Yes -- No -- No
Function Scope -- Yes -- Yes -- Yes
Block Scope -- No -- Yes -- Yes
Hoisting -- Yes -- Yes -- Yes

> > Interview:

- var function-scoped।
- let এবং const block-scoped।
- let ও const ব্যবহার করার আগে initialize করতে হয়।
- Modern JavaScript-এ সাধারণত const ব্যবহার করব; value পরিবর্তন করতে হলে let ব্যবহার করব।
- Var is function-scoped, while let and const are block-scoped. Let allows reassignment, but const does not allow reassignment. I generally use const by default and let when a variable needs to change.

> > Question: Why do we prefer const and let over var?

- let এবং const block-scoped, তাই accidental variable conflicts কম হয়। const ব্যবহার করলে reassignment অনিচ্ছাকৃতভাবে হওয়া থেকেও রক্ষা পাওয়া যায়।

- Default হিসেবে const ব্যবহার করব।
- Value পরিবর্তন করতে হলে let ব্যবহার করব।
