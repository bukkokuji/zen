// Include header and footer dynamically
function includeHTML() {
  const includeElement = (id, file) => {
    fetch(file)
      .then(response => response.text())
      .then(data => document.getElementById(id).innerHTML = data)
      .then(() => {
        if(id === "header-placeholder") setupHeader(); // activer le scroll après inclusion
      });
  };
  includeElement("header-placeholder", "header.html");
  includeElement("footer-placeholder", "footer.html");
}

// Header scroll / transparent
function setupHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  const checkHeader = () => {
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };

  header.classList.add("transparent");
  checkHeader();
  window.addEventListener("scroll", checkHeader);
}

document.addEventListener("DOMContentLoaded", function () {
  includeHTML(); // inclut le header/footer

  // Initialize AOS
  if (typeof AOS !== "undefined" && AOS && typeof AOS.init === "function") {
    AOS.init({ duration: 1200, once: false, mirror: true });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const kamonHero = document.querySelector(".practice-page .hero-text");
  if (!kamonHero) return;

  // apparition douce
  setTimeout(() => {
    kamonHero.classList.add("kamon-visible");
  }, 400);
});

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".practice-page .hero-text");
  if (!hero) return;

  const scrollY = window.scrollY;
  const maxScroll = 300; // zone d’effet
  const intensity = Math.min(scrollY / maxScroll, 1);

  hero.style.setProperty(
    "--kamon-opacity",
    0.07 + intensity * 0.06
  );
});
