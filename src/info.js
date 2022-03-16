import { blackOff, blackOn} from './newTask.js';

function infoInitialState(){
const info = document.querySelector('.right');
const close = document.querySelector('.close-button-r');
const readMe = document.querySelector(".pop-up-readMe");
info.addEventListener('click',()=>{
    opInfo(readMe);
});
close.addEventListener('click', ()=>{
    closeInfo(readMe);
});
};

function opInfo(readMe){
    readMe.style.display = "flex"
    blackOn();
};
function closeInfo(readMe){
    readMe.style.display = "none"
    blackOff();
}
export {infoInitialState}