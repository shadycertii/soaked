function validation(){
    var name = document.getElementById("name").value;
      var subject = document.getElementById("subject").value;
        var phone = document.getElementById("phone").value;
          var email = document.getElementById("email").value;
              var submit = document.getElementById("submit").value;
                var error_msg = document.getElementById("error_msg");
                  var text;


            error_msg.style.padding = "10px";


            if (name.length <5){
  text = "please Enter A Valid Name";
  error_msg.innerHTML = text;
  return false;
            }

            if (subject.length <10) {
  text = "please Enter A Corect Subject";
  error_msg.innerHTML = text;
  return false;
            }

            if (isNaN(phone) || phone.length != 11) {
  text = "please Enter A Valid Phone Number";
  error_msg.innerHTML = text;
  return false;
            }

            if (email.indexOf("@") == -1 || email.length < 6) {
  text = "please Enter A Valid Email";
  error_msg.innerHTML = text;
  return false;
            }

            if (message.length <100) {
  text = "please Enter More Than 100 Characters";
  error_msg.innerHTML = text;
  return false;
            }

  alert("Submitted Successfully");

  return true;
  }