// Dummy JavaScript file for sports webpage

document.addEventListener('DOMContentLoaded', () => {
    console.log('Sports webpage loaded');
    
    // Highlight the active link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
