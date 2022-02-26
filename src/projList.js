const updateProjectList = function(selectWindow) {
    removeAllChildNodes(selectWindow);
    let obj = selectorOfProject();
    let names = obj.projectNameArray;
       for (let i of names){
            let menuOption = document.createElement("option");
            menuOption.value = i;
            menuOption.text = i;
            selectWindow.appendChild(menuOption); 
        };
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const selectorOfProject = function(){
    const parent = document.querySelector(".projects-ul");
    let availableProjectsLi = parent.children;
    const projectsArray = [].slice.call(availableProjectsLi); //html collection to array
    const projectClassArray = projectsArray.map(function(e){
        return e.firstElementChild; 
    }); 
    const projectNameArray = projectsArray.map(function(e){
        return e.firstChild.textContent; 
    });
    return{projectClassArray, projectNameArray}; 
};

export {selectorOfProject, updateProjectList, removeAllChildNodes}