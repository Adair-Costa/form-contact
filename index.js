let email = window.document.getElementById("email")

email.addEventListener('focus', () => { // events
    email.style.borderColor = "#5F7C8A"
})

email.addEventListener('blur', () => {
    email.style.borderColor = "#ccc"
})

let password = window.document.getElementById("password")

password.addEventListener('focus', () => {
    password.style.borderColor = "#5F7C8A"
})

password.addEventListener('blur', () => {
    password.style.borderColor = "#ccc"
})

function buttonSend() {
    let email = window.document.getElementById("email").value
    let password = window.document.getElementById("password").value

    let message = ""

    message += `Email: ${email}\n`
    message += `Password: ${password}`

    window.alert(message)
}