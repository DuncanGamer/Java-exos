
const fondColor = document.querySelector("#fond-color");
const padding = document.querySelector("#padding");
const heigth = document.querySelector("#heigth");
const width = document.querySelector("#width");
const rounded = document.querySelector("#rounded");
const rotation = document.querySelector("#rotation");
const text = document.querySelector('#boxtext');



fondColor.oninput = () => {
    text.style.backgroundColor = fondColor.value 
};

width.oninput = () => {
    text.style.width = width.value + 'px'
};
rounded.oninput = () => {
    text.style.border = rounded.value + 'px'
};
padding.oninput = () => {
    text.style.padding = padding.value + 'px'
};
width.oninput = () => {
    text.style.rotation = rotation.value 
}; 

width.oninput = () => {
    text.style.width = width.value + 'px'
};