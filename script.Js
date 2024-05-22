const toggleButtonT = document.getElementById('toggle-buttonT');
const toggleMenuT = document.getElementById('toggle-menu')
const toggleButton = document.getElementById('toggle-button');
const toggleMenu = document.getElementById('toggle-menu');
const technologiesSection = document.getElementById('technologies');

const mytech= document.getElementById('technology');

toggleButton.addEventListener('click', () => {
    toggleMenu.classList.toggle('expanded');
    mytech.classList.remove('expanded');
});

// JavaScript to toggle the technologies section
toggleButtonT.addEventListener('click', () => {
    technologiesSection.classList.toggle('expanded'); // Toggle the 'show' class
    toggleMenuT.classList.remove('expanded');

    // Call the function to toggle technology display
    toggleTechnologyDisplay();
});

toggleButtonT.addEventListener('click', () => {
    // Toggle the 'show' class to display/hide the technologies section
    technologiesSection.classList.toggle('show');

    // If the technologies section is shown, scroll to it
    if (technologiesSection.classList.contains('show')) {
        technologiesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // If the technologies section is hidden, scroll back to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Function to toggle the display of "technology"
function toggleTechnologyDisplay() {
    const technologies = document.querySelectorAll('.technology');
    technologies.forEach(tech => {
        if (tech.style.display === 'flex') {
            tech.style.display = 'none';
        } else {
            tech.style.display = 'flex';
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Other code remains the same
});
document.addEventListener("DOMContentLoaded", function() {
    var contents = document.querySelectorAll(".content");
    var currentContentIndex = 0;
    var pauseButton = document.getElementById("pauseButton");
    var topicSelect = document.getElementById("topicSelect");
    var intervalId;

    // Function to toggle between content sections
    function toggleContent(index) {
        contents.forEach(function(content, idx) {
            if (idx === index) {
                content.classList.add("active");
            } else {
                content.classList.remove("active");
            }
        });
    }

    // Function to handle pause/resume button click
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

    // Function to switch to the next content section
    function nextContent() {
        toggleContent(currentContentIndex);
        currentContentIndex = (currentContentIndex + 1) % contents.length;
        topicSelect.value = (currentContentIndex + 1).toString(); // Update topic selector
    }

    // Initial automatic switch after 4 seconds
    intervalId = setInterval(nextContent, 2000);

    // Event listener for pause/resume button click
    pauseButton.addEventListener("click", togglePause);

    // Event listener for topic selector change
    topicSelect.addEventListener("change", function() {
        var selectedIndex = parseInt(topicSelect.value) - 1;
        toggleContent(selectedIndex);
        currentContentIndex = selectedIndex;
    });
});

