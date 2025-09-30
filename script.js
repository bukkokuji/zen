document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS only if it's loaded on the page
  if (typeof AOS !== "undefined" && AOS && typeof AOS.init === "function") {
    AOS.init({ duration: 1200, once: false, mirror: true });
  }

  // Header background toggle on scroll
  const header = document.getElementById("header");
  function checkHeader() {
    if (!header) return;
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }

  if (header) header.classList.add("transparent");
  checkHeader();
  window.addEventListener("scroll", checkHeader);
});
