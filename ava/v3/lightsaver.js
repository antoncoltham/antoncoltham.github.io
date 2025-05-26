$(document).ready(function () {
  $('.toggle-icon').click(function () {
    $(this).toggleClass('pushed'); // Toggle the pushed class for animation
    $('.dropdown-content').toggle(); // Show or hide the dropdown content
  });

  $(document).click(function (event) {
    if (!$(event.target).closest('#nav-container').length) {
      $('.dropdown-content').hide(); // Hide dropdown if clicked outside
      $('.toggle-icon').removeClass('pushed'); // Reset hamburger icon
    }
  });
});
