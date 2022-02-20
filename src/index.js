import './style.css';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = "webpack test 123"
  
    document.body.appendChild(element);
  }

  component();
