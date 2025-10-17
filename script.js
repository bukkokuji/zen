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

// FAQ déroulante
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('active');
  });
});

<script>
  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      button.classList.toggle("active");
      if (button.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
</script>
