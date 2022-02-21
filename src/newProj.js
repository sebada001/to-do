const projectFactory = (name, color) =>{
    return {name, color}
};

export default function newProject(){
    const butt = document.querySelector(".add-project-button");
    butt.addEventListener('click', projectAdd);
}

const projectAdd = function(){
    const projectUl = document.querySelector(".projects-ul");
    const project = projectFactory(prompt("What will this project be called?"));
    const projectCapsule = document.createElement("li");
    projectCapsule.textContent = project.name;
    projectUl.appendChild(projectCapsule);
}
