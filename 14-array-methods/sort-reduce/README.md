- sort() array-এর element order পরিবর্তন করে।
- sort() Original Array Mutate করে

- reduce() ব্যবহার করে: একটা array-এর অনেকগুলো value থেকে একটি final result তৈরি করা যায়।

```
 array.reduce((accumulator, currentValue) => {
    // ...
}, initialValue);
```

- accumulator আগের iteration-এর accumulated result।
- currentValue বর্তমান element।
- initialValue শুরু করার value।

```
- forEach() -> প্রত্যেকটার জন্য কাজ করো -> undefined
- map() -> প্রত্যেকটাকে transform করো -> নতুন array
- filter() -> কোনগুলো রাখব? -> নতুন array
- find() -> প্রথম matching কোনটা? -> element / undefined
- includes() -> value আছে? -> boolean
- some() -> অন্তত একজন satisfy করে? -> boolean
- every() -> সবাই satisfy করে? -> boolean
- sort() -> order পরিবর্তন করো -> same array reference
- reduce() -> অনেক value: এক result -> যেকোনো accumulated result
```

- method selection skill

- সব user-এর name চাই
  `users.map(user => user.name);`
- শুধু active users চাই
  `users.filter(user => user.isActive);`
- ID 101-এর user চাই
  `users.find(user => user.id === 101);`
- Admin আছে?
  `users.some(user => user.role === "admin");`
- সব user verified?
  `users.every(user => user.isVerified);`
- Permission আছে?
  `permissions.includes("user:update");`
- সব price-এর total চাই
  `prices.reduce((total, price) => total + price, 0);`
- Price অনুযায়ী sort
  `products.sort((a, b) => a.price - b.price);`
- প্রত্যেক user-এর জন্য একটা action

```
users.forEach(user => {
// action
});
```
