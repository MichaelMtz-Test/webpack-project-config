import _ from 'lodash';
import "./styles/styles.css";
import { _log } from "./scripts/utils";

 function component() {
   const element = document.createElement('div');
   const btn = document.createElement('button');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'Webby Pack'], ' ');
   element.classList.add('hello');

   btn.innerHTML = "Click me & check console";
   btn.addEventListener('click',()=> {
     _log('Webpack output management buddy...!');
   });

   element.appendChild(btn);
   return element;
 }

 document.body.appendChild(component());