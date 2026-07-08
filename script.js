const TodoList = [];

renderElements();

function renderElements() {
    let todoListHTML = '';

    for(let i = 0; i < TodoList.length; i++){
        const todoObject = TodoList[i];
        const {name, dueDate, dueTime} = todoObject;
        const html = 
        `<div>${name}</div>
        <div>${dueDate}</div>
        <div>${dueTime}</div>
        <div>
            <button class = "delete-button" onclick="
                TodoList.splice(${i}, 1);
                renderElements();
                ">
            Delete</button>
        </div>`;
        todoListHTML += html;
    }

    document.querySelector('.todo-list-div')
        .innerHTML = todoListHTML;

}
function addTodo() {

    const name = document.querySelector('.input-task').value;
    const dueDate = document.querySelector('.input-date').value;
    const dueTime = document.querySelector('.input-time-js').value

    
    TodoList.push({
        name,
        dueDate, 
        dueTime
    });

    document.querySelector('.input-task').value = '';
    document.querySelector('.input-date').value = '';
    document.querySelector('.input-time-js').value = '';
    renderElements();
} 
