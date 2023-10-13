document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById("task-list");
    const taskInput = document.getElementById("task");
    const statusSelect = document.getElementById("status");
    const addTaskButton = document.getElementById("add-task");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskStatus = statusSelect.value;
            const newTask = document.createElement("li");
            newTask.innerHTML = `
               
                <span>${taskText}</span>&nbsp;
                <span class="status">${taskStatus}</span>&nbsp;
                <button onclick="removeTask(this)">Delete</button>
            `;
            if (taskStatus === "Completed") {
                newTask.classList.add("completed");
            }
            taskList.appendChild(newTask);
            taskInput.value = "";
        }
    });
});

function removeTask(task) {
    task.parentNode.remove();
}
