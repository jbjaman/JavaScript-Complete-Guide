// optional chaining

const user = {
  name: "Jubayer",
};
console.log(user?.profile?.city); // output: undefined

// Industry

const response = {
  data: {
    user: {
      profile: {
        name: "Jubayer",
      },
    },
  },
};

const name = response?.data?.user?.profile?.name; //application crash করবে না।

// Optional Chaining + Array

const users = [{ name: "Mashle" }];

console.log(users[10]?.name); // output: undefined

// 1.

const user = {
  permissions: ["read", "write"],
};

const canDelete = user.permissions?.includes("delete") ?? false;

// Optional Chaining + Method

const user = {
  name: "Jubayer",
};

user.logout?.(); // মানে logout method থাকলে call করো।

// Optional Chaining + Function

function processUser(onSuccess) {
  onSuccess?.();
}
processUser();

// 1.

function createUser(user, callback) {
  callback?.(user);
}
createUser({ name: "Jubayer" });

createUser({ name: "Jubayer" }, (user) => {
  console.log("Created:", user.name);
});

// Nullish Coalescing

const username = null;

const displayName = username ?? "Guest";

console.log(displayName); // output: Guest

// 1.

const username = undefined;

const displayName = username ?? "Guest";

console.log(displayName); // output: Guest

// 2. if 0

const age = 0;

const result = age ?? 18;

console.log(result); // output : 0

// 3. Empty String

const name = "";

const result = name ?? "Guest"; // output: ""

// 4. false

const isActive = false;

const result = isActive ?? true; // output: false

// Optional Chaining + Nullish Coalescing

const user = {
  name: "Jubayer",
};
const city = user?.profile?.address?.city ?? "Unknown City";
