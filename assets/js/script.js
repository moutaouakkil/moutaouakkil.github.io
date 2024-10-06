// Matrix rain effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
const matrixArray = matrix.split("");

let fontSize = 10;
let columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

function animate() {
    draw();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    resizeCanvas();
    columns = canvas.width / fontSize;
    drops.length = 0;
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
});

// Navbar functionality
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    function closeNav() {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    }

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', closeNav);
    });

    document.addEventListener('click', (event) => {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnBurger = burger.contains(event.target);
        if (!isClickInsideNav && !isClickOnBurger && nav.classList.contains('nav-active')) {
            closeNav();
        }
    });
}

navSlide();

// Theme switcher
const themeIcon = document.querySelector('.theme-switcher');
const themeOptions = document.querySelector('.theme-options');
const lightThemeBtn = document.getElementById('lightTheme');
const darkThemeBtn = document.getElementById('darkTheme');
const systemThemeBtn = document.getElementById('systemTheme');

themeIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    themeOptions.style.display = themeOptions.style.display === 'block' ? 'none' : 'block';
});

function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
    themeOptions.style.display = 'none';
}

lightThemeBtn.addEventListener('click', () => setTheme('light-theme'));
darkThemeBtn.addEventListener('click', () => setTheme(''));
systemThemeBtn.addEventListener('click', () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('');
    } else {
        setTheme('light-theme');
    }
});

// Close theme options when clicking outside
document.addEventListener('click', (event) => {
    if (!themeIcon.contains(event.target) && !themeOptions.contains(event.target)) {
        themeOptions.style.display = 'none';
    }
});

// Set initial theme based on user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('');
} else {
    setTheme('light-theme');
}

// Sidebar functionality
const sidebar = document.querySelector('.sidebar');
const toggleSidebar = document.querySelector('.toggle-sidebar');
const closeSidebar = document.querySelector('.close-sidebar');

function openSidebar() {
    sidebar.classList.add('active');
}

function closeSidebarFunc() {
    sidebar.classList.remove('active');
}

if (toggleSidebar) {
    toggleSidebar.addEventListener('click', openSidebar);
}

if (closeSidebar) {
    closeSidebar.addEventListener('click', closeSidebarFunc);
}

// Close sidebar when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggle = toggleSidebar && toggleSidebar.contains(event.target);
    if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('active')) {
        closeSidebarFunc();
    }
});

// Responsive behavior for sidebar
function handleResponsive() {
    if (window.innerWidth > 768) {
        sidebar.classList.add('active');
    } else {
        sidebar.classList.remove('active');
    }
}

window.addEventListener('resize', handleResponsive);
handleResponsive(); // Call once on load

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to current nav item
function setActiveNavItem() {
    const navLinks = document.querySelectorAll('.nav-links a, .sidebar-nav a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

setActiveNavItem();

// Optional: Add a scroll-to-top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.className = 'scroll-to-top';
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Expand/collapse sidebar submenus
const sidebarSubmenus = document.querySelectorAll('.sidebar-nav > ul > li > ul');
sidebarSubmenus.forEach(submenu => {
    const parentLink = submenu.previousElementSibling;
    parentLink.addEventListener('click', (e) => {
        e.preventDefault();
        submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
    });
});

// Initialize submenus as collapsed on mobile
function initializeSubmenus() {
    if (window.innerWidth <= 768) {
        sidebarSubmenus.forEach(submenu => {
            submenu.style.display = 'none';
        });
    } else {
        sidebarSubmenus.forEach(submenu => {
            submenu.style.display = 'block';
        });
    }
}

window.addEventListener('resize', initializeSubmenus);
initializeSubmenus(); // Call once on load