document.addEventListener('DOMContentLoaded', () => {
    const newTaskForm = document.getElementById('new-task-form');
    const newTaskInput = document.getElementById('new-task-input');
    const tasksList = document.getElementById('tasks-list');

    newTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (newTaskInput.value.trim()) {
            const newTask = document.createElement('li');
            newTask.innerHTML = `<span class="task-name">${newTaskInput.value.trim()}</span>
            <button class="complete-btn">Completed</button>`;
            newTask.addEventListener('click', () => {
                newTask.querySelector('.task-name').classList.toggle('completed');
            });
            tasksList.appendChild(newTask);
            newTaskInput.value = '';
        }
    });
});