const password1text = document.getElementById("password-p");
const password2text = document.getElementById("rptpassword-p");



function checkPassword() {
    const password1 = document.getElementById("password").value;
    const password2 = document.getElementById("rptpassword").value;

    // If password not entered
    if (password1 == ''){
        password1text.innerText = "Please enter a password";
    } 
    // If confirm password not entered
    else if (password2 == ''){
        password1text.innerText = "";
        password2text.innerText = "Please repeat your password";
    }  
    // If Not same return False.    
    else if (password1 != password2) {
        password2text.innerText = "";
        password1text.innerText = "The entered password does not match";
    }
    // If same return True.
    else{
        password1text.innerText = "";
        password2text.innerText = "";
        console.log("Form succesful")
    }
}

const createBtn = document.querySelector(".create-btn");
createBtn.addEventListener('click', checkPassword);