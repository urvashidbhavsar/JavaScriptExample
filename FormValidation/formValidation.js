// click event validation 
function formValid() {
    let fn = document.getElementById("fname");
    if (fn.value == "" || fn.value == null) {
        document.getElementById("msg1").innerHTML = "Enter Firstname";
        fn.classList.add("changeBorder")
        fn.focus();
        return false;
    }
    let ln = document.getElementById("lname");
    if (ln.value == "" || ln.value == null) {
        document.getElementById("msg2").innerHTML = "Enter Lastname";
        ln.focus();
        return false;
    }
    let m = document.getElementById("male").checked;
    let f = document.getElementById("female").checked;
    if (m == false && f == false) {
        document.getElementById("msg3").innerHTML = "Select Gender"
        return false
    }
    let addr = document.getElementById("addr").value;
    if (addr == "" || addr == null) {
        document.getElementById("msg4").innerHTML = "Enter Address"
        return false
    }
    let city = document.getElementById("citylist").value;
    if (city == "-1") {
        document.getElementById("msg5").innerHTML = "Select City"
        return false
    }
    let mno = document.getElementById("mobile").value;
    if (mno == "" || mno == null) {
        document.getElementById("msg6").innerHTML = "Enter Mobile No"
        return false;
    }
    let mail = document.getElementById("mail").value;
    if (mail == "" || mail == null) {
        document.getElementById("msg7").innerHTML = "Enter Email"
        return false
    }
    let ps = document.getElementById("pass").value;
    if (ps == "" || ps == null) {
        document.getElementById("msg8").innerHTML = "Enter Password"
        return false
    }
    let cps = document.getElementById("cpass").value;
    if (cps == "" || cps == null) {
        document.getElementById("msg9").innerHTML = "Enter Confirm Password"
        return false
    }
}

// blur event validation
// create a parameterized / argument function 
function blankCheck(blank, msg) {
    if (blank.value == "" || blank.value == null) {
        document.getElementById(msg).innerHTML = "Please, Enter value!!!"
        blank.classList.add("changeBorder")
        return false;
    }
}
function checkButtons(checkval, msg) {
    if (checkval.checked == false) {
        document.getElementById(msg).innerHTML = "Please, Select Value !!!"
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        return false
    }
}
function dropdown(selectval, msg) {
    if (selectval.value == "-1") {
        document.getElementById(msg).innerHTML = "Please, Select Value !!!"
        selectval.classList.add("changeBorder")
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        selectval.classList.remove("changeBorder")
        return false
    }
}


// keyboard event validation
// name validation
function checkName(exp, msg) {
    let nameEx = /^[a-zA-Z]*$/;
    if (!(nameEx.test(exp.value))) {
        document.getElementById(msg).innerHTML = "Invalid Name!! enter proper"
        return false;
    } else {
        document.getElementById(msg).innerHTML = ""
        return false;
    }
}
// for address 
function checkAdd(addlength, msg) {
    if (addlength.value.length < 35) {
        document.getElementById(msg).innerHTML = "Address must be more than 35 characters"
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        return false
    }
}
// for mobile
function mobileEx(mobile, msg) {
    let mEx = /^[0-9]*$/;
    let startNo = /^[6-9]/
    if (!(mEx.test(mobile.value)) || (!(startNo.test(mobile.value))) || mobile.value.length < 10) {
        document.getElementById(msg).innerHTML = "Invalid Number !!"
        return false;
    } else {
        document.getElementById(msg).innerHTML = ""
        return false;
    }
}
// email regular ex 
function emailRegEx(email, msg) {
    // let eEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let eEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
    if (!(eEx.test(email.value))) {
        document.getElementById(msg).innerHTML = "Enter Proper Email"
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        return false
    }
}

// password expression
function passEx(password, msg) {
    let passEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    if (!(passEx.test(password.value))) {
        document.getElementById(msg).innerHTML = "Password has uppercase, lowercase, number and special character. first letter must be uppercase"
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        return false
    }
}
// compare password
function comparePass(pass, cpass, msg) {
    if (cpass.value != document.getElementById(pass).value) {
        document.getElementById(msg).innerHTML = "Password and confirm password doesn't match"
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        return false
    }
}
// show password 
function showPassword(password, iconReplace) {
    let ps = document.getElementById(password)
    let icon = document.getElementById(iconReplace)
    if (ps.type == "password") {
        ps.type = "text"
        icon.classList.remove("bi-eye-fill")
        icon.classList.add("bi-eye-slash-fill")
    } else {
        ps.type = "password"
        icon.classList.remove("bi-eye-slash-fill")
        icon.classList.add("bi-eye-fill")
    }
}

// print a page
function printPage() {
    print()
}