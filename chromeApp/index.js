const TITLE=document.querySelector("#title")   

const BASE_COLOR="rgb(0, 0, 0)";
const OTHER_COLOR="rgb(500,0,0)"
// function changeColor(){
//     if(title.color=="red"){
//         title.style.color="black"  ;
//     }else if(title.color=="black"){
//         title.style.color="red";
//     }
// }

function handleClick(){
    const currentColor=title.style.color
    if (currentColor===BASE_COLOR){
        title.style.color=OTHER_COLOR;
    }else {
        title.style.color=BASE_COLOR;
    }
}
function init(){
    title.addEventListener("mouseenter",handleClick)
}
init()

