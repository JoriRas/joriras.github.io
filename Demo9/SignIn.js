document.addEventListener("DOMContentLoaded",hasSignIn);
// function to display name on "welcome" message
function hasSignIn(){
    let signIn = 'yes';
    let name = localStorage.getItem("name"); // If no name in locan storage will display nothing

    if (signIn === 'yes' && name) {
        document.getElementById('hello_Darkness').textContent += name;
        document.getElementById("singIn_Form").style.display = "none"; // gets element then removes element visibillity if singIn = true
    }
    else {
        document.getElementById("singout").style.display = "none"; // gets element then removes element visibillity if singout = false
        document.getElementById('hello_Darkness').style.display = "none"; // hide "welcom msg" when not logged in
    }
}


// fuction for signin in
function login(){
    localStorage.setItem("name", document.getElementById ("name").value);
    localStorage.setItem("login", "yes");
}

// function for login out

function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("logout")
}