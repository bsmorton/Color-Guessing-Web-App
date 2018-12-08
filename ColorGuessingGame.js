var numOfColors = 6;

var colors = generateRandomColors();

var squares = document.getElementsByClassName("square");

var targetColor = getTargetColor();

var targetColorDisplay = document.getElementById("targetColor");

var h1 = document.querySelector("h1");

var message = document.getElementById("message");

var newColorsButton = document.getElementById("newColors");

var modes = document.querySelectorAll(".mode");


init();


function init(){
    modes[1].classList.add("selected");
    targetColorDisplay.textContent = targetColor;
    initModes();
    initSquares();
}

function initModes(){
    for(var i=0; i<modes.length; ++i){
        modes[i].addEventListener("click", function(){
            numOfColors = this.id==="easy" ? 3 : 6; 
            modes[0].classList.remove("selected");
            modes[1].classList.remove("selected");
            this.classList.add("selected");
    
            playAgain();
        });
    }
}

function initSquares(){
    for(var i=0; i<squares.length; ++i){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            if(this.style.backgroundColor===targetColor){
                message.textContent = "Correct!!";
                winningColor(targetColor);
                h1.style.backgroundColor = targetColor;
                newColorsButton.textContent = "PLAY AGAIN?";
            }
            else{
                message.textContent = "Try Again!!";
                this.style.backgroundColor= "#232323";
            }
        });
    }
}


newColorsButton.addEventListener("click", function(){
        playAgain();
});



function getTargetColor(){
    return colors[Math.floor(Math.random()*colors.length)];
}

function randomColor(){
    return "rgb(" + (Math.random()*255).toFixed(0) + ", " 
    + (Math.random()*255).toFixed(0) + ", " 
    + (Math.random()*255).toFixed(0) + ")";
}

function winningColor(color) {
    for(var i=0; i<squares.length; ++i){
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColors(){
    var colors=[];
    for(var i=0; i<numOfColors; ++i){
        colors.push(randomColor());
    }
    return colors;
}

function newColors(){
    colors = generateRandomColors();
    targetColorDisplay.textContent = targetColor;
    hideSquares();
    for(var i=0; i<numOfColors; ++i){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }
}

function playAgain(){
    newColors();
    targetColor = getTargetColor();
    h1.style.backgroundColor = "steelblue";
    newColorsButton.textContent = "NEW COLORS";
    message.textContent = "";

}

function hideSquares(){
    for(var i=0; i<6; ++i){
        squares[i].style.display = "none";
    }
}
