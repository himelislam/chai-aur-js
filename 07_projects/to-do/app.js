const task = document.getElementById('task');
const tasks = document.querySelector('.tasks')

document.addEventListener('keydown', function(e){
    // console.log(e.key);
    if(e.key === 'Enter'){
        const newTask = task.value;
        const newCreatedTask = document.createElement('li')
        newCreatedTask.innerHTML = newTask;
        newCreatedTask.classList = 'added-task';
        // newCreatedTask.classList('added-task')
        tasks.appendChild(newCreatedTask)
        console.log(newCreatedTask);
        console.log(tasks);

        console.log(task.value);
        task.value = '';
        console.log(tasks.ul);
    }
})

tasks.addEventListener('click', function(e){
    // console.log(e.srcElement);
    console.log(e);
})
