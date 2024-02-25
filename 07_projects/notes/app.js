const addNotesButton = document.getElementById('add-note-button');
const noteContainer = document.querySelector('.container');
const removeAllNotesButton = document.querySelector('#remove-button')


addNotesButton.addEventListener('click', function(){
    const noteContainerDiv = createHTML('div')
    noteContainerDiv.classList.add('note-container');

    const textAreaDiv = createHTML('div')
    const textArea = createHTML('textarea')

    const iconDiv = createHTML('div')
    const editIcon = createHTML('a')
    editIcon.innerText = 'Edit Note ';
    editIcon.setAttribute('href', '');

    editIcon.addEventListener('click', function(e){
        e.preventDefault();
        if(textArea.hasAttribute('disabled')){
            textArea.removeAttribute('disabled')
        }else{
            textArea.setAttribute('disabled', true)
        }
    })

    const deleteIcon = createHTML('a')
    deleteIcon.innerText = 'Delete Note';
    deleteIcon.setAttribute('href', '');

    deleteIcon.addEventListener('click', function(e){
        e.preventDefault()
        noteContainerDiv.remove()
    })

    iconDiv.appendChild(editIcon);
    iconDiv.appendChild(deleteIcon);

    noteContainerDiv.appendChild(iconDiv);

    textArea.setAttribute('cols', '30');
    textArea.setAttribute('rows', '10');


    textAreaDiv.appendChild(textArea);
    noteContainerDiv.appendChild(textAreaDiv);

    noteContainer.appendChild(noteContainerDiv)
})

function createHTML(tag){
    return document.createElement(tag);
}

removeAllNotesButton.addEventListener('click', function(){
    if(confirm('Are you sure, you want to remove all the notes?')){
        location.reload()
    }
})