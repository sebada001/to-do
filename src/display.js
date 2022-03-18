import { taskArrayUpdate, blackOn, blackOff, returnTasks } from "./newTask.js";
import { tasksColorGrey, tasksColorBlack } from "./projList.js";
import { clearProjects, storeProjects} from "./localStorage.js";
import { returnProjArray } from './newProj.js'

function thisPlay(taskInput){
    const container = document.querySelector(".tasks-container");
    const toAdd = taskInput;
    const idThis = toAdd.id;
    const complete = toAdd.completeStatus;
    const taskLeft = document.createElement('div');
    const taskRight = document.createElement('div');
    const dateRight = document.createElement('div');
    const projRight = document.createElement('div');
    const taskDiv = document.createElement('div');
    const deleteTask = document.createElement('div');
    const counter = toAdd.counter;
    const taskDateDisplay = toAdd.dueDate;
    taskDiv.classList.add("task");
    taskLeft.classList.add("task-left");
    taskLeft.setAttribute('id', toAdd.id);
    taskRight.classList.add("task-right");
    taskLeft.textContent = toAdd.title;
    const projectFam = toAdd.projectFamily; 
    let family = toAdd.projectFamily.split("-"); 
        family.shift(); 
        family.pop(); 
        let displayFamily = family.join(' ');
    dateRight.textContent = taskDateDisplay;
    projRight.textContent = displayFamily;
    deleteTask.textContent = "X"
    taskLeft.classList.add(`${toAdd.priority}-task`);
    deleteTask.classList.add('delete-task');
    projRight.classList.add('proj-limit');
    taskRight.append(dateRight, projRight, deleteTask);
    taskDiv.append(taskLeft, taskRight);
    taskLeft.style.color = "black";
    taskLeft.addEventListener('click', (e)=> {
        taskInfo(e, displayFamily, counter, idThis, complete);
    });
    deleteTask.addEventListener('click', (e)=>{
        deleterFunction(e, idThis, projectFam);
    });
    container.appendChild(taskDiv);
    if(complete == true){
        taskLeft.classList.add("grey-done");
        greyOut(taskLeft);
        tasksColorGrey(idThis)
        console.log(idThis)
    };
    
};

function deleterFunction(e, id, fam){
    e.target.parentNode.parentNode.remove();
    const tasks = returnTasks();
    for( let i = 0; i < tasks.length; i++){ 
        if ( tasks[i].id === id) { 
            tasks.splice(i, 1); 
        };
    };
    const projDisplayContainer = document.querySelector(`.${fam}`);
    const tasksInDisplay = [...projDisplayContainer.querySelectorAll("li")];
    for(let task of tasksInDisplay){
        if ( task.id === id) { 
            task.remove(); 
        };
    }
};

function toggleCompleteStatus(id){
    const tasks = returnTasks();
    const match = tasks.find(task => task.id === id);
    let b00l = false;
    if(match.completeStatus == false){
        match.completeStatus = true;
        b00l = true;
    } else{
        match.completeStatus = false;
        b00l = false;
    };
    const allProjects = returnProjArray();
    for(let i = 0; i< allProjects.length; i++){
        for(let j = 0; j < allProjects[i].projTasks.length; j++){
            if(allProjects[i].projTasks.find(task => task.id === id)){
                allProjects[i].projTasks.find(task => task.id === id).completeStatus = b00l;
            };
        };
    };
};

function opTaskInfo(w){
    w.style.display = "flex";
};

function closeTaskInfo(w){
    w.style.display = "none";
};

function matchTaskById(id, allTasks){
    const match = allTasks.find(task => task.id === id);
    return match;
}

function taskInfo(ev, fam, counter, id, complete){
    const allTasks = returnTasks();
    const thisTaskInGeneralArray = matchTaskById(id, allTasks);
    const window = document.querySelector(`#c${counter}`);
    const closeButton = window.querySelector(".close-button-c");
    const completeButton = window.querySelector(".complete-button-c");
    const taskTitleDOM = window.querySelector(".task-title-c");
    const taskFamilyDOM = window.querySelector(".task-project-c");
    const descriptionDOM = window.querySelector(".description-container");

    taskTitleDOM.innerText = ev.target.textContent;
    taskFamilyDOM.innerText = fam;
    descriptionDOM.innerText = thisTaskInGeneralArray.description;

    let completeStat = complete;

    if(complete){
        completeButton.classList.add("toggle");
        completeButton.textContent = "Complete";
        completeStat = true;
        
    }else{
        completeButton.classList.remove("toggle");
        completeButton.textContent = "Mark as complete";
        completeStat = false;
        
    }

    opTaskInfo(window);
    blackOn();
    closeButton.addEventListener('click', ()=>{
        blackOff();
        closeTaskInfo(window);
        thisTaskInGeneralArray.description = descriptionDOM.value;
        // thisTaskInGeneralArray.completeStatus = completeStat;
        closeButton.replaceWith(closeButton.cloneNode(true));  //remove event listeners
        completeButton.replaceWith(completeButton.cloneNode(true));
        clearProjects();
        storeProjects();  
    });
    completeButton.addEventListener('click', (e)=>{
        toggleButton(e, ev);
        toggleCompleteStatus(id);
    });
};

function toggleButton(e, ev){
    if(e.target.textContent == "Mark as complete"){
        e.target.textContent = "Complete";
        e.target.classList.add("toggle");
        greyOut(ev);
    }else{
        e.target.classList.remove("toggle");
        e.target.textContent = "Mark as complete";
        greyOut(ev);
    }
};

function greyOut(e){
    if(e.target != null){
    if(e.target.style.color == "black"){
        e.target.style.color = "grey";
        e.target.parentNode.style.color = "grey";
        e.target.classList.add("grey-done");
        tasksColorGrey(e.target.id);
        
    }else{
        e.target.style.color = "black";
        e.target.parentNode.style.color = "black";
        e.target.classList.remove("grey-done");
        tasksColorBlack(e.target.id);
    };}
    else{ //conditional for different targeting without event, same function
        if(e.style.color == "black"){
            e.style.color = "grey";
            e.parentNode.style.color = "grey";
            e.classList.add("grey-done");
            
        }else{
            e.style.color = "black";
            e.parentNode.style.color = "black";
            e.classList.remove("grey-done");
        };
    };
};

function latestTask(){
    const taskArray = taskArrayUpdate();
    let latestTask = taskArray[taskArray.length-1];
    return latestTask;
};


export {thisPlay, deleterFunction, matchTaskById, toggleCompleteStatus}