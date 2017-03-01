function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  return emailReg.test($email);
}

$(document).ready(function() {

  function addSuccess(that) {
    $(that).removeClass("form-control-danger").parent().removeClass("has-danger");
    $(that).addClass("form-control-success").parent().addClass("has-success");
  }

  function addDanger(that) {
    $(that).removeClass("form-control-success").parent().removeClass("has-success");
    $(that).addClass("form-control-danger").parent().addClass("has-danger");
  }

  // Validate as the user completes the form
  $("input[type=text], textarea").on("input", function() {
    if (this.id == "email"){
      if ((this.value) && (validateEmail(this.value))) {
          addSuccess(this);
      }
      else {
        addDanger(this);
      }
    } 
    else if (this.id != "company") {
      if ($.trim(this.value).length) {
        addSuccess(this);
      } else {
        addDanger(this);
      }
    } 
  });

  $('form').on('submit', function(event) {
    event.preventDefault();
    
    var ready = 0;

    if ($.trim($("#name").val()).length) {
      ready++;
    } else {
      addDanger($("#name"));
    }

    if (($("#email").val()) && (validateEmail($("#email").val()))){
      ready++;
    } else {
      addDanger($("#email"));
    }

    if ($.trim($("#message").val()).length) {
      ready++;
    } else {
      addDanger($("#message"));
    }
    
    if (ready === 3) {
      this.submit();
    }
  });

  $(window).scroll( function(){ 
    // Fades in each project as the user scrolls
    $('.fadeInBlock').each( function(i){
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
        bottom_of_window = bottom_of_window + 400;  
      
        if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},500);    
        }
    }); 
  });

});
