$(document).ready(function(){
  $("#loginAlert").hide();
  $("#signUpAlert").hide();
  inputError("#loginAlert","Credentials not correct",["#loginId","#loginPass"]);
  inputError("#signUpAlert","User Id taken",["#signUpId"]);
  inputError("#signUpAlert","Password not same",["#signUpPass1","#signUpPass2"]);
});

//we need to write down the possible errors

function inputError(alertId,message,id){
  id.forEach(function(obj){
    $(obj).addClass('has-error');
  });
  $(alertId).hide();
  $(alertId).text(message);
  $(alertId).show(300);
}

function removeInputError(id){
  id.forEach(function(obj){
    $(obj).removeClass('has-error');
  });
}

function checkUserIdAvailability(){
  //checks if user id is taken by another user or unavailable
}

function checkSignUpPassMatch(){
  //check if the Password of both pass1 and pass2 match
}

function authenticateLogin(){
  //check if userId and pass matches an account
}

function signUp(){
  //this function is called onclick of signup button
}

function login(){
  //this function is called onclick of signin button
}
