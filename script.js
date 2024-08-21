document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    let editingTask = null;

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.onclick = () => {
            const newTaskText = window.prompt('Edit your task:', li.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                li.firstChild.textContent = newTaskText.trim();
                editingTask = null;
            }
        };

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');
        removeButton.onclick = () => {
            taskList.removeChild(li);
        };

        li.appendChild(editButton);
        li.appendChild(removeButton);
        taskList.appendChild(li);
    }

    function handleAddTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        if (editingTask) {
            editingTask.firstChild.textContent = taskText;
            taskInput.value = '';
            editingTask = null;
        } else {
            addTask(taskText);
            taskInput.value = '';
        }
    }

    addButton.addEventListener('click', handleAddTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    });
});
