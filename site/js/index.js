let login
let userName
let userPass
let showLoginError

const initElements = () => {
    login = document.getElementById("login-form")
    user = document.getElementById("userInput")
    pass = document.getElementById("userPass")
    showLoginError = document.getElementById("message-login-error")
}

const initEvents = () => {
    login.onsubmit = (event) => userLogin(event)
}

const userLogin = async event => {
    // console.log('realizando login....')
    event.preventDefault()
    let response
    let data
    userName = user.value
    userPass = pass.value

    try{
        response = await fetch(`http://localhost:3000/users?username=${userName}&pass=${userPass}`, {
            method: 'GET',
        })
        data = await response.json()
    } catch (error) {
        console.error(error)
    }

    if(data.length > 0){
        showLoginError.hidden = true
        createSession(data)
        window.location.href = 'src/todo-main.html'
    } else {
        showLoginError.hidden = false
        console.error('DATOS INGRESADOS NO VALIDOS')
    }

}

const createSession = data => {
    const userId = data[0].id
    sessionStorage.setItem("userId", userId)
}

const main = () => {
    initElements()
    initEvents()
}

main()
