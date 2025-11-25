// Simple form submission handler for Contact Page
// (Front-end only — no backend included)

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Your message has been recorded (Front-end only)");
      form.reset();
    });
  }
});