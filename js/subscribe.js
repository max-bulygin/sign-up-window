$(function(){
    
    //Form validation
    
    var isNameValid = false,
        isEmailValid = false;
    
    function checkName(){
        if ( $(this).val().length === 0 ){
            $(this).prev().show();
            isNameValid = false;
        } else {
            $(this).prev().hide();
            isNameValid = true;
        }
    }
    
    function checkEmail() {
        var re = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
        var email = $(this).val();
        
        if( email.search(re) === -1 ){
            $(this).prev().show();
            isEmailValid = false;
        } else {
            $(this).prev().hide();
            isEmailValid = true;
        }
    }
    
    function canSubmit(){
        return isNameValid && isEmailValid;
    }
    
    function enableSubmit(){
        $("input[type=submit]").prop("disabled", !canSubmit());
    }
    
    $("#userName").focus(checkName).keyup(checkName).keyup(enableSubmit);
    $("#userEmail").focus(checkEmail).keyup(checkEmail).keyup(enableSubmit);
    
    enableSubmit();
    
    //Send data to the server
    
    $("#signUpForm").submit(function(e){
        e.preventDefault();
        
        var formUrl = $(this).attr("action"),
            formData = $(this).serialize(); //collect data from inputs
//        console.log(formData);
        $.post(formUrl, formData, function(){
            $("#signUpForm").html('<p class="success">Спасибо за подписку!</p>');
        })
    })
        
    
});

//Implement form launcning on button click
  //add overlay
  //add form to it

//Hide form on overlay click


  //convert to JSON
  //or make a string and send to server and write it to the file without any processing
