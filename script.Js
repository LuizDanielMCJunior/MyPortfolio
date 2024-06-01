// File: script.js

// Elements
const toggleButtonT = document.getElementById('toggle-buttonTechnologies');
const toggleMenuT = document.getElementById('toggle-contatos');
const toggleButton = document.getElementById('toggle-button');
const toggleMenu = document.getElementById('toggle-contatos');
const technologiesSection = document.getElementById('SectionTechnologies');
const pauseButton = document.getElementById("pauseButton");
const topicSelect = document.getElementById("topicSelect");
const image = document.getElementById('toggle-image');
const toggleButtonCertificates = document.getElementById('toggle-buttonCertificates');

// Toggle Contact Menu
toggleButton.addEventListener('click', () => {
    toggleMenu.classList.toggle('expanded');
    hideTechnologiesSection(); // Hide technologies section when contact menu is toggled
});

// Toggle Technologies Section
toggleButtonT.addEventListener('click', () => {
    technologiesSection.classList.toggle('expanded');
    toggleTechnologyDisplay();
    toggleShow();
});

// Toggle Technology Display
function toggleTechnologyDisplay() {
    const technologies = document.querySelectorAll('.EachTechnology');
    technologies.forEach(tech => {
        tech.style.display = (tech.style.display === 'flex') ? 'none' : 'flex';
    });
}

// Toggle Show Class and Scroll
function toggleShow() {
    if (technologiesSection.classList.contains('expanded')) {
        toggleMenu.classList.remove('expanded')
        technologiesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Hide Technologies Section
function hideTechnologiesSection() {
    technologiesSection.classList.remove('expanded');
    const technologies = document.querySelectorAll('.EachTechnology');
    technologies.forEach(tech => {
        tech.style.display = 'none';
    });
}

// Toggle Image Display
toggleButtonCertificates.addEventListener('click', () => {
    image.style.display = (image.style.display === 'none') ? 'block' : 'none';
});

// Content Cycling
document.addEventListener("DOMContentLoaded", () => {
    const contents = document.querySelectorAll(".content");
    let currentContentIndex = 0;
    let intervalId;

    function toggleContent(index) {
        contents.forEach((content, idx) => {
            content.classList.toggle("active", idx === index);
        });
    }

    function togglePause() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            pauseButton.textContent = "Resume";
        } else {
            intervalId = setInterval(nextContent, 2000);
            pauseButton.textContent = "Pause";
        }
    }

    function nextContent() {
        toggleContent(currentContentIndex);
        currentContentIndex = (currentContentIndex + 1) % contents.length;
        topicSelect.value = (currentContentIndex + 1).toString();
    }

    intervalId = setInterval(nextContent, 2000);
    pauseButton.addEventListener("click", togglePause);
    topicSelect.addEventListener("change", () => {
        const selectedIndex = parseInt(topicSelect.value) - 1;
        toggleContent(selectedIndex);
        currentContentIndex = selectedIndex;
    });
});
