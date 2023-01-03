const inputTag = document.querySelector(".input-todo")
const addBtn = document.querySelector(".add-Todo")
const todoList = document.querySelector(".todo-list")

inputTag.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        addTodo()
    }
})
addBtn.addEventListener("click", addTodo)

function addTodo(e) {
    let inputValue = inputTag.value
    if (!inputValue) {
        return
    }
    inputTag.value = ""
    // console.log(inputValue)
    createTodoItem(inputValue)
}
function createTodoItem(text) {
    let todoDiv = document.createElement("div")
    todoDiv.classList.add("todo-item")

    let pTag = document.createElement("p")
    pTag.classList.add("input-text")
    pTag.textContent = text

    let btnTag = document.createElement("button")
    btnTag.classList.add("delete-todo")
    btnTag.textContent = "delete"
    btnTag.addEventListener("click", (e) => {
        e.target.parentNode.remove()
    })
    todoDiv.appendChild(pTag)
    todoDiv.appendChild(btnTag)
    todoList.appendChild(todoDiv)
}
