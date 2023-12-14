
let inputTask = document.querySelector(".input1");
let button1 = document.querySelector(".button1");
let dynamic = document.querySelector(".dynamic");

 

 function addTasks(){
  let inputTaskValue = inputTask.value;
//Creating input Element for entered task
    if(inputTaskValue !== ""){

    let addTasksContainer =  document.createElement("div");
    addTasksContainer.classList.add("task-container") ;
    
    dynamic.appendChild(addTasksContainer);
      
    let action= document.createElement("input");
    action.classList.add("input2");
    action.type = "text";
    action.value = inputTaskValue;
    action.setAttribute("readonly","readonly");
    
    addTasksContainer.appendChild(action);
    //break element 1
    let breakElement1 = document.createElement("br");
    addTasksContainer.appendChild(breakElement1); 
    //creating Edit button
    let task_edit = document.createElement("button");
    task_edit.classList.add("edit-button");
    task_edit.textContent = "Edit";

    addTasksContainer.appendChild(task_edit);

    let deleteEl = document.createElement("button");
    deleteEl.classList.add("delete-button");
    deleteEl.textContent = "Delete";

    addTasksContainer.appendChild(deleteEl);

    //Editing the Input value

    task_edit.addEventListener("click",()=>{
        if(task_edit.textContent == "Edit"){
            action.removeAttribute("readonly");
            task_edit.textContent = "Save"
            action.focus();
        }else{
            action.setAttribute("readonly","readonly");
            task_edit.textContent="Edit";
        }
    });

    //Delet the task

    deleteEl.addEventListener("click",()=>{
        addTasksContainer.style.display = "none";
    });
    

    }
    else{
        alert("Please Entered Task") ;
        inputTask.focus();
    }

    

}

button1.addEventListener("click",addTasks);