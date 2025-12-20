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
  document.documentElement.style.setProperty("--kamon-opacity", 0.05);
  document.documentElement.style.setProperty("--kamon-shift", "0px");
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  /* Intensité visuelle */
  const opacityMaxScroll = 600;
  const opacity = Math.min(scrollY / opacityMaxScroll, 1);
  document.documentElement.style.setProperty(
    "--kamon-opacity",
    0.04 + opacity * 0.08
  );

  /* Déplacement vertical très léger */
  const shift = Math.min(scrollY * 0.1, 60);
  document.documentElement.style.setProperty(
    "--kamon-shift",
    `${shift}px`
  );
});


window.addEventListener("load", () => {
  setTimeout(() => {
    const hero = document.querySelector(".hero");
    if (hero) hero.classList.add("loaded");
  }, 3000); // volontairement long
});

