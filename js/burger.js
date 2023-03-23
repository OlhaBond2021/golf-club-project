(function () {
  const navWrapper = document.querySelector(".nav-wrapper");
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerLine = document.querySelector(".burger-line");
  const itemLinks = document.querySelectorAll(".item-link");
  const socialLinks = document.querySelectorAll(".social-link");

  burgerMenu.addEventListener("click", function () {
    document.body.classList.toggle("lock");
    navWrapper.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    burgerLine.classList.toggle("active");
  });

  itemLinks.forEach((link) => {
    link.addEventListener("click", function () {
      document.body.classList.toggle("lock");
      navWrapper.classList.toggle("active");
      burgerMenu.classList.toggle("active");
      burgerLine.classList.toggle("active");
    });
  });

  socialLinks.forEach((link) => {
    link.addEventListener("click", function () {
      document.body.classList.toggle("lock");
      navWrapper.classList.toggle("active");
      burgerMenu.classList.toggle("active");
      burgerLine.classList.toggle("active");
    });
  });
  
})();
