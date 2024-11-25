// tâches initial
const tasks = [
    { title: "Apprendre mon cours de JavaScript", priority: 1 },
    { title: "Créer mon compte Github", priority: 2 },
    { title: "Répondre à mes emails", priority: 3 }
];

// chargement de la to do list en local grâce au localstorage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks.length = 0;
        tasks.push(...JSON.parse(savedTasks));
    }
}

// sauvegarde des tâches dans le localstorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// récupération des éléments html
const taskList = document.querySelector('#task-list');
const taskForm = document.querySelector('#task-form');
const taskTitle = document.querySelector('#task-title');
const taskPriority = document.querySelector('#task-priority');
const deleteTasksButton = document.querySelector('#delete-tasks');

// affichage des tâches
function displayTasks() {
    taskList.innerHTML = '';

    // Triage des tâches par priorité
    const sortedTasks = tasks.slice().sort((a, b) => a.priority - b.priority);

    // Pour chaque tâche, on crée un élément <li>
    sortedTasks.forEach((task, index) => {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.dataset.index = index;

        // Définition de la couleur en fonction de la priorité
        switch (task.priority) {
            case 1:
                label.classList.add('priority-high');
                break;
            case 2:
                label.classList.add('priority-normal');
                break;
            case 3:
                label.classList.add('priority-low');
                break;
        }

        label.appendChild(checkbox);
        label.append(` ${task.title}`);
        li.appendChild(label);
        taskList.appendChild(li);
    });
}

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const newTaskTitle = taskTitle.value.trim();
    const newTaskPriority = parseInt(taskPriority.value);

    if (newTaskTitle === '') {
        alert("Le nom de la tâche ne peut pas être vide !");
        return;
    }

    tasks.push({ title: newTaskTitle, priority: newTaskPriority });

    saveTasks();

    taskForm.reset();

    displayTasks();
});

deleteTasksButton.addEventListener('click', function() {
    const checkboxes = taskList.querySelectorAll('input[type="checkbox"]');
    let deletedCount = 0;

    const remainingTasks = tasks.filter((_, index) => {
        const checkbox = checkboxes[index];
        if (checkbox && checkbox.checked) {
            deletedCount++;
            return false;
        }
        return true;
    });

    tasks.length = 0;
    tasks.push(...remainingTasks);

    saveTasks();

    if (deletedCount > 0) {
        alert(`${deletedCount} tâche(s) supprimée(s) avec succès.`);
    }

    displayTasks();
});

loadTasks();
displayTasks();
