// ===========================
// MOBILE MENU TOGGLE
// ===========================
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const expanded = navLinks.classList.contains("open");
    menuButton.setAttribute("aria-expanded", expanded);

    menuButton.textContent = expanded ? "✕" : "☰";
});

// ===========================
// CONTACT FORM VALIDATION
// ===========================
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill all fields!";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Thank you! Your message has been sent.";
        formMessage.style.color = "green";
        contactForm.reset();
    }
});
