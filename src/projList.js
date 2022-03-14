import { returnTasks } from "./newTask";
import { projectList } from "./newProj";

const listOfProjects = function(){
    let list = projectList();
    let projectsNameArray = [];
    let projectsClassArray = [];
    for(let i = 0; i< list.length; i++){
        projectsNameArray.push(list[i].name);
        projectsClassArray.push(list[i].classTag);
    }
    return {list, projectsNameArray, projectsClassArray};
};

const tasksColorGrey = function(elId){
    const domList = tasksInProjs();
    for(let task of domList){
        if(task.id == elId){
        task.style.color = "grey";
        task.classList.add("grey-done");
    }};
};

const tasksColorBlack = function(elId){
    const domList = tasksInProjs();
    for(let task of domList){
        if(task.id == elId){
        task.style.color = "black";
        task.classList.remove("grey-done");
    }};
};

const tasksInProjs = function(){
    const tasksInProjs = document.querySelectorAll(".projects-ul>li>ul>li");
    return tasksInProjs;
}


const taskToProjectList = function(projectsData, task){
    const taskCapsule = projectsData.taskCapsule;
    const projectCapsule = projectsData.projectCapsule;
    taskCapsule.classList.add(`${task.priority}`);
    taskCapsule.classList.add(`${task.projectFamily}`);
    taskCapsule.textContent = task.title;
    taskCapsule.setAttribute('id', task.id);
    projectCapsule.appendChild(taskCapsule);
}

const projectDisplay = function(selectWindow){
    const obj = listOfProjects();
    const ulClass = obj.projectsClassArray;
    const allProjs = obj.list;
    const thisClass = ulClass[selectWindow.selectedIndex];
    const thisProject = allProjs[selectWindow.selectedIndex];
    const projectCapsule = document.querySelector(`.${thisClass}`);
    const taskCapsule = document.createElement("li");
    return {taskCapsule, projectCapsule, thisClass, thisProject}
}

const updateProjectList = function(selectWindow) {
    removeAllChildNodes(selectWindow);
    let obj = listOfProjects();
    let classes = obj.projectsClassArray;
    let useNames =[];
    for(let fullName of classes){
        let together = fullName.split("-"); 
        together.shift(); 
        together.pop(); 
        let middleName = together.join(' ');
        useNames.push(middleName);
    };
    
       for (let each of useNames){
            let menuOption = document.createElement("option");
            menuOption.value = each;
            menuOption.text = each;
            selectWindow.appendChild(menuOption); 
        };
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};


export { updateProjectList, removeAllChildNodes, taskToProjectList, projectDisplay, tasksColorGrey, tasksColorBlack, listOfProjects}