let dish = document.querySelector("#addItemPic");
let allDishes = document.querySelectorAll(".item");
let sub = document.querySelector("#addItemSub");

window.addEventListener("load", function () {

  // Adding event listener to add button
  document
    .querySelector(".addBtn")
    .addEventListener("click", async function (e) {
      e.preventDefault();
      let file = dish.files[0];
      let formData = new FormData();
      formData.append("name", document.querySelector("#addItemName").value);
      formData.append("Amount", document.querySelector("#addItemAmt").value);
      formData.append("Image", file);
      formData.append(
        "Details",
        document.querySelector("#addItemDetails").value
      );
      formData.append("category", sub.value);

      // Sending the form data to the server
      fetch("http://localhost:3000/dishes/add", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.message) {
            // Reloading the page after adding the dish
            window.location.reload();
          }
        });
    });
  for (let i = 1; i < allDishes.length; i++) {
    // Adding event listener to edit button
    allDishes[i]
      .querySelector(".removeBtn")
      .addEventListener("click", async function () {
        fetch("http://localhost:3000/dishes/deleteDish", {
          method: "POST",
          body: JSON.stringify({
            _id: allDishes[i].getAttribute("dishId"),
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            if (json.message) {
              // Reloading the page after deleting the dish
              window.location.reload();
            }
          });
      });
  }
});
