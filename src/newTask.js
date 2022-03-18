import {updateProjectList, taskToProjectList, projectDisplay} from './projList.js';
import {thisPlay} from './display.js';
import {projectList} from './newProj.js';
import { clearProjects, storeProjects } from './localStorage.js';


const taskArray = [];
let updatedArray = [];
let counter = 0;

function counterAdd(){
    counter += 1;
}

const TaskFactory = (family, complete) =>{
    counterAdd();
    let titleCheck = "";
    if(document.querySelector("#name").value == ""){
        titleCheck = "Unnamed Task";
    }else{
        titleCheck = document.querySelector("#name").value;
    };
    const title = checkForRepeatedTaskName(titleCheck);
    const description = document.querySelector("#description").value;
    const userDate = new Date(document.querySelector("#due-date").value); //
    const dateISO = userDate.toISOString()
    const dueDate = dateISO.substr(0, 10);
    const priority = document.querySelector('input[name="prio"]:checked').value; //selected checked value from radio
    const projectFamily = family;
    const id = `${title}+${priority[0]}`;
    
    let completeStatus = false;
    if(complete != undefined){
        completeStatus = complete;
    };
    eachTaskWindow(counter);
    return {title, description, priority, dueDate, projectFamily, id, counter, completeStatus}
};
function eachTaskWindow(counter){
    const before = document.querySelector(".pop-up-task");
    const parent = document.querySelector(".container");
    const htmlSkel =
            `   <button class="close-button-c">X</button>
                <div class="comments-titles-c"><span class="task-title-c">Example</span>  <span class="task-project-c"> Proj</span> </div>
                <div class="comments">
                    <p> Description: </p>
                    <textarea class="description-container">  </textarea>
                </div>
                <button class="complete-button-c">Mark as complete</button>`;
    const newWindow = document.createElement("div");
    newWindow.classList.add("pop-up-comments")
    newWindow.id = "c"+counter
    newWindow.innerHTML = htmlSkel;
    parent.insertBefore(newWindow, before);
};

const taskAdd = function(selectWindow, popUpTaskScreen){
    const projectsData = projectDisplay(selectWindow);
    const thisClass = projectsData.thisClass;
    const task = TaskFactory(thisClass);
    const thisProj = projectsData.thisProject;
    thisProj.projTasks.push(task)
    taskArray.push(task);
    taskToProjectList(projectsData, task);
    thisPlay(task);
    clearProjects();
    storeProjects();
    popDown(popUpTaskScreen);
};
let count = 0;
const checkForRepeatedTaskName = function(toCheck){
    let boolean = false;
    for(let task of taskArray){
        if(task.title ==toCheck){
            boolean = true;
            count ++;
        };
    };
    if(boolean == true){
        return toCheck + count;
    }else{
        return toCheck;
    }
};

const newTask = function(){
    const popUpTaskScreen = document.querySelector(".pop-up-task");
    const confirmButton = document.querySelector(".confirm");  
    const openPopUpButton = document.querySelector(".add-task-button");
    const selectWindow = document.querySelector("#proj-names");
    openPopUpButton.addEventListener('click',  ()=> {
        document.querySelector("#name").value = "New Task";
        popUp(popUpTaskScreen);
        updateProjectList(selectWindow);
    });
    confirmButton.addEventListener('click', ()=>{
        taskAdd(selectWindow, popUpTaskScreen);
    });
    document.addEventListener('keydown', (e)=>{
        if (e.code === "Enter" && popUpTaskScreen.style.display == "flex" ) {
            confirmButton.click()
        };
    });
};

const blackOff = function(){
    const blackoutSc = document.querySelector(".blackout");
    blackoutSc.style.display = "none";
}

const blackOn = function(){
    const blackoutSc = document.querySelector(".blackout");
    blackoutSc.style.display = "block";
}

const popDown = function(popUpSc){
    popUpSc.style.display = "none";
    blackOff();
};
const popUp = function(popUpSc){
    popUpSc.style.display = "flex";
    blackOn();
    let nameArea = document.getElementById('name');
    nameArea.focus();
};

const taskArrayUpdate = function(){
    updatedArray = taskArray;
    return updatedArray;
};

const returnTasks = function(){
    return taskArray;
}


export {newTask, taskArrayUpdate, returnTasks, blackOn, blackOff, TaskFactory, eachTaskWindow, counter, counterAdd}