
const inputFirstName = document.querySelector(".first-name")
const inputLastName = document.querySelector(".last-name")
const email = document.querySelector(".email")
const password = document.querySelector(".password")

const submitButton = document.querySelector(".btn-submit")

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    const inputs = [inputFirstName.value, inputLastName.value, email.value, password.value]
    const emailRegex =/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    
    if (inputs.includes("")) {
        swal({
            title: "Invalid data",
            text: "All the inputs are required!",
            icon: "error",
        });
        return;
    } 
    if(emailRegex.test(email.value)){
       sendData()
       return;
    }else{
        swal({
            title: "Invalid email",
            text: "Check the email inputt!",
            icon: "warning",
        });
    }

})

function sendData(){
    swal({
        title: "All good",
        text: "Data sent!",
        icon: "success",
    });
}