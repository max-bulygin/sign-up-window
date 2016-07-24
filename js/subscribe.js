$(function(){
    
    //Implement form launcning on button click
    
    var isFormLoaded = false,
        $overlay = $('<div class="overlay"></div>'),
        $userName = $("#userName");
    
    $("#subscribe").click(function(){
        if(!isFormLoaded){
            $("body").append($overlay);
            $overlay.load('form.html');
            isFormLoaded = true;
        } else {
            $overlay.show();
        }   
    });
    
    $("body").on("click", function(e){
        if (e.target.className === "overlay")
            $overlay.hide();
    });
    
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
    
    $("body").on('keyup', "#userName", checkName).on('keyup', "#userName", enableSubmit);
    $("body").on('keyup', "#userEmail", checkEmail).on('keyup', "#userEmail", enableSubmit);
    
    //Send data to the server
    
    $("#signUpForm").submit(function(e){
        e.preventDefault();
        
        var formUrl = $(this).attr("action"),
            formData = $(this).serialize(); //collect data from inputs
        
        $.post(formUrl, formData, function(){
            $("#signUpForm").html('<p class="success">Спасибо за подписку!</p>');
            $(".overlay").delay(1500).fadeOut();
        }).fail(function(jqXHR){
            var $message = '<p class="fail">Что-то пошло не так. Попробуйте еще раз позже!</p>';
            $message += '<p class="fail">' + jqXHR.statusText + '</p>';
            $("#signUpForm").html($message);
            $(".overlay").delay(1500).fadeOut();
        })
    }) 
});
