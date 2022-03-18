import { projectList, resetProjArray } from './newProj.js';

function storeProjects(){
    const projectsArray = projectList();
    let count = 0;
    clearProjects();
    for(let project of projectsArray){
        let projName = project.classTag;
        let projInnards = (JSON.stringify(project));
        localStorage.setItem(projName, projInnards)
        count += 1;
    };
};

function clearProjects(){
    localStorage.clear();
};

function getStorage(){
    let lsLength = localStorage.length;
    let arrayOfKeys = [];
    let projectsToStore = [];
    for(let i = 0; i<lsLength; i++){
        arrayOfKeys.push(localStorage.key(i));
    };
    if(arrayOfKeys.length > 0){
        for(let key of arrayOfKeys){
            projectsToStore.push(JSON.parse(localStorage.getItem(`${key}`)));
        };
        resetProjArray(projectsToStore);
    };
};

export {storeProjects, clearProjects, getStorage};