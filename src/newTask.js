import {selectorOfProject, updateProjectList} from './projList.js';
import thisPlay from './display.js';

const taskArray = [];
let updatedArray = [];

const TaskFactory = (family) =>{
    const title = document.querySelector("#name").value;
    const description = document.querySelector("#description").textContent;
    const dueDate = document.querySelector("#due-date").value;
    const priority = document.querySelector('input[name="prio"]:checked').value; //selected checked value from radio
    const projectFamily = family;
    return {title, description, priority, dueDate, projectFamily}
};

const newTask = function(){
    const popUpTaskScreen = document.querySelector(".pop-up-task");
    const blackoutScreen = document.querySelector(".blackout");
    const confirmButton = document.querySelector(".confirm");  
    const openPopUpButton = document.querySelector(".add-task-button");
    const selectWindow = document.querySelector("#proj-names");
    openPopUpButton.addEventListener('click',  ()=> {
        popUp(popUpTaskScreen, blackoutScreen);
        updateProjectList(selectWindow);
    });
    confirmButton.addEventListener('click', ()=>{
        taskAdd(selectWindow);
        popDown(popUpTaskScreen,blackoutScreen);
    });
    
};

const popDown = function(popUpSc, blackoutSc){
    popUpSc.style.display = "none";
    blackoutSc.style.display = "none";
};
const popUp = function(popUpSc, blackoutSc){
    popUpSc.style.display = "flex";
    blackoutSc.style.display = "block";
};

const taskAdd = function(selectWindow){
    const obj = selectorOfProject();
    const ulClass = obj.projectClassArray;
    const thisClass = ulClass[selectWindow.selectedIndex].className;
    const task = TaskFactory(thisClass);
    taskArray.push(task);
    const projectCapsule = document.querySelector(`.${thisClass}`);
    const taskCapsule = document.createElement("li");
    taskCapsule.classList.add(`${task.priority}`);
    taskCapsule.classList.add(`${task.projectFamily}`);
    taskCapsule.textContent = task.title;
    projectCapsule.appendChild(taskCapsule);
    thisPlay();
};


const taskArrayUpdate = function(){
    updatedArray = taskArray;
    return updatedArray;
}


export {newTask, taskArrayUpdate}