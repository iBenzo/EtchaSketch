const body = document.body;
const bodyDiv = document.createElement('div');
bodyDiv.setAttribute('id', 'boxContainer');

body.append(bodyDiv);

const btnDiv = document.createElement('div');
btnDiv.setAttribute('id', 'btnDiv');

bodyDiv.append(btnDiv);

const btn = document.createElement('button');
btn.setAttribute('id', 'changeGridSizeBtn');
btn.innerText = 'Click to change grid size!'

btnDiv.append(btn);

const gridContainer = document.createElement('div')
gridContainer.setAttribute('id', 'gridContainer')

bodyDiv.append(gridContainer);


for (let i = 0; i < 256; i++){
    const boxDiv = document.createElement('div');
    boxDiv.className = "box";
    gridContainer.append(boxDiv);
}

let boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('mouseover', (event) =>{
        event.target.style.backgroundColor = randomColor();
    });
});

function randomColor(){
   let randomColorGenerator =  Math.floor(Math.random()*16777215).toString(16);
   let randomColor = '#' + randomColorGenerator;
   return randomColor;
}

const btnHover = document.getElementById('btnDiv');
btn.addEventListener('mouseenter', (event) =>{
    btnHover.style.boxShadow = '5px 10px #888888';
})
const btnUnHover = document.getElementById('btnDiv');

btn.addEventListener('mouseleave', (event) =>{
    btnUnHover.style.removeProperty('box-shadow');
})

btn.addEventListener('click', (event) =>{
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box =>{
        box.remove();
    })

    //This gets the user inputted grid size
    let finalUserGridSize = 0;
    function getUserGrid(){
        let userGridSize = prompt('Please enter a number between 1-100 for the grid size.');
        if (userGridSize < 0 || userGridSize > 100){
            getUserGrid();
        }
        else{
            return finalUserGridSize = userGridSize;
        }
    }

    getUserGrid(finalUserGridSize);
    
    for (let i = 0; i < finalUserGridSize * finalUserGridSize; i++){
        const boxDiv = document.createElement('div');
        boxDiv.className = "box";

        let boxWitdh = Math.round(960/finalUserGridSize) - 2;
        let boxHeight = Math.round(720/finalUserGridSize) - 2;
        
        function changeGridHeightWidth(){    
            let elements = document.getElementsByClassName("box");
            let elementLegnth = elements.length;
            for (let x = 0; x < elementLegnth; x++) {
                elements[x].style.width=(boxWitdh+"px");
                elements[x].style.height=(boxHeight+'px');
            }
        }
        gridContainer.append(boxDiv);
        changeGridHeightWidth();
        let boxes = document.querySelectorAll('.box');
        boxes.forEach((box) => {
            box.addEventListener('mouseover', (event) =>{
                event.target.style.backgroundColor = randomColor();
            });
        });
    }
})