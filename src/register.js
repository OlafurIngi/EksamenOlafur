// Code inspired from https://www.youtube.com/watch?v=b91

// We need to add an event listener
document.addEventListener("DOMContentLoaded", (event) => {
     // Here I define the form that is related in the html file
    const form = document.getElementById("form")
    form.addEventListener("submit", function(event) {

        // Prevent any default action
        event.preventDefault();

    // defining email and password by their ID in the form, 
    // and getting the value of that input with .value   
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    // We want the user as a function
    let user = {
        email: email,
        password: password
    }

        // Inspired from this https://www.codegrepper.com/code-examples/javascript/fetch+put+request+javascript
        // We make a fetch request
        fetch("http://localhost:3000/users/create", {

            method: "POST",
            headers: {
                // JSON content type
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        // If data is found go to login.html, if not, prompt error.
        }) .then(res => res.json())
        .then(data => {
            if (data) {
                location.href = "/login.html";
            }
        })
        .catch((err) => {
            
            console.log("Error:", err)

        })


    })

})