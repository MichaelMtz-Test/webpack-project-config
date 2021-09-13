import _ from 'lodash';
import "./styles/styles.css";
// import Icon from './images/info.png';

 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'Webby Pack'], ' ');
   element.classList.add('hello');

  //  const elIcon = new Image();
  //  elIcon.src = Icon;
  //  element.appendChild(elIcon);
   return element;
 }

 document.body.appendChild(component());
