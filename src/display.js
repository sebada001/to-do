
import { taskArrayUpdate } from "./newTask";
import { removeAllChildNodes } from "./projList";

export default function thisPlay(){
    const container = document.querySelector(".tasks-container");
    // removeAllChildNodes(container);
    const toAdd = latestTask();
            const taskLeft = document.createElement('div');
            const taskRight = document.createElement('div');
            const taskDiv = document.createElement('div');
            const taskDateArray = toAdd.dueDate.toString().split(" ").slice(0, 4);
            const taskDateDisplay = taskDateArray.join(" ");
            console.log(taskDateDisplay);
            taskDiv.classList.add("task");
            taskLeft.classList.add("task-left");
            taskRight.classList.add("task-right");
            taskLeft.textContent = toAdd.title;
            let family = toAdd.projectFamily.split("-"); family.shift(); family.pop(); let displayFamily = family.join(' '); //removes extras from class name
            taskRight.textContent = `${taskDateDisplay}\u00A0\u00A0\u00A0\u00A0${displayFamily}`
            taskLeft.classList.add(`${toAdd.priority}-task`);
            taskDiv.append(taskLeft, taskRight);
            taskLeft.style.color = "black";
            taskLeft.addEventListener('click', (e)=> {
                    greyOut(e);
            });
            container.appendChild(taskDiv);
            //{title, description, priority, dueDate, projectFamily}
};

function greyOut(e){
    if(e.target.style.color == "black"){
        e.target.style.color = "grey";
        e.target.parentNode.style.color = "grey";
        e.target.classList.add("grey-done");
    }else{
        e.target.style.color = "black";
        e.target.parentNode.style.color = "black";
        e.target.classList.remove("grey-done");
    };
}


function latestTask(){
    const taskArray = taskArrayUpdate();
    let latestTask = taskArray[taskArray.length-1];
    return latestTask;
}


