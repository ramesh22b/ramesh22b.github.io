// Initialize particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#2ec4b6" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#2ec4b6", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" }
        }
    }
});

// Initialize current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Initialize skills chart
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('skillsRadarChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Python', 'SQL', 'Power BI', 'Tableau', 'AWS', 'GCP'],
                datasets: [{
                    label: 'Skill Level',
                    data: [90, 85, 80, 75, 70, 70],
                    backgroundColor: 'rgba(46, 196, 182, 0.2)',
                    borderColor: 'rgba(46, 196, 182, 1)',
                    pointBackgroundColor: 'rgba(46, 196, 182, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: { display: false },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Set current year in footer
document.getElementById('2025').textContent = new Date().getFullYear();

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});