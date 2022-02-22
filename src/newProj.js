const ProjectFactory = (name) =>{
    const classTag = `${name}-ul`;
    return {name, classTag}
};

export default function newProject(){
    const butt = document.querySelector(".add-project-button");
    butt.addEventListener('click', projectAdd);
}

const projectAdd = function(){
    const container = document.querySelector(".projects-ul");
    const projectObj = ProjectFactory(prompt("What will this project be called?"));
    const projectCapsule = document.createElement("li");
    const subcategory = document.createElement("ul");
    subcategory.classList.add(`${projectObj.classTag}`);
    projectCapsule.textContent = projectObj.name;
    projectCapsule.appendChild(subcategory);
    container.appendChild(projectCapsule);
}

