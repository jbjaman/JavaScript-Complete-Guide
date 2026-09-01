- Rest = remaining values collect করে।
- Spread Function call-এর সময়:

```
const numbers = [10, 20, 30];

Math.max(...numbers);

Array → arguments-এ spread।
```

- Rest Function definition-এর সময়:

```
function maxNumber(...numbers) {
}

Arguments → array-তে collect।
```

- Function call → Spread, Function definition → Rest

- Spread: Existing object-এর properties ছড়িয়ে নতুন object বানাচ্ছে।

```
const updatedUser = {
    ...user,
    role: "admin"
};
```

- Rest: একটা property বাদ দিয়ে বাকি properties collect করছে।

```
const { passwordHash, ...safeUser } = user;
```
