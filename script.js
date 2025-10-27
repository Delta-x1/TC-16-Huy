document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  // Toggle mobile menu
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    // Change icon between menu and close
    const icon = this.querySelector("svg");
    if (navMenu.classList.contains("active")) {
      icon.innerHTML =
        '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>';
    } else {
      icon.innerHTML =
        '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>';
    }
  });

  // Close menu when clicking on a link (optional)
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("active");
        menuToggle.querySelector("svg").innerHTML =
          '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>';
      }
    });
  });

  // Close menu when clicking outside (optional)
  document.addEventListener("click", function (event) {
    if (!event.target.closest("nav") && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      menuToggle.querySelector("svg").innerHTML =
        '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>';
    }
  });
});
