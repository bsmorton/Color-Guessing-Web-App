var numOfColors = 6;

var colors = generateRandomColors();

var squares = document.getElementsByClassName("square");

var targetColor = getTargetColor();

var targetColorDisplay = document.getElementById("targetColor");

var h1 = document.querySelector("h1");

var message = document.getElementById("message");

var newColorsButton = document.getElementById("newColors");

var easy = document.getElementById("easy");

var hard = document.getElementById("hard");

targetColorDisplay.textContent = targetColor;

easy.addEventListener("click", function(){
    numOfColors = 3;
    this.classList.add("selected");
    hard.classList.remove("selected");
    
    hideSquares();

    playAgain();
});

hard.addEventListener("click", function(){
    numOfColors = 6;
    this.classList.add("selected");
    easy.classList.remove("selected");
    
    showSquares();
    
    playAgain();
});

newColorsButton.addEventListener("click", function(){
        playAgain();
});

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
    for(var i=0; i<numOfColors; ++i){
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
    squares[3].style.display = "none";
    squares[4].style.display = "none";
    squares[5].style.display = "none";
}

function showSquares(){
    squares[3].style.display = "block";
    squares[4].style.display = "block";
    squares[5].style.display = "block";
}