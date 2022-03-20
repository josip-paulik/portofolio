let commandContainer = document.getElementsByClassName("command-container").item(0);
let lastElement = null;
renderNewCommandLine();


function clickPress(event) {
    if (event.key == "Enter") {
        commandHistory.push(event.target.value);
        renderErrorLine();
        renderNewCommandLine();
    }
    if (event.key == "ArrowUp") {
        visitCommandHistory();
    }
}

function renderNewCommandLine() {
    let element = document.createElement("div");
    element.className = "command-line";
    element.innerHTML = `<span>josip-paulik.com &ensp; &gt; &ensp; </span><input type="text" class="command-input" onkeydown="clickPress(event)"/>`;
    commandContainer.appendChild(element);
    lastElement = element;

    let inputElement = element.getElementsByClassName("command-input").item(0);
    inputElement.focus();
}

function renderErrorLine() {
    let element = document.createElement("div");
    element.className = "output-line";
    element.innerHTML = `<span class="error-line">Command not recognized.</span>`;
    commandContainer.appendChild(element);
}

function visitCommandHistory() {
    let inputElement = lastElement.getElementsByClassName("command-input").item(0);
    
    inputElement.value = commandHistory[0];
    const length = inputElement.value.length;
    inputElement.setSelectionRange(length, length);
    inputElement.focus();

}