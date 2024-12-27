document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".links");
  
    hamburgerButton.addEventListener("click", () => {
      navLinks.classList.toggle("show"); // Toggle the 'show' class to display/hide nav links
    });
  });
  