function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Auto-scroll animations for investor attention
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        scrollToSection('invest');
    }, 5000);
});
