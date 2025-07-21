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
