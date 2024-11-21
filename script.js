// Smooth Navigation
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name && email && message) {
        alert(`Thank you, ${name}! We'll contact you at ${email}.`);
        contactForm.reset();
      } else {
        alert("Please fill out all fields.");
      }
    });
  }
  