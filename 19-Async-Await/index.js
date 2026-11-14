// 1.

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data loaded");
  } else {
    reject("Something went wrong");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

async function getData() {
  const result = await myPromise;

  console.log(result);
}

getData();

// 2.

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const dataa = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

getUsers();
