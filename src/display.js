
import { taskArrayUpdate, blackOn, blackOff } from "./newTask";
import { tasksColorGrey, tasksColorBlack } from "./projList";



export default function thisPlay(){
    const container = document.querySelector(".tasks-container");
    const toAdd = latestTask();
    const taskLeft = document.createElement('div');
    const taskRight = document.createElement('div');
    const taskDiv = document.createElement('div');
    const taskDateArray = toAdd.dueDate.toString().split(" ").slice(0, 4);
    const taskDateDisplay = taskDateArray.join(" ");
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
    taskRight.textContent = `${taskDateDisplay}\u00A0\u00A0\u00A0\u00A0${displayFamily}`
    taskLeft.classList.add(`${toAdd.priority}-task`);
    taskDiv.append(taskLeft, taskRight);
    taskLeft.style.color = "black";
    taskLeft.addEventListener('click', (e)=> {
            taskInfo(e, displayFamily, description);
    });
    container.appendChild(taskDiv);
};

function opTaskInfo(w){
    w.style.display = "flex";
};

function closeTaskInfo(w){
    w.style.display = "none";
};


function taskInfo(ev, fam, description){
    const closeButton = document.querySelector("#close-button");
    const completeButton = document.querySelector("#complete-button");
    const window = document.querySelector(".pop-up-comments");
    const taskTitleDOM = document.querySelector("#task-title-c");
    const taskFamilyDOM = document.querySelector("#task-project-c");
    const descriptionDOM = document.querySelector("#description-container");
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
}


function latestTask(){
    const taskArray = taskArrayUpdate();
    let latestTask = taskArray[taskArray.length-1];
    return latestTask;
}


