var colors = ["rgb(255, 0, 0)","rgb(0, 255, 0)","rgb(0, 0, 255)",
"rgb(255, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)"]

var squares = document.getElementsByClassName("square");

var targetColor = colors[3];

for(var i=0; i<squares.length; ++i){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor===targetColor){
            alert("correct");
        }
        else{
            alert("incorrect");
        }
    });
}

