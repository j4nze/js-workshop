document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    function addTask(taskText) {
        const tr = document.createElement('tr');

        const tdTask = document.createElement('td');
        tdTask.classList.add('task');
        tdTask.textContent = taskText;

        const tdActions = document.createElement('td');
        tdActions.classList.add('actions');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.onclick = () => {
            const newTaskText = window.prompt('Edit your task:', tdTask.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                tdTask.textContent = newTaskText.trim();
            }
        };

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');
        removeButton.onclick = () => {
            taskList.removeChild(tr);
        };

        tdActions.appendChild(editButton);
        tdActions.appendChild(removeButton);

        tr.appendChild(tdTask);
        tr.appendChild(tdActions);
        taskList.appendChild(tr);
    }

    function handleAddTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        addTask(taskText);
        taskInput.value = '';
    }

    addButton.addEventListener('click', handleAddTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    });
});
