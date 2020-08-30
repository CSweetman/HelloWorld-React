import React from 'react';  //'react is the module and React is object being imported from module
import ReactDOM from 'react-dom';

//Babel will compile this into React.createElement -> why we import React object since though we don't use it, it will be compiled into React.createLElement
const element = <h1>Hello World</h1>;   //Virtual DOM is lightweight replicate, object is apart of it. Will update DOM accordingly.
ReactDOM.render(element, document.querySelector('#root'));  //Renders this in real DOM, why we import react-dom. 
//^First argument is element to render, second is where to render it. Root is div container where the application is
console.log(element);

/*
*In real application, won't render single elements but instead app components.
*Lead to tree of componenets that lead up to complicated markup.
*/

//Now time to make shopping cart.