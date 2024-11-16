// Toggle rewards, timeline, and FAQs content
document.getElementById('rewardsBtn').addEventListener('click', function() {
    toggleContent('rewardsContent');
  });
  document.getElementById('timelineBtn').addEventListener('click', function() {
    toggleContent('timelineContent');
  });
  document.getElementById('faqsBtn').addEventListener('click', function() {
    toggleContent('faqsContent');
  });
  
  function toggleContent(contentId) {
    document.querySelectorAll('.content-box').forEach(box => box.classList.remove('active'));
    document.getElementById(contentId).classList.add('active');
  }

  // Toggle theme buttons for smaller screens

  document.querySelectorAll('.card h2').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.parentElement;
      card.classList.toggle('active');
    });
  });

  // Function to toggle the mobile menu
function toggleMenu() {
    const menu = document.querySelector('.et-hero-tabs-container');
    menu.classList.toggle('show');
  }
  
// JavaScript for FAQ dropdown and ripple effect
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", function(e) {
      // Create the ripple element
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
  
      // Get button's position and size to position the ripple correctly
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
  
      // Set the ripple size and position
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
  
      // Append ripple to button
      button.appendChild(ripple);
  
      // Remove ripple after animation ends
      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
  
      // Toggle answer visibility
      const answer = button.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
  
// Foot Script
// Function to open a modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

// Function to close a modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Event listeners for opening modals
document.getElementById('team-popup').onclick = function () {
  openModal('team-modal');
};

document.getElementById('terms-popup').onclick = function () {
  openModal('terms-modal');
};

// Close modal when clicking outside content
window.onclick = function (event) {
  let teamModal = document.getElementById('team-modal');
  let termsModal = document.getElementById('terms-modal');
  if (event.target == teamModal) {
    closeModal('team-modal');
  }
  if (event.target == termsModal) {
    closeModal('terms-modal');
  }
};

// Mobile navbar
