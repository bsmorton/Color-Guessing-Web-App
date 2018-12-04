var colors = [randomColor(),randomColor(),randomColor(),
    randomColor(), randomColor(), randomColor()]

var squares = document.getElementsByClassName("square");

var targetColor = colors[Math.floor(Math.random()*6)];

var targetColorDisplay = document.getElementById("targetColor");

var message = document.getElementById("message");

targetColorDisplay.textContent = targetColor;

for(var i=0; i<squares.length; ++i){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor===targetColor){
            message.textContent = "Correct!!";
            winningColor(targetColor);
        }
        else{
            message.textContent = "Try Again!!";
            this.style.backgroundColor= "#232323";
        }
    });
}

function randomColor(){
    return "rgb(" + String((Math.random()*255).toFixed(0)) + ", " 
    + String((Math.random()*255).toFixed(0)) + ", " 
    + String((Math.random()*255).toFixed(0)) + ")";
}

function winningColor(color) {
    for(var i=0; i<squares.length; ++i){
        squares[i].style.backgroundColor = color;
    }
}
