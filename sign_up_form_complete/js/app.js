//Problem: Hints are shown even when forms are valid
//Solution: Hide and show them at appropriate time
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//Hide hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length >8;
}
function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
return isPasswordValid() && arePasswordsMatching();

}
function passwordEvent(){
  // Find out if password is valid
  if(isPasswordValid()) {
//Hide if valid
    $password.next().hide();
  } else {
  //Else show hint
    $password.next().show();
  }
}
function confirmPasswordEvent(){ 
   //Find out if password and comfirmation match
   if(arePasswordsMatching()) {
    //Hide hint is match
    $confirmPassword.next().hide()
  } else{
    //Else show hint
    $confirmPassword.next().show()
  }
}

function enableSubmitEvent(){
  !
  $("#submit").prop("disabled", !canSubmit());
}
//When event happens on passworf input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);



//When event happens on comfirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();



