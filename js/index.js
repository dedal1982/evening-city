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
const wrapper = document.querySelector(".tabs");
const tabToggle = wrapper.querySelectorAll(".tab-toggle");

function openTab() {
  const content = this.parentElement.nextElementSibling;
  const activeItems = wrapper.querySelectorAll(".active");
  if (window.innerWidth > 991) {
    if (!this.classList.contains("active")) {
      this.classList.toggle("active");
      content.classList.toggle("active");
      activeItems.forEach((item) => item.classList.toggle("active"));
      wrapper.style.minHeight = `${content.offsetHeight}px`;
    }
  } else {
    this.classList.toggle("active");
    content.classList.toggle("active");
  }
}

tabToggle.forEach((item) => item.addEventListener("click", openTab));
tabToggle[0].click();
