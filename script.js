const toDoInput = document.querySelector('.work-area_todo-input')
const toDoBtn = document.querySelector('.work-area_todo-button')
const tasksArea = document.querySelector('.tasks-area_task')

toDoBtn.addEventListener('click', addToDo)

function addToDo () {
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('taska')

    const taska = document.createElement('li')
    if (toDoInput.value === '') {
        alert('Write your task.')
    } else {
        taska.innerText = toDoInput.value
        taskDiv.appendChild(taska)

        const doneBtn = document.createElement('button')
        doneBtn.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><title>check_line</title><g id='check_line' fill='none' fill-rule='evenodd'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='#FFFFFFFF' d='M21.192 5.465a1 1 0 0 1 0 1.414L9.95 18.122a1.1 1.1 0 0 1-1.556 0l-5.586-5.586a1 1 0 1 1 1.415-1.415l4.95 4.95L19.777 5.465a1 1 0 0 1 1.414 0Z'/></g></svg>"
        doneBtn.classList.add('tasks-area_done-button')
        taskDiv.appendChild(doneBtn)

        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = '<svg width="22px" height="22px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>trash-solid</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M43,8.8a2.3,2.3,0,0,1-.6,1.6A1.7,1.7,0,0,1,41,11H7.1A2.1,2.1,0,0,1,5,9.2a2.3,2.3,0,0,1,.6-1.6A1.7,1.7,0,0,1,7,7H17V5a2,2,0,0,1,2-2H29a2,2,0,0,1,2,2V7h9.9A2.1,2.1,0,0,1,43,8.8Z"></path> <path d="M11.2,15h0a2,2,0,0,0-2,2.2l2.6,26a2,2,0,0,0,2,1.8H34.2a2,2,0,0,0,2-1.8l2.6-26a2,2,0,0,0-2-2.2H11.2Z"></path> </g> </g> </g></svg>'
        deleteBtn.classList.add('tasks-area_delete-button')
        taskDiv.appendChild(deleteBtn)


        tasksArea.insertBefore(taskDiv, tasksArea.firstChild)

        toDoInput.value = ''
    }
}

tasksArea.onclick = function doneAndDelete (event) {
    let target = event.target

    let doneBtn = target.closest('.tasks-area_done-button');
    if (doneBtn) {
        let taskaText = doneBtn.parentElement.querySelector('li');
        taskaText.classList.toggle('strikethrough');
    }

    let deleteBtn = target.closest('.tasks-area_delete-button');
    if (deleteBtn) {
        deleteBtn.parentElement.remove();
    }
}