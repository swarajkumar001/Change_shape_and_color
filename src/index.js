import "./styles.css";
const circle=document.getElementById('circle');
const square=document.getElementById('square');

// const color=document.getElementsByClassName('color');
// const shape=document.getElementsByClassName('shape');

const color=document.getElementById('color');
const shape = document.getElementById('shape');

color.addEventListener('click',function(){
    circle.style.backgroundColor='red';

})

// width: 0;
//   height: 0;
//   border-left: 50px solid transparent;
//   border-right: 50px solid transparent;
//   border-bottom: 100px solid red; /* Change the color as desired */


shape.addEventListener('click',function(){
    square.style.width='0px';
    square.style.height='0px';
    square.style.borderLeft='50px solid transparent';
    square.style.borderRight='50px solid transparent';
    square.style.borderBottom='100px solid red';
})


