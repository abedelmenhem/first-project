document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-btn").addEventListener("click", function() {
        toggleMenu();
    });

    function toggleMenu() {
        const menu = document.getElementById("mobile-menu");
        menu.classList.toggle("hidden");
    }
});


const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

function validateName() {
    const nameRegex = /^[A-Za-z\s]{5,}$/;
    const isValid = nameRegex.test(nameInput.value);
    nameError.classList.toggle('hidden', isValid);
    return isValid;
}

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(emailInput.value);
    emailError.classList.toggle('hidden', isValid);
    return isValid;
}

function validateMessage() {
    const wordCount = messageInput.value.trim().split(/\s+/).length;
    const isValid = wordCount >= 20;
    messageError.classList.toggle('hidden', isValid);
    return isValid;
}

function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    submitBtn.disabled = !(isNameValid && isEmailValid && isMessageValid);
}

nameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
messageInput.addEventListener('input', validateForm);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateName() && validateEmail() && validateMessage()) {
        // Handle form submission here
        alert('Message sent successfully!');
        form.reset();
        submitBtn.disabled = true;
    }
});