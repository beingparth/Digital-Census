function validate(){
    var name = document.getElementsByName("name");
    var username = document.getElementsByName("username");
    var email = document.getElementsByName("email");
    var number = document.getElementsByName("number");
    var password = document.getElementsByName("password");
    var confirm = document.getElementsByName("confirm");

    if(name.value == "" || username.value == "" || email.value == "" || number.value == "" || password.value == "" || confirm.value == ""){
        alert("feilds cant be empty")
    }
    else{

    }
}