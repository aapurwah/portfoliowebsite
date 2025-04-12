document.addEventListener("DOMContentLoaded", function () {
    // Show popup
    window.showPopup = function (avatarId) {
      const popup = document.getElementById(`${avatarId}-popup`);
      if (popup) {
        popup.style.display = 'flex';
      }
    };
  
    // Close popup
    window.closePopup = function (avatarId) {
      const popup = document.getElementById(`${avatarId}-popup`);
      if (popup) {
        popup.style.display = 'none';
      }
    };
  
  
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  