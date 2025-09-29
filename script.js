// Initialize AOS (allows fade every time you scroll up/down)
AOS && AOS.init({ duration: 1200, once: false, mirror: true });

// Header background toggle on scroll
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  function checkHeader() {
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  // initial state
  if (header) header.classList.add("transparent");
  checkHeader();
  window.addEventListener("scroll", checkHeader);
});
