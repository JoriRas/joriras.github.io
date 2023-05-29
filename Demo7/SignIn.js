document.addEventListener("DOMContentLoaded",hasSignIn);
// function to display name on "welcome" message
function hasSignIn(){
    let signIn = 'yes';
    if (signIn === 'yes') {
        document.getElementById('hello_Darkness').textContent += localStorage.getItem("name");
    }
}

// fuction for signin in
function login(){
    localStorage.setItem("name", document.getElementById ("name").value);
}