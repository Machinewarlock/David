// Get the form, listen to its submit event
$('.form-set-username').on('submit', processForm);

// function to run when the form is submitted
function processForm() {

  // get the entered user name from the input
  var enteredUsername = $('input').val();
  // Ajax emaple from W3Schools
  ajax(enteredUsername);
  // load the question view using showView
  showView('.view-question');
  // replace the content of <span class="username">@username</span> with our variable
  $('.username').html(enteredUsername);
  // return false stops the form from refreshing the page
  return false;
}
