document.getElementById('add-btn').addEventListener('click', addTodo);
document.getElementById('todo-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');
        
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            todoItem.remove();
        });

        todoItem.addEventListener('click', function() {
            todoItem.classList.toggle('completed');
        });

        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);

        todoInput.value = '';
    }
}
