// script.js

// 1. Select the container
const container = document.querySelector('#container');

// 2. Create a function to build the grid
function createGrid(size) {
    // Total number of squares is size * size
    const totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++) {
        // Create the div
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.addEventListener('mouseover', () => {
            square.classList.add('active');
        });

        // Append it to the container
        container.appendChild(square);
    }
}

// 3. Execute the function
createGrid(16);