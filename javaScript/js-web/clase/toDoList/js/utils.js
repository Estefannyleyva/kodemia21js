export const generateTasks = (task) => {
    const tasksList = document.querySelector('#list');
    tasksList.innerHTML += `
    <article>
        <h1>${task.title}</h1>
        <p>${task.description}</p>
        <button>✏</button>
        <button>🗑</button>
    </article>
    `
}