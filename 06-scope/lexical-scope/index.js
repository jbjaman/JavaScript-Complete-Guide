// 1. lexical

const appName = "My age";

function outer() {
  const version = "1.0";

  function inner() {
    console.log(appName);
    console.log(version);
  }
  inner(); // inner scope -> outer scope -> global/module scope
}
