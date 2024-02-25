const addNotesButton = document.getElementById('add-note-button');
// const textArea = document.getElementById()
const noteContainer = document.querySelector('.container');


addNotesButton.addEventListener('click', function(){
    // console.log('clicked');
    const noteContainerDiv = document.createElement('div');
    noteContainerDiv.classList.add('note-container');

    const textAreaDiv = document.createElement('div');
    const textArea = document.createElement('textarea');

    const iconDiv = document.createElement('div');
    const editIcon = document.createElement('a');
    editIcon.innerText = 'Edit Icon ';
    editIcon.setAttribute('href', '');

    editIcon.addEventListener('click', function(e){
        e.preventDefault();
        if(textArea.hasAttribute('disabled')){
            textArea.removeAttribute('disabled')
        }else{
            textArea.setAttribute('disabled', '')
        }
    })

    const deleteIcon = document.createElement('a');
    deleteIcon.innerText = 'Delete Icon';
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