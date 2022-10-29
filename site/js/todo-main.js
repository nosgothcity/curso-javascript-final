let todoListContainer
let showTodoListAdderModal
let closeTodoListAdderModal
let todoListAdderModal
let modal
let showUser
let todoForm
let logout
let todoTitle
let todoDescription

const trashIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>`

const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
<path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
</svg>`

const checkIconDone = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>`

const calendarIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
</svg>`

const initElements = () => {
    logout = document.getElementById('logout')
    todoTitle = document.getElementById("title")
    todoDescription = document.getElementById("description")
    showUser = document.getElementById("show-user")
    todoForm = document.getElementById("todo-form")
    todoListContainer = document.getElementById("todo-list-container")
    showTodoListAdderModal = document.getElementById("show-todo-add-modal")
    closeTodoListAdderModal = document.getElementById("btn-close-add-todo")
    todoListAdderModal = document.getElementById("modal-add-todo")
    modal = new bootstrap.Modal(todoListAdderModal)
}

const initEvents = () => {
    todoForm.onsubmit = (event) => newTodoData(event)
    showTodoListAdderModal.onclick = showModalAddTodo
    closeTodoListAdderModal.onclick = closeModalAddTodo
    logout.onclick = logoutUser
}

const initViews = () => {
    showTodoList()
    showLoggedUser()
}

const logoutUser = () => {
    sessionStorage.removeItem('userId')
    window.location.href = '../index.html'
}

const newTodoData = async event => {
    event.preventDefault()
    let todoData
    let formTodoTitle = todoTitle.value
    let formTodoDescription = todoDescription.value
    let userId = sessionStorage.getItem("userId")
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let todoSetDate = `${day}-${month}-${year}`

    todoData = JSON.stringify({
        "userid": parseInt(userId, 10),
        "title": formTodoTitle,
        "description": formTodoDescription,
        "date": todoSetDate,
        "state": "todo",
        "done_date": "",
        "serv_date": date,
    })

    await createNewTodo(todoData)
        .then((response) => {
            showConfirmMessage()
        })
        .then(() => {
            showTodoList()
        })
        .catch(err => console.error(err))
}

const createNewTodo = async todoData => {
    // console.log('Creando nuevo To Do....')
    let myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: todoData,
    }

    fetch("http://localhost:3000/todo", requestOptions)
        .then(response => response.text())
        .then(result => console.log('to do creado', result))
        .catch(error => console.error(error))
}

const showConfirmMessage = () => {
    Swal.fire(
        'To Do creado.',
        '',
        'success'
    )
    .then(() => {
        todoForm.reset()
        modal.hide()
    })
}

const showModalAddTodo = () => {
    modal.show()
}

const closeModalAddTodo = () => {
    modal.hide()
}

const showTodoList = async () => {
    const userId = sessionStorage.getItem("userId")
    if(!userId){
        console.log("Se debe logear para revisar las listas...")
        window.location.href = '../index.html'
    }

    const todoListByUser = await getTodoList(userId)
    // console.log("todoListByUser", todoListByUser)

    if(todoListByUser.length > 0){
        createTodoList(todoListByUser)
    }
}

const showLoggedUser = async () => {
    const userId = sessionStorage.getItem("userId")
    if(!userId){
        window.location.href = '../index.html'
    }
    const userData = await getUserInfo(userId)
    showUser.innerHTML += ` ${userData[0].username}`
}

const getTodoList = async userId => {
    let todoList
    try{
        response = await fetch(`http://localhost:3000/todo?userid=${userId}&_sort=serv_date&_order=desc`, {
            method: 'GET',
        })
        todoList = await response.json()
    } catch (error) {
        console.error(error)
    }

    return todoList
}

const getUserInfo = async userId => {
    let userData
    try{
        response = await fetch(`http://localhost:3000/users?id=${userId}`, {
            method: 'GET',
        })
        userData = await response.json()
    } catch (error) {
        console.error(error)
    }

    return userData
}

const createTodoList = todoListByUser => {
    todoListContainer.innerHTML = ""
    for (const todoElement of todoListByUser) {
        // console.log("todoElement", todoElement)
        let isDone = ''
        let colorDone = 'todo'
        let actionButtons = `<div class="d-flex ms-auto">
                <button class="border-0 btn-transition btn btn-outline-success" id="todo-done-${todoElement.id}">${checkIconDone}</button>
                <button class="border-0 btn-transition btn btn-outline-danger" id="todo-delete-${todoElement.id}">${trashIcon}</button>
            </div>`

        if(todoElement.state === 'done'){
            isDone = `${checkIcon} Terminada el ${todoElement.done_date}`
            actionButtons = ''
            colorDone = 'done'
        }

        const div = document.createElement("div")
        div.id = `todo-${todoElement.id}`
        div.classList.add('card-body','d-flex','flex-row', 'align-items-center', 'flex-0', 'border', 'rounded-2', colorDone)
        div.innerHTML = `
            <div class="d-block">
                <div class="h6 fw-normal text-gray mb-2"><strong>${todoElement.title}</strong></div>
                <div class="small mt-2">
                    <small class="d-block text-muted">
                        ${todoElement.description}
                    </small>
                    <small class="d-block text-muted">
                        ${isDone}
                    </small>
                    <small class="d-block text-muted">
                        ${calendarIcon}
                        Creada el ${todoElement.date}
                    </small>
                </div>
            </div>
            ${actionButtons}`

        todoListContainer.append(div)
        if(actionButtons !== ''){
            let doneButton = document.getElementById(`todo-done-${todoElement.id}`)
            let deleteButton = document.getElementById(`todo-delete-${todoElement.id}`)
            doneButton.onclick = () => updateTodoElement(todoElement.id)
            deleteButton.onclick = () => deleteTodoElement(todoElement.id)    
        }
    }
}

const deleteTodoElement = todoId => {
    Swal.fire({
        icon: "question",
        title: "¿Está seguro que quiere eliminar esta tarea?",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            const elementToDelete = document.getElementById(`todo-${todoId}`)
            deleteTodoApi(todoId)
            elementToDelete.remove()        
        }
    })
}

const deleteTodoApi = async todoId => {
    const requestOptions = {
        method: 'DELETE',
    }

    fetch(`http://localhost:3000/todo/${todoId}`, requestOptions)
        .then(response => console.log(response))
        .catch(error => console.log('error', error))
}

const updateTodoElement = todoId => {
    Swal.fire({
        icon: "question",
        title: "¿Está seguro que quiere terminar esta tarea?",
        showCancelButton: true,
        confirmButtonText: "Finalizar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            updateTodoApi(todoId)
            showTodoList()
        }
    })
}

const updateTodoApi = async todoId => {
    let myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let todoSetDate = `${day}-${month}-${year}`

    let raw = JSON.stringify({
        "state": "done",
        "done_date": todoSetDate,
    })
    
    let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw
    }
    
    fetch(`http://localhost:3000/todo/${todoId}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
}

const main = () => {
    initElements()
    initEvents()
    initViews()
}

main()
