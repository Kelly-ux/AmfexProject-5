// Toggle Navigation Menu for Mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Dark Mode Toggle Using Switch
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Check if dark mode is already enabled
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    themeSwitch.checked = true; // Set the switch to "On" if dark mode is active
}

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled'); // Save dark mode state
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled'); // Save light mode state
    }
});

