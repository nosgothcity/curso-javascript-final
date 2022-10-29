let createUser
let userFirstName
let userLastName
let userName
let userPass
let showErrorMessageAlias

const initElements = () => {
    createUser = document.getElementById("new-user-form")
    userFirstName = document.getElementById("firstName")
    userLastName = document.getElementById("lastName")
    userName = document.getElementById("username")
    userPass = document.getElementById("password")

    showErrorMessageAlias = document.getElementById("err-message-username")
}

const initEvents = () => {
    createUser.onsubmit = (event) => createNewUser(event)
}

const createNewUser = async event => {
    // console.log('Intentando crear usuario....')
    event.preventDefault()
    showErrorMessageAlias.hidden = true
    let response
    let data
    let raw
    let newUserFirstname = userFirstName.value
    let newUserLastname = userLastName.value
    let newUsername = userName.value.toLowerCase()
    let newUserPass = userPass.value
    // console.log(newUsername)

    try{
        response = await fetch(`http://localhost:3000/users?username=${newUsername}`, {
            method: 'GET',
        })
        data = await response.json()
    } catch (error) {
        console.error(error)
    }

    if(data.length > 0){
        showErrorMessageAlias.hidden = false
    } else {
        raw = JSON.stringify({
            "firstname": newUserFirstname,
            "lastname": newUserLastname,
            "pass": newUserPass,
            "username": newUsername
        })
        await createUserApi(raw)
            .then(response => {
                showConfirmMessage()
            })
            .catch(err => console.error(err))
    }

}

const createUserApi = async raw => {
    // console.log('Creando usuario....')
    let myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    }

    fetch("http://localhost:3000/users", requestOptions)
        .then(response => response.text())
        .then(result => console.log('usuario creado', result))
        .catch(error => console.error(error))
}

const showConfirmMessage = () => {
    Swal.fire(
        'Usuario Creado.',
        '',
        'success'
    )
    .then(() => {
        window.location.href = '../index.html'
    })
}

const main = () => {
    initElements()
    initEvents()
}

main()
