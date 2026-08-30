// 1. AND &&

const isLoggedIn = true;
const isAdmin = true;

const canAccess = isLoggedIn && isAdmin;

// 2. OR ||

const isLoggedIn = true;
const isAdmin = false;

const canAccess = isLoggedIn || isAdmin;

// 3. NOT !

const isActive = true;
console.log(!isActive);
