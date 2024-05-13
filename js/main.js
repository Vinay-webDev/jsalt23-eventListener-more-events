// eventListeners - more events

const myBox = document.getElementById("myBox");

myBox.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "ouch🤕";
})

myBox.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "don't do it😲";
})

myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "click me😃";
})
















