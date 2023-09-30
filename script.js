const sizeInput = document.querySelector('input');
const container = document.querySelector('.container');
const btn = document.querySelector('button');
const inputError = document.querySelector('span');

let gridSize = 16;
drawCanvas(gridSize);
btn.addEventListener('click', () => {
    let sizeInput = document.querySelector('input').value;
    sizeInput = parseInt(sizeInput);
  
    gridSize = sizeInput;
    const gridWipe = document.querySelectorAll('.container > div');
    gridWipe.forEach(function (divWipe){
        container.removeChild(divWipe)
        });
    console.log('canvas wiped');
    drawCanvas(gridSize);
 //   }
});
while (gridSize < 1 || gridSize > 100){


    gridSize = prompt('Enter a number from 1 to 100');
    if (gridSize < 1 || gridSize > 100){
        gridSize = prompt('Invalid Number. Enter a number from 1 to 100');

    };
};
function drawCanvas (gridSize){
    console.log('drawing canvas ' + gridSize);
    for (let i = 1; i <= gridSize*gridSize; i++){
        const gridDiv = document.createElement('div');


        gridDiv.classList.add('grid');
        gridDiv.style.minWidth = 100/gridSize + '%';
        gridDiv.style.minHeight = 100/gridSize + '%';
        gridDiv.addEventListener('mouseover', function (e){
            e.target.style.background = 'black';
        })
        //gridDiv.textContent = 'x';

        container.appendChild(gridDiv);
        console.log('div number ' + i + ' added');
        
        const grid = document.querySelectorAll('.grid');


};
}
