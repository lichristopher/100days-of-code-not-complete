const boxesContainer = document.querySelector('.empty-boxes-container');
const colorPaletteContainer = document.querySelector('.color-palette');
const colorPaletteColors =  colorPaletteContainer.querySelectorAll('.color')
let currentColor = null;
const boxes = document.querySelectorAll('.box');
const clearColorsButton = document.querySelector('#clear-colors');
const generateNewColorsButton = document.querySelector('#generate-colors');

function clearBoxColor() {
    boxes.forEach(box => {
        box.style.backgroundColor = "";
    }) 
}

function clearPaletterBorderColors() {
    colorPaletteColors.forEach(color => {
        color.style.borderColor = "";
    });
}

function generateRandomColor() {
    const r = Math.floor(Math.random()*256);          // Random between 0-255
    const g = Math.floor(Math.random()*256);          // Random between 0-255
    const b = Math.floor(Math.random()*256);          // Random between 0-255
    const rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')'; // Collect all to a string
    return rgb;
}

function attachColor() {
    colorPaletteColors.forEach(color => {
    color.style.backgroundColor = generateRandomColor();
    })
}


colorPaletteContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('color')) {
        // e.target.style.backgroundColor = generateRandomColor();
        clearPaletterBorderColors();
        currentColor = e.target.style.backgroundColor;
        // change border color when color selected
        // e.target.style.borderColor = '#18ff92';
        e.target.style.borderColor = '#00e877';
        console.log(currentColor);
    };
});

boxesContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'DIV' && e.target.classList.contains('box')) {
        const box = e.target;
        // check if current color has value
        if(currentColor) {
            box.style.backgroundColor = currentColor;
        }
        
    }
});


// Clear the all boxes colors
clearColorsButton.addEventListener('click', clearBoxColor);

generateNewColorsButton.addEventListener('click', function() {
    // Attach New Colors to Div
    attachColor();

    // Clear selected currently selected color
    clearPaletterBorderColors();

    currentColor = '';
    // console.log(currentColor);
});

attachColor();
// Why Cant I use alert directly on an event Listener