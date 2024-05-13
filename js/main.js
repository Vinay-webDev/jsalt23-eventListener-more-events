// eventListeners - more events

const myBox = document.getElementById("myBox");

myBox.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "ouch!🤕";
})



















