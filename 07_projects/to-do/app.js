const task = document.getElementById('task');
const tasks = document.querySelector('.tasks');

document.addEventListener('keydown', function (e) {
ß
    if (e.key === 'Enter') {

        // appending new task upon clicking the enter button
        const newTask = task.value;
        const newCreatedTask = document.createElement('li')
        newCreatedTask.innerHTML = newTask;
        newCreatedTask.classList = 'added-task';
        tasks.appendChild(newCreatedTask)
        task.value = '';


        // toggeling task with class names
        const addedtask = document.querySelector('ul')

        addedtask.addEventListener('click', function (e) {
            console.log(e.target);
            if (e.target.classList.contains('clicked')) {
                console.log('yes');
                e.target.classList = 'added-task'
            } else {
                console.log('no');
                e.target.classList = 'added-task clicked'
            }
        })

        // removing tasks with right button click or double tap.
        addedtask.addEventListener('contextmenu', function (e) {
            e.preventDefault()
            console.log(e.target.remove());
        })
    }
});






// previous approach
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

