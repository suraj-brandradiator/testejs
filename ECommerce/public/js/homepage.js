
let randomNames = ["Scrumptious", "Delicious", "Mouthwatering"];
let changingText = document.querySelector(".container h1 span");
let idx = 0;
let word = randomNames[idx];
let text = "";
let isDeleting = false;

window.addEventListener("load", function () {
  typeWords();
  document.querySelector(".loginbtn").addEventListener("click", function () {
    window.location.href = "/login";
  });
  document.querySelector(".registerbtn").addEventListener("click", function () {
    window.location.href = "/signup";
  });
  document.querySelectorAll(".header li")[0].addEventListener("click", function () {
    window.location.href = "/faq";
  });
  document.querySelectorAll(".header li")[1].addEventListener("click", function () {
    window.location.href = "/contact";
  });
});





function typeWords(){

    if(isDeleting && !text.length){
        idx = (idx + 1) % randomNames.length;
        word = randomNames[idx];
        isDeleting = false;
    }
    
    if(text.length == word.length){
        isDeleting = true;
    }
    
    text = isDeleting ? word.substring(0, text.length - 1) : word.substring(0, text.length + 1);
    changingText.innerHTML = text;
    setTimeout(typeWords, text.length == word.length ? 1000 : 100);

}
