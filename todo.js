const button = document.querySelector(".note-add-btn");
button.addEventListener("click", () => {
    const nodeInputValue = document.querySelector(".note-input").value;
    let newElement = document.createElement('div');
    newElement.setAttribute("class", "note");
    newElement.innerHTML = nodeInputValue;
    document.querySelector(".todo").appendChild(newElement);
})