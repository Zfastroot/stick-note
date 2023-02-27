//Variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

//Event Listener for add Button

addTask.addEventListener('click',function(){
    let task =document.createElement('div');
    task.classList.add('task');

    let li=document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let chekButton = document.createElement('button');
    chekButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    chekButton.classList.add('checkTask');
    task.appendChild(chekButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === ""){
        alert("please enter a task !!!");
    }else{
        taskContainer.appendChild(task);
    } 
    inputTask.value = "";

    chekButton.addEventListener('click',function(){

        chekButton.parentElement.style.textDecoration = "line-through"
    
    });
    deleteButton.addEventListener('click',function(e){

        let target = e.target;

        target.parentElement.parentElement.remove();

    })

});


