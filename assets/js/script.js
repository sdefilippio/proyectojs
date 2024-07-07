let tasks = [
    { id: 1, description: "Tarea inicial 1", completed: false },
    { id: 2, description: "Tarea inicial 2", completed: false },
    { id: 3, description: "Tarea inicial 3", completed: false }
];
let nextId = 4;

document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const totalTasks = document.getElementById('total-tasks');
    const completedTasks = document.getElementById('completed-tasks');
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');

    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.className = task.completed ? 'completed' : '';
            taskItem.innerHTML = `
                <span class="task-id">ID ${task.id}</span>
                <span class="task-description">${task.description}</span>
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
                <button class="delete-button" onclick="deleteTask(${task.id})">Eliminar</button>
            `;
            taskList.appendChild(taskItem);
        });
        totalTasks.textContent = tasks.length;
        completedTasks.textContent = tasks.filter(task => task.completed).length;
    };

    window.toggleTask = (id) => {
        const task = tasks.find(task => task.id === id);
        task.completed = !task.completed;
        renderTasks();
    };

    window.deleteTask = (id) => {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    };

    addTaskButton.addEventListener('click', () => {
        const newTaskDescription = newTaskInput.value.trim();
        if (newTaskDescription) {
            tasks.push({ id: nextId++, description: newTaskDescription, completed: false });
            newTaskInput.value = '';
            renderTasks();
        }
    });

    renderTasks();
});
