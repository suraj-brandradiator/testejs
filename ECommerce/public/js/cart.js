let allDishes = document.querySelectorAll(".N");

let totalAmount = document.querySelectorAll("h3")[1].innerHTML;

window.addEventListener("load", function () {
  // adding event listener to back button
  document.querySelector(".header i").addEventListener("click", function () {
    // sending back to menu page after clicking back button
    window.location.href = "/menu";
  });
  document
    .querySelector(".checkout")
    .addEventListener("click", async function () {
      try {
        let dishes = " ";
        allDishes.forEach((name) => {
          dishes = dishes + name.innerHTML.trim() + ", ";
        });

        fetch("http://localhost:3000/order/add", {
          method: "POST",

          body: JSON.stringify({
            amount: totalAmount,
            dishes: dishes,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log("Order result :- ", json));

        alert("Order Confirmed");
        window.location.href = "/menu";
      } catch (err) {
        console.log("Error in placing order:- ", err);
        alert("Order Failed");
      }
    });
});
