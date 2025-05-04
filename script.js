// ==================== Sliding Underline Navigation ====================
const navLinks = document.querySelectorAll("#navbar ul li a");
const underline = document.getElementById("underline");

function moveUnderline(link) {
  const linkRect = link.getBoundingClientRect();
  const navbarRect = document.getElementById("navbar").getBoundingClientRect();

  const left = linkRect.left - navbarRect.left;
  const width = linkRect.width;

  underline.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
  underline.style.left = `${left}px`;
  underline.style.width = `${width}px`;
}

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    moveUnderline(link);
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function updateUnderline() {
  const sections = document.querySelectorAll("section");
  let currentSection = "hero";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 100) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    if (link.getAttribute("href").includes(currentSection)) {
      moveUnderline(link);
    }
  });
}

window.addEventListener("scroll", updateUnderline);
window.addEventListener("load", () => {
  const homeLink = document.querySelector('#navbar ul li a[href="#hero"]'); 
  if (homeLink) moveUnderline(homeLink);
  updateUnderline();
});

// ==================== Projects Data ====================

/*
const projects = [
  {
    title: "Data Processing Workflow Optimization",
    category: "etl",
    image: "data-pipeline.jpg",
    description: "Refined ETL pipelines using Python, SQL and AWS Redshift at Mergen IT. Implemented data quality validation scripts and real-time monitoring with Prometheus/Grafana.",
    skills: ["Python", "SQL", "AWS Redshift", "ETL", "Kubernetes", "Prometheus", "Grafana"],
    outcome: "30% Efficiency Gain",
    github: "#"
  },
  {
    title: "GCP Data Pipeline Optimization",
    category: "etl",
    image: "gcp-cloud.jpg",
    description: "Optimized real-time and batch data processing workflows in GCP at EQUIFAX. Developed secure APIs and implemented fault tolerance measures.",
    skills: ["GCP", "Data Pipelines", "APIs", "Fault Tolerance", "Data Reconciliation"],
    outcome: "Improved System Reliability",
    github: "#"
  },
  {
    title: "Autonomous Vehicle Sensor Data Processing",
    category: "etl",
    image: "sensor-data.jpg",
    description: "Developed high-frequency data pipelines for LiDAR/Radar sensor data at NVIDIA. Created Python ETL scripts and optimized SQL queries.",
    skills: ["Python", "ETL", "SQL", "Sensor Data", "Data Quality"],
    outcome: "Optimized Data Collection",
    github: "#"
  },
  {
    title: "University Research Data Visualization",
    category: "viz",
    image: "research-dashboard.jpg",
    description: "Designed Power BI dashboards for university research findings at UNT. Automated data preprocessing with SQL pipelines.",
    skills: ["Power BI", "SQL", "Data Visualization", "Research Data"],
    outcome: "Improved Data Communication",
    github: "#"
  },
  {
    title: "Statistical Analysis Teaching",
    category: "ml",
    image: "statistics.jpg",
    description: "Guided students in statistical analysis projects using SAS, R and Python at UNT. Integrated real-world analytics case studies.",
    skills: ["SAS", "R", "Python", "Statistics", "Teaching"],
    outcome: "Enhanced Student Learning",
    github: "#"
  }
  */
  
];


// ==================== Project Filtering ====================
/*
function initializeFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      filterProjects(button.dataset.filter);
    });
  });
}

function filterProjects(filter) {
  const cards = document.querySelectorAll('.project-card');
  
  cards.forEach(card => {
    const category = card.dataset.category;
    const shouldShow = filter === 'all' || filter === category;
    
    card.style.opacity = shouldShow ? '1' : '0';
    card.style.transform = shouldShow ? 'translateY(0)' : 'translateY(20px)';
    card.style.display = shouldShow ? 'block' : 'none';
  });
}
*/

// ==================== Generate Project Cards ====================
/*
function generateProjectCards(){
  const projectGrid = document.querySelector('.project-grid');
  if (projectGrid) {
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.dataset.category = project.category;

      card.innerHTML = `
      <div class="card-header">
          <div class="project-image">
              <img src="images/${project.image}" alt="${project.title}" 
                  onerror="this.src='images/placeholder.png'">
          </div>
      </div>
      <div class="card-body">
          <h3>${project.title}</h3>
          <div class="project-skills">
              ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
          </div>
          <p class="project-description">${project.description}</p>
          <div class="project-outcome">
              <i class="fas fa-trophy"></i>
              <span>${project.outcome}</span>
          </div>
      </div>
      <div class="card-footer">
          <a href="${project.github}" target="_blank" class="github-link">
              <i class="fab fa-github"></i> View Code
          </a>
      </div>
      `;
      
      projectGrid.appendChild(card);
    });
  }
}
*/

// ==================== Typing Animation ====================
document.addEventListener("DOMContentLoaded", function() {
  const text = "Hello, I'm Ramesh Bonala...";
  let index = 0;
  function typeEffect() {
      if (index < text.length) {
          document.getElementById("typing-text").textContent += text.charAt(index);
          index++;
          setTimeout(typeEffect, 100);
      }
  }
  typeEffect();
});

// ==================== Skills Radar Chart ====================
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('skillsRadarChart')?.getContext('2d');
  if (ctx) {
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Python', 'SQL', 'AWS/GCP', 'Data Visualization', 'ETL', 'Machine Learning'],
        datasets: [{
          label: 'Skill Level',
          data: [90, 95, 85, 80, 85, 75],
          backgroundColor: 'rgba(46, 196, 182, 0.2)',
          borderColor: 'rgba(46, 196, 182, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(46, 196, 182, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(46, 196, 182, 1)'
        }]
      },
      options: {
        scales: {
          r: {
            angleLines: { color: 'rgba(200, 200, 200, 0.3)' },
            grid: { color: 'rgba(200, 200, 200, 0.3)' },
            pointLabels: { color: '#2ec4b6' },
            ticks: { display: false },
            suggestedMin: 0,
            suggestedMax: 100
          }
        },
        plugins: { legend: { display: false } },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
});

// ==================== Initialize Everything ====================
document.addEventListener('DOMContentLoaded', () => {
  initializeFilters();
  generateProjectCards();
  
  // Initialize Particles.js
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#2ec4b6' },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: '#2ec4b6', opacity: 0.4, width: 1 },
      move: { enable: true, speed: 3, direction: 'none', out_mode: 'bounce' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'bubble' },
        onclick: { enable: true, mode: 'push' }
      },
      modes: {
        bubble: { distance: 200, size: 6, duration: 2 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
});

// ==================== Profile Hover Effect ====================
const profilePic = document.querySelector('.profile-pic');
if (profilePic) {
  profilePic.addEventListener('mouseleave', function() {
    document.querySelectorAll('body > *:not(.profile-pic)').forEach(el => {
      el.style.filter = 'none';
    });
  });
}

// ==================== Education Timeline Duration Sizing ====================
document.querySelectorAll('.timeline-item').forEach(item => {
  const dateElement = item.querySelector('.timeline-date');
  if (dateElement) {
    const dates = dateElement.textContent.split(' - ').map(Number);
    const duration = dates[1] - dates[0];
    const content = item.querySelector('.timeline-content');
    
    if (content) {
      content.style.setProperty('--duration', duration);
      content.style.minHeight = `calc(100px + ${duration} * 40px)`;
      content.style.width = `calc(250px + ${duration} * 30px)`;
      content.setAttribute('data-duration', `${duration} year${duration > 1 ? 's' : ''}`);
    }
  }
});
