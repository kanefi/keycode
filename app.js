const input = document.getElementById("text");
const key = document.getElementById("keycode");
let eventKey = document.getElementById("eventKey");
let eventCode = document.getElementById("eventCode");
let eventWhich = document.getElementById("eventWhich");

document.addEventListener('keydown', () => {
    
    // console.log(event);
    // console.log(event.code);
    // console.log(event.key);
    // console.log(event.keyCode);


    eventKey.textContent = event.key;
    eventCode.textContent = event.code;
    eventWhich.textContent = event.which;
    
})


