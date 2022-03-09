import {updateProjectList, taskToProjectList, projectDisplay} from './projList.js';
import thisPlay from './display.js';
import {projectList} from './newProj.js';

const taskArray = [];
let updatedArray = [];

const TaskFactory = (family) =>{
    let titleCheck = ""
    if(document.querySelector("#name").value == ""){
        titleCheck = "Unnamed Task";
    }else{
        titleCheck = document.querySelector("#name").value;
    };
    const title = checkForRepeatedTaskName(titleCheck);
    const description = document.querySelector("#description").value;
    const dueDate = new Date(document.querySelector("#due-date").value); //
    const priority = document.querySelector('input[name="prio"]:checked').value; //selected checked value from radio
    const projectFamily = family;
    const id = `${title}+${priority[0]}`;
    return {title, description, priority, dueDate, projectFamily, id}
};

const taskAdd = function(selectWindow){
    const projectsData = projectDisplay(selectWindow);
    const thisClass = projectsData.thisClass;
    const task = TaskFactory(thisClass);
    const thisProj = projectsData.thisProject;
    thisProj.projTasks.push(task)
    taskArray.push(task);
    taskToProjectList(projectsData, task);
    thisPlay();
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
        document.querySelector("#name").value = "New Project";
        popUp(popUpTaskScreen);
        updateProjectList(selectWindow);
    });
    confirmButton.addEventListener('click', ()=>{
        taskAdd(selectWindow);
        popDown(popUpTaskScreen);
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


export {newTask, taskArrayUpdate, returnTasks, blackOn, blackOff}