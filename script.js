// script.js

const container = document.querySelector('#container');
const btn = document.querySelector('#reset-btn');


function createGrid(size) {
    // 1. Clear the existing grid first!
    container.innerHTML = '';

    // 2. Calculate the size of each square to fit 960px
    const squareSize = (960 / size);
    const totalSquares = size * size;
    for (let i = 0; i < totalSquares; i++) {
        // Create the div
        const square = document.createElement('div');
        square.classList.add('grid-square');
        // 3. Set the dimensions via JS so it's always perfect
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });

        // Append it to the container
        container.appendChild(square);
    }
}
// 4. Button Event Listener
btn.addEventListener('click', () => {
    let userSize = prompt("Enter number of squares per side (Max 100):");

    // Convert string to number
    userSize = parseInt(userSize);

    // Logic Check: Validation
    if (isNaN(userSize) || userSize < 1 || userSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        createGrid(userSize);
    }
});

// 3. Execute the function
createGrid(16);