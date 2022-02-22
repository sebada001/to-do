

const TaskFactory = (title, description, priority, dueDate, projectFamily) =>{
    let prio = "";
    if(priority == "urgent") {prio = "urgent" } else if(priority == "relax"){prio = "relax"} else{prio = "medium"};
    return {title, description, prio, dueDate, projectFamily}
};

export default function newTask(){
    const popUpTask = document.querySelector(".pop-up-task");
    const blackout = document.querySelector(".blackout");
    const confirm = document.querySelector(".confirm");  
    const butt = document.querySelector(".add-task-button");
    butt.addEventListener('click',  ()=> {
        popUp(popUpTask, blackout);
        selectorOfProject();
    });
    confirm.addEventListener('click', ()=>{
        TaskAdd();
        popUpTask.style.display = "none";
        blackout.style.display = "none";
    });
}

const popUp = function(popUp, blackout){
    popUp.style.display = "flex";
    blackout.style.display = "block";
}

const TaskAdd = function(){
    const projectCapsule = document.querySelector(".Work-ul");
    // const obj = selectorOfProject();
    // const ulClass = obj.projectClassArray;
    // const projectsNames = obj.projectNameArray;
    const userTitle = document.querySelector("#name").value;
    const userDescrip = document.querySelector("#description").textContent;
    const userDate = document.querySelector("#due-date").value;
    const userPrio = document.querySelector('input[name="prio"]:checked').value; //selected checked value from radio
    const task = TaskFactory(userTitle, userDescrip, userPrio, userDate, ".Work-ul");
    const taskCapsule = document.createElement("li");
    taskCapsule.classList.add(`${task.prio}`);
    taskCapsule.textContent = task.title;
    projectCapsule.appendChild(taskCapsule);
}

const selectorOfProject = function(){
    const parent = document.querySelector(".projects-ul");
    let availableProjectsLi = parent.children;
    const projectsArray = [].slice.call(availableProjectsLi); //html collection to array
    const projectClassArray = projectsArray.map(function(e){
        return e.firstElementChild; //get ul class of projects to insert tasks into 
    }); 
    const projectNameArray = projectsArray.map(function(e){
        return e.firstChild.textContent; //get name of projects to insert tasks into
    });
    return{projectClassArray, projectNameArray}; 
}


