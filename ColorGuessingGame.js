var colors = generateRandomColors(6);

var squares = document.getElementsByClassName("square");

var targetColor = getTargetColor();

var targetColorDisplay = document.getElementById("targetColor");

var h1 = document.querySelector("h1");

var message = document.getElementById("message");

targetColorDisplay.textContent = targetColor;

for(var i=0; i<squares.length; ++i){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor===targetColor){
            message.textContent = "Correct!!";
            winningColor(targetColor);
            h1.style.backgroundColor = targetColor;
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

function generateRandomColors(numOfColors){
    var colors=[];
    for(var i=0; i<numOfColors; ++i){
        colors.push(randomColor());
    }
    return colors;
}