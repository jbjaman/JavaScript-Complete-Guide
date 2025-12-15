### Global scope

> Variables declared Globally (outside any function) have Global Scope. Global variables can be accessed from anywhere in a JavaScript program. Variables declared with var, let and const are quite similar when declared outside a block. If you assign a value to a variable that has not been declared i.e potato = true it will automatically become a GLOBAL variable.

### Function scope

> When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.

### Block scope

> This scope restricts the variable that is declared inside a specific block, from access by the outside of the block. The `let` & `const` keyword facilitates the variables to be block scoped. In order to access the variables of that specific block, we need to create an object for it. Variables declared with the `var` keyword, do not have block scope.
