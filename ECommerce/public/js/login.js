let email = document.querySelector("#email");
let pw = document.querySelector("#pass");
let loginBtn = document.querySelector(".submitbtn");
let registerbtn = document.querySelector(".registerbtn");
let message = document.querySelector(".message");

window.addEventListener("load", function () {
  document.querySelector(".burger-nav").addEventListener("click", burgerNav);
  loginBtn.addEventListener("click", submitbtnHandler);
  registerbtn.addEventListener("click", registerbtnHandler);
});

function registerbtnHandler() {
  window.location.href = "/signup";
}

function burgerNav() {
  let navBarSlide = document.querySelector(".nav-btn-slide");
  if (navBarSlide.classList.contains("active")) {
    navBarSlide.classList.remove("active");
  } else {
    navBarSlide.classList.add("active");
  }
}

async function submitbtnHandler(e) {
  try {
    e.preventDefault();
    if (email.value && pw.value) {
      console.log(email.value, pw.value);
      let obj = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        body: JSON.stringify({
          email: email.value,
          password: pw.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let data = await obj.json();
      console.log(data);
      if (data.data) {
        window.location.href = "/menu";
      }
      if (data.message) {
        message.innerHTML = data.message;
      }
    } else {
      message.innerHTML = "Please enter email and password";
    }
  } catch (error) {
    console.log(error);
  }
}
