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
    
        const addedtask = document.querySelector('ul')

        addedtask.addEventListener('click', function(e){
            console.log(e.target);
            if(e.target.classList.contains('clicked')){
                console.log('yes');
                e.target.classList = 'added-task'
            }else{
                console.log('no');
                e.target.classList = 'added-task clicked'
            }
        })

        addedtask.addEventListener('contextmenu', function(e){
            e.preventDefault()
            console.log(e.target.remove());
        })

        // addedTasks.forEach((task) => {
        //     task.addEventListener('click', function(e){
        //         // if(e.target.classList.contains('clicked')){
        //         //     console.log('yes');
        //         //     e.target.classList = 'added-task'
        //         // }else{
        //         //     console.log('no');
        //         //     e.target.classList = 'added-task clicked'
        //         // }
        //     })

        //     task.addEventListener('contextmenu', function(e){
        //         e.preventDefault()
        //         console.log(e.target.remove());
        //     })
        // })
    }
});





