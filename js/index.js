window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.querySelector(".scroll-to-top").style.transform = "scale(1)";
  } else {
    document.querySelector(".scroll-to-top").style.transform = "scale(0)";
  }
}

document.querySelector(".scroll-to-top").addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//burger
const burgerClick = document.querySelector(".header__burger");
const scrollLock = document.querySelector(".page");
const navMobile = document.querySelector(".nav");

//открытие бургера
burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  navMobile.classList.toggle("active");
  scrollLock.classList.toggle("lock");
});

//новости
