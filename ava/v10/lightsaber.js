$(document).ready(function () {
  $('.toggle-icon').click(function () {
    $(this).toggleClass('pushed'); // Toggle the pushed class for animation
    $('.dropdown-content').toggle(); // Show or hide the dropdown menu
  });

  $(document).click(function (event) {
    if (!$(event.target).closest('#nav-container').length) {
      $('.dropdown-content').hide(); // Hide the dropdown menu
      $('.toggle-icon').removeClass('pushed'); // Reset hamburger icon animation
    }
  });
});


function openMobileNav() {
  document.getElementById("mobile-nav").style.width = "250px";
}

function closeMobileNav() {
  document.getElementById("mobile-nav").style.width = "0";
}

// Feedback popup drawer toggle
document.addEventListener('DOMContentLoaded', function () {
  var feedbackToggle = document.getElementById('feedback-toggle');
  var feedbackPopup = document.getElementById('feedback-popup');
  var arrow = document.getElementById('arrow');

  if (feedbackToggle && feedbackPopup && arrow) {
    feedbackToggle.addEventListener('click', function () {
      feedbackPopup.classList.toggle('open');
      // Flip the arrow direction
      arrow.innerHTML = feedbackPopup.classList.contains('open') ? '&#9660;' : '&#9650;';
    });
  }
});
