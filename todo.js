const button = document.querySelector(".node-add-btn");
button.addEventListener("click", () => {
    const nodeInputValue = document.querySelector(".node-input").value;
    let newElement = document.createElement('div');
    newElement.setAttribute("class", "node");
    newElement.innerHTML = nodeInputValue;
    document.querySelector(".todo").appendChild(newElement);
})