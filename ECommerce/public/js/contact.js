window.addEventListener("load", function () {
  // Add event listener to burger navbar
  document.querySelector(".burger-nav").addEventListener("click", burgerNav);
});

function burgerNav() {
  let navBarSlide = document.querySelector(".nav-btn-slide");
  if (navBarSlide.classList.contains("active")) {
    navBarSlide.classList.remove("active");
  } else {
    navBarSlide.classList.add("active");
  }
}
