import { blackOn, blackOff } from "./newTask.js";
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
};

const checkRepeatedClassName = function(newTag){
    const projects = projectList();
    const classArray = projects.map(function(obj){
        return obj.classTag;
    });
    let count = 0;
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

};

export {newProject, projectList, initProjectOnly};