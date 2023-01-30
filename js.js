let button = document.querySelector(".btn")
let input = document.querySelector(".input_text")
let list = document.querySelector(".todo")
let lists = document.querySelector(".todo_text")
let todolist = [];
class todos{
    constructor(id, todo){
        this.todo = todo;
        this.id = id;
    }
}

button.addEventListener("click", (e) => {
    let id = Math.trunc(Math.random() * 3212312313212)
   const todo = new todos(id, input.value);
   todolist = [...todolist, todo];
   console.log(todo);
    console.log(todolist);
   showlist(todo.todo, todo.id);
});

if (localStorage.getItem("todos")) {
    todolist = JSON.parse(localStorage.getItem("todos"));
    todolist.forEach(({ todo, id }) => showlist(todo, id));
}
function removeFromLocalStorage(id) {
    todolist = todolist.filter(todo => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(todolist));
}
function showlist(todos, id){
        localStorage.setItem("todos", JSON.stringify(todolist));
        const node = document.createElement("span");
        const textnode = document.createTextNode(`${todos}`);
        node.classList.add("todo_text")
        node.setAttribute("data-id", `${id}`)
        node.appendChild(textnode);
        list.appendChild(node);
        const todosString = JSON.stringify(todolist);
        localStorage.setItem("todos", todosString);
        node.addEventListener('click', () => {
        removeFromLocalStorage(id);
        console.log(`deleted ${id}`)
        list.removeChild(node);
    })
};