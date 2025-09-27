// Header effect: transparent at top, solid on scroll
window.addEventListener("scroll", function() {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.remove("transparent");
    header.classList.add("scrolled");
  } else {
    header.classList.add("transparent");
    header.classList.remove("scrolled");
  }
});

// Initial state
document.addEventListener("DOMContentLoaded", function() {
  const header = document.getElementById("header");
  header.classList.add("transparent");
});
