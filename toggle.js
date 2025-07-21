document.addEventListener("DOMContentLoad", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const navMenu = document.querySelector(".navbar-menu");

  toggler.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    //Optional: Animate the toggler icon
    toggler.classList.toggle("open");
  });
});
