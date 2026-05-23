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

if (window.innerWidth > 768) {

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

} // ← fermeture du if ici


window.addEventListener("load", () => {
  setTimeout(() => {
    const hero = document.querySelector(".hero");
    if (hero) hero.classList.add("loaded");
  }, 1500);
});


document.addEventListener("DOMContentLoaded", () => {

  const introTitle = document.querySelector('.intro-title');
  const introVertical = document.querySelector('.intro-vertical-text');

  if (!introVertical || !introTitle) return;

  const lines = introVertical.querySelectorAll('span');

  lines.forEach((line, lineIndex) => {

    const text = line.textContent;

    line.textContent = "";

    [...text].forEach((char, charIndex) => {

      const charSpan = document.createElement("span");

      charSpan.textContent = char;

      charSpan.style.transitionDelay =
        `${lineIndex * 0.22 + charIndex * 0.045}s`;

      line.appendChild(charSpan);

    });

  });

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        introVertical.classList.add('visible');
        introTitle.classList.add('visible');

      }

    });

  }, {
    threshold: 0.18
  });

  observer.observe(introVertical);

});
