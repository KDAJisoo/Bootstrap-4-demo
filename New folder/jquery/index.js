function isEmail(inputEmail) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(inputEmail);
}
function validatePassword(inputPassword) {
	return inputPassword.length > 8;
}

$(document).ready(function(){
    $('#email').change(function(){
       var email = $(this).val().trim();
       if(!isEmail(email)) {
           $(".emailError").html("Email is not valid format");
       }else{
           $(".emailError").html("")
       }
    });
    $('#password').change(function(){
       var password = $(this).val();
       if(!validatePassword(password)){
           $(".passwordError").html("Password is not valid format");
       }else{
           $(".passwordError").html("")
       }
       
    });

    
    
   
})
var changeMode = document.getElementById("dark-mode")
function changeColorStyle(href){
    changeMode.setAttribute("href", href);
    console.log("OK")
}
 