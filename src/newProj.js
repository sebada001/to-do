const ProjectFactory = (name) =>{
    let noSpaceName = name.replace(/\s/g, ''); //remove spaces from string for valid class name
    const classTag = `class-${noSpaceName}-ul`; //add 'class' to each name so if user creates project named '123' class name is still valid
    return {name, classTag}
};

export default function newProject(){
    const butt = document.querySelector(".add-project-button");
    butt.addEventListener('click', projectAdd);
}

const projectAdd = function(){
    const container = document.querySelector(".projects-ul");
    const projectObj = ProjectFactory(prompt("What will this project be called?")); //FIX BUG: EMPTY NAME WORKS
    const projectCapsule = document.createElement("li");
    const subcategory = document.createElement("ul");
    subcategory.classList.add(`${projectObj.classTag}`);
    projectCapsule.textContent = projectObj.name;
    projectCapsule.appendChild(subcategory);
    container.appendChild(projectCapsule);
}
