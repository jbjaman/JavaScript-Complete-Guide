const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Something went wrong");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finished"));
