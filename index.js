<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TodoList - TP1</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <h1>Ma Liste des tâches</h1>

    <!-- Affiche la to do list -->
    <section>
        <ul id="task-list"></ul>
    </section>

    <!-- formulaire pour créer et/ou ajouter un élément dans la to do list -->
    <section>
        <form id="task-form">
            <input type="text" id="task-title" placeholder="Nouvelle tâche" required>
            <select id="task-priority">
                <option value="1">Priorité élevée</option>
                <option value="2">Priorité normale</option>
                <option value="3">Priorité basse</option>
            </select>
            <button type="submit">Ajouter une tâche</button>
        </form>
        <button id="delete-tasks">Supprimer les tâches sélectionnées</button>
    </section>

    <script src="js/main.js"></script>
</body>
</html>
