import { blackOn, blackOff, returnTasks } from "./newTask.js";
import { thisPlay } from "./display.js";
import { displayAllTasks } from "./displaysWithDates.js";
import { removeAllChildNodes } from "./projList.js";


const projArray = [];

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
    inputArea.value = ""
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
        deleteProject(projectCapsule, proj.classTag, proj.projTasks);
    }else{
        displayProject(proj);
    }
    })
};

function displayProject(proj){
    const tasks = proj.projTasks;
    const container = document.querySelector(".tasks-container");
    removeAllChildNodes(container);
    tasks.forEach(t => thisPlay(t));
}

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

const initProjectOnly = function(){
    const closeButt = document.querySelector(".close-button-p");
    closeButt.addEventListener('click', ()=>{
        blackOff();
        projWindowOff();
    });
    const submitButt = document.querySelector(".proj-submit");
    submitButt.addEventListener('click', ()=>{
    checkForm();
    });
    const Work = ProjectFactory("Work");
    appendProj(Work);
    const trashButton = document.querySelector(".trash-button");
    trashButton.addEventListener('click', (e)=>{
        trashMode(e);
    });
};


export {newProject, projectList, initProjectOnly};