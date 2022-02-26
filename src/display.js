
import { taskArrayUpdate } from "./newTask";
import { removeAllChildNodes } from "./projList";

export default function thisPlay(){
    const container = document.querySelector(".tasks-container");
    removeAllChildNodes(container);
    const allTasks = arrayOfTasks();
    console.log(allTasks);
    if(allTasks.length > 0){
        for(let eachTask of allTasks){
            const taskLeft = document.createElement('div');
            const taskRight = document.createElement('div');
            const taskDiv = document.createElement('div');
            taskDiv.classList.add("task");
            taskLeft.classList.add("task-left");
            taskRight.classList.add("task-right");
            taskLeft.textContent = eachTask.title;
            let family = eachTask.projectFamily.split("-"); family.shift(); family.pop(); let displayFamily = family.join(' '); //removes extras from class name
            taskRight.textContent = `${eachTask.dueDate}\u00A0\u00A0\u00A0\u00A0${displayFamily}`
            taskLeft.classList.add(`${eachTask.priority}-task`);
            taskDiv.append(taskLeft, taskRight);
            container.appendChild(taskDiv);
            //{title, description, priority, dueDate, projectFamily}
        };
    };
};

function arrayOfTasks(){
    const taskArray = taskArrayUpdate();
    return taskArray
}



// `<div class="display">
// <h2 class="display-title">Today</h2>
// <div class="tasks-container">
//   <div class="task">
//     <div class="task-left urgent-task">Drink coffee</div>
//     <div class="task-right">Personal</div>
//   </div>
//   <div class="task">
//     <div class="task-left medium-task">Get hired</div>
//     <div class="task-right">Work</div>
//   </div>
// </div>
// <div class="add-task-container">
//   <div class="add-task-left">
//     <button class="add-task-button">+</button>
//     <h4>Add task</h4>
//   </div>
// </div>
// </div>`