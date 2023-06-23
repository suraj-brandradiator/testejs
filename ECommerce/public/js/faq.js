window.addEventListener("load", function () {
  // Adding click event listener to burger navbar
  document.querySelector(".burger-nav").addEventListener("click", burgerNav);
});

function burgerNav() {
  let navBarSlide = document.querySelector(".nav-btn-slide");

  // toggle class active
  if (navBarSlide.classList.contains("active")) {
    navBarSlide.classList.remove("active");
  } else {
    navBarSlide.classList.add("active");
  }
}
