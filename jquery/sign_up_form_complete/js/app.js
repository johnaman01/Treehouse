//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

//Hide hints
$("form span").hide();

function passwordEvent() {
if ($(this).val().length > 8) {
$(this).next().hide();
  } else {
  $(this).next().show();
  }
}
$("#password").focus(passwordEvent).keyup(passwordEvent);


      //Hide hint if valid
      //else show hint
  //Find out if password and confirmation match
    //Hide hint if match

//When event happens on password input

//When event happens on confirmation input










