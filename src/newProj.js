import { blackOn, blackOff, returnTasks, eachTaskWindow, counter, counterAdd } from "./newTask.js";
import { thisPlay, toggleCompleteStatus } from "./display.js";
import { displayAllTasks } from "./displaysWithDates.js";
import { removeAllChildNodes, projectDisplay, taskToProjectList } from "./projList.js";
import { storeProjects, clearProjects } from "./localStorage.js";

const projArray = [];

function returnProjArray(){
    return projArray;
}

function resetProjArray(toAdd){
    const selectWindow = document.querySelector("#proj-names");
    const taskArray = returnTasks();
    taskArray.splice(0, taskArray.length)
    projArray.splice(0, projArray.length);
    toAdd.forEach(proj => appendProj(proj));
    const allTasks = projArray.map(x => x.projTasks).filter(y => y.length> 0);
    const flattenedArray = Array.prototype.concat.apply([], allTasks);
    flattenedArray.forEach((task) => {
        counterAdd();
        eachTaskWindow(counter);
        taskArray.push(task);
        taskToProjectList(whereIsTask(task.projectFamily), task);
        thisPlay(task);
    });
};
function whereIsTask(thisClass){
    const projectCapsule = document.querySelector(`.${thisClass}`);
    const taskCapsule = document.createElement("li");
    return {projectCapsule, taskCapsule}

};


const projectList = function(){
    let thisArray = projArray;
    return thisArray;
};

const ProjectFactory = (name) =>{
    let noSpaceName = name.replace(/\s/g, ''); //remove spaces from string for valid class name
    const classTag = checkRepeatedClassName(`class-${noSpaceName}-ul`); //add 'class' to each name so if user creates project named '123' class name is still valid
    let projTasks = [];
    let greyedOut = false;
    return {name, classTag, projTasks, greyedOut}
};

function newProject(){
    const butt = document.querySelector(".add-project-button");
    butt.addEventListener('click', projectAdd);
};

const projectAdd = function(){
    projWindowOn();
    blackOn();
};

function checkForm(){
    const inputArea = document.querySelector("#proj-name");
    const isValid = inputArea.reportValidity();
    if(isValid){
    const projectObj = ProjectFactory(inputArea.value);
    blackOff();
    projWindowOff();
    appendProj(projectObj);
    inputArea.value = "";
    storeProjects();
    };
};

const projWindowOn = function(){
    document.querySelector(".pop-up-project").style.display = "flex";
    document.querySelector("#proj-name").focus();
};
const projWindowOff = function(){
    document.querySelector(".pop-up-project").style.display = "none";
};

const appendProj = function(proj){
    const container = document.querySelector(".projects-ul");
    const projectCapsule = document.createElement("li");
    const subcategory = document.createElement("ul");
    subcategory.classList.add(proj.classTag);
    projectCapsule.textContent = proj.name;
    projectCapsule.appendChild(subcategory);
    container.appendChild(projectCapsule);
    projArray.push(proj);
    projectCapsule.addEventListener('click', ()=>{
        if(!trasher == true){
        clearProjects();
        deleteProject(projectCapsule, proj.classTag, proj.projTasks);
        storeProjects();
    }else{
        displayProject(proj);
    }
    });
    clearProjects();
    storeProjects();
};

function displayProject(proj){
    const tasks = proj.projTasks;
    const container = document.querySelector(".tasks-container");
    removeAllChildNodes(container);
    tasks.forEach(t => thisPlay(t));
};

function deleteProject(projCap, projClass, [...projTasks]){
    let allTasks = returnTasks();
    projCap.remove();
    for( let i = 0; i < projArray.length; i++){ 
        if ( projArray[i].classTag === projClass) { 
            projArray.splice(i, 1); 
        };
    };
    for(let task of projTasks){
        for(let tasky of allTasks){
            if(tasky.id == task.id){
                allTasks.splice(allTasks.indexOf(tasky), 1);
            };
        };
    };
    displayAllTasks();
};

let count = 0;
const checkRepeatedClassName = function(newTag){
    const projects = projectList();
    const classArray = projects.map(function(obj){
        return obj.classTag;
    });
    let className = "";
    let fullName = newTag.split("-"); 
        fullName.shift(); 
        fullName.pop(); 
    let middleName= fullName.join(' ');
    for(let eachClass of classArray){
        if(eachClass == newTag){
            count ++;
        }};
    count != 0 ? className = `class-${middleName+count}-ul` : className = newTag;
    return className;
};

let trasher = true;

function trashMode(e){
    if(trasher){
        trasher = false;
        trashToggle(e);
    }else if(!trasher){
        trasher = true;
        trashToggle(e);
    };
};

function trashToggle(e){
let array= [...document.querySelectorAll(".projects-ul li")]
if(trasher == false){
    for(let obj of array){
        obj.style.cursor = "crosshair" 
    };
    e.target.style.backgroundColor = "rgba(114, 88, 88, 0.603)" ;
    document.body.style.cursor = "crosshair";
    }else if(trasher == true){
    for(let obj of array){
        obj.style.cursor = "pointer" 
    };
    e.target.style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.body.style.cursor = "default";
    };
};

function initProjectOnly(){
    const closeButt = document.querySelector(".close-button-p");
    closeButt.addEventListener('click', ()=>{
        blackOff();
        projWindowOff();
    });
    const submitButt = document.querySelector(".proj-submit");
    submitButt.addEventListener('click', ()=>{
    checkForm();
    });
    const trashButton = document.querySelector(".trash-button");
    trashButton.addEventListener('click', (e)=>{
        trashMode(e);
    });
};

function ifEmpty(){
    if(projArray.length == 0){
        const Work = ProjectFactory("Work");
        appendProj(Work);
    };
}

export {newProject, projectList, initProjectOnly, resetProjArray, ifEmpty, returnProjArray};