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
    //only if localStorage is not empty
    let lsLength = localStorage.length;
    let arrayOfKeys = [];
    let projectsToStore = [];
    
    for(let i = 0; i<lsLength; i++){
        arrayOfKeys.push(localStorage.key(i));
    };

    if(arrayOfKeys.length > 0){
        for(let key of arrayOfKeys){
            projectsToStore.push(JSON.parse(localStorage.getItem(`${key}`)));
            // console.log(JSON.parse(JSON.stringify(projectsToStore)));
        };
        resetProjArray(projectsToStore);
    };

    //clear projectList
    //repopulate project list with projectsToStore
    //check if have to update view of them somewhere (prob not)
};

export {storeProjects, clearProjects, getStorage};