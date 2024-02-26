const input=document.querySelector(".input")

const handleInput=(event)=>{
    console.log(event.target.value);
}

function debounce(callback,delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId=setTimeout(()=>{
            callback(...args)
        },delay)
    }
}
const debounced=debounce(handleInput,500);

input.addEventListener("keyup",debounced);