
import { taskArrayUpdate, blackOn, blackOff } from "./newTask";
import { tasksColorGrey, tasksColorBlack } from "./projList";

export default function thisPlay(taskInput){
    const container = document.querySelector(".tasks-container");
    const toAdd = taskInput;
    const idThis = toAdd.id;
    const taskLeft = document.createElement('div');
    const taskRight = document.createElement('div');
    const dateRight = document.createElement('div');
    const projRight = document.createElement('div');
    const taskDiv = document.createElement('div');
    const counter = toAdd.counter;
    const taskDateDisplay = toAdd.dueDate;
    const description = toAdd.description;
    taskDiv.classList.add("task");
    taskLeft.classList.add("task-left");
    taskLeft.setAttribute('id', toAdd.id);
    taskRight.classList.add("task-right");
    taskLeft.textContent = toAdd.title;
    let family = toAdd.projectFamily.split("-"); 
        family.shift(); 
        family.pop(); 
        let displayFamily = family.join(' ');
    dateRight.textContent = taskDateDisplay;
    projRight.textContent = displayFamily;
    taskLeft.classList.add(`${toAdd.priority}-task`);
    taskRight.append(dateRight, projRight);
    taskDiv.append(taskLeft, taskRight);
    taskLeft.style.color = "black";
    taskLeft.addEventListener('click', (e)=> {
            taskInfo(e, displayFamily, findDescription(idThis), counter);
    });
    container.appendChild(taskDiv);
};

function findDescription(id){
    const tasks = taskArrayUpdate();
    const match = tasks.find(task => task.id === id);
    return match.description;
}

function opTaskInfo(w){
    w.style.display = "flex";
};

function closeTaskInfo(w){
    w.style.display = "none";
};

function createWindow(){

};

function taskInfo(ev, fam, description, counter){
    const window = document.querySelector(`#c${counter}`);
    const closeButton = window.querySelector(".close-button-c");
    const completeButton = window.querySelector(".complete-button-c");
    const taskTitleDOM = window.querySelector(".task-title-c");
    const taskFamilyDOM = window.querySelector(".task-project-c");
    const descriptionDOM = window.querySelector(".description-container");
    taskTitleDOM.innerText = ev.target.textContent;
    taskFamilyDOM.innerText = fam;
    descriptionDOM.innerText = description;

    if(ev.target.classList.contains("grey-done")){
        completeButton.classList.add("toggle");
        completeButton.textContent = "Complete";
    }else{
        completeButton.classList.remove("toggle");
        completeButton.textContent = "Mark as complete";
    }

    opTaskInfo(window);
    blackOn();
    closeButton.addEventListener('click', ()=>{
        blackOff();
        closeTaskInfo(window);
        closeButton.replaceWith(closeButton.cloneNode(true));  //remove event listeners
        completeButton.replaceWith(completeButton.cloneNode(true));  
    });
    completeButton.addEventListener('click', (e)=>{
        toggleButton(e, ev);
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
    };
};

function latestTask(){
    const taskArray = taskArrayUpdate();
    let latestTask = taskArray[taskArray.length-1];
    return latestTask;
};


