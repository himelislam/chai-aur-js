const task = document.getElementById('task');
const tasks = document.querySelector('.tasks');

document.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        const newTask = task.value;
        const newCreatedTask = document.createElement('li')
        newCreatedTask.innerHTML = newTask;
        newCreatedTask.classList = 'added-task';
        tasks.appendChild(newCreatedTask)
        task.value = '';
    
        const addedTasks = document.querySelectorAll('ul li');

        addedTasks.forEach((task) => {
            task.addEventListener('click', function(e){
                e.target.classList = 'added-task clicked'
            })

            task.addEventListener('contextmenu', function(e){
                e.preventDefault()
                console.log(e.target.remove());
            })
        })

    }
});





