document.addEventListener("DOMContentLoaded", function () {

    // Get elements from the DOM
    const boxContainer = document.getElementById("box-container");
    const newBoxButton = document.getElementById("new-box-button");
    const colorForm = document.getElementById("color-form");
    const colorInput = document.getElementById("color-input");

    // Variables
    let boxColor = "black";
    let boxCounter = 1;

    // Change the color of all boxes
    colorForm.addEventListener("submit", function (event) {
        event.preventDefault();

        boxColor = colorInput.value;

        const boxes = document.querySelectorAll(".box");

        boxes.forEach(function (box) {
            box.style.backgroundColor = boxColor;
        });

        colorInput.value = "";
    });

    // Function to create a new box
    function addNewBox() {
        const newBox = document.createElement("div");

        const boxId = `Box ${boxCounter}`;

        newBox.classList.add("box");
        newBox.textContent = boxId;
        newBox.dataset.boxId = boxId;
        newBox.style.backgroundColor = boxColor;

        boxContainer.appendChild(newBox);

        boxCounter++;
    }

    // Add a box when the button is clicked
    newBoxButton.addEventListener("click", function () {
        addNewBox();
    });

    // Remove a box when double-clicked
    document.addEventListener("dblclick", function (event) {
        if (event.target.classList.contains("box")) {
            event.target.remove();
        }
    });

    // Display coordinates when hovering over a box
    document.addEventListener("mouseover", function (event) {
        if (event.target.classList.contains("box")) {
            event.target.textContent =
                `X: ${event.pageX}, Y: ${event.pageY}`;
        }
    });

    // Display the box ID when the mouse leaves
    document.addEventListener("mouseout", function (event) {
        if (event.target.classList.contains("box")) {
            event.target.textContent = event.target.dataset.boxId;
        }
    });

    // Add a box when N is pressed
    document.addEventListener("keydown", function (event) {
        if (
            event.key.toLowerCase() === "n" &&
            event.target !== colorInput
        ) {
            addNewBox();
        }
    });

});