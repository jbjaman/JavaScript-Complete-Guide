document.querySelector("#list").addEventListener("click", function (event) {
  if (event.target.matches(".delete-btn")) {
    console.log("Delete clicked");
  }
});

// এটি একটি parent listener দিয়ে অনেক child element-এর event handle করতে পারে।
