document.addEventListener('DOMContentLoaded', function() {

    const menuToggle = document.getElementById('menu-toggle');
    const closeSidebar = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('.sidebar ul li a');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.add('open');
    });

    closeSidebar.addEventListener('click', function() {
        sidebar.classList.remove('open');
    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove('open');
        }
    });

    // Close sidebar when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('open');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animations to elements when they come into view
    const animatedElements = document.querySelectorAll('.service-card, .about-image, .about-content, .contact-form');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});


// Get the current year
var currentYear = new Date().getFullYear();

// Update the content of the span element with the current year
document.getElementById("currentYear").innerText = currentYear;



const downloadButton = document.getElementById('downloadButton');
const cvFile = 'kagiri peterson.pdf'; // replace with the actual file path

downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = cvFile;
  link.download = 'kagiri peterson CV.pdf'; // replace with the desired file name
  link.click();
});