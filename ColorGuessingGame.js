var numOfColors = 6;

var colors = generateRandomColors();

var targetColor = getTargetColor();

init();

function init(){
    $("#hard").last().addClass("selected");
    $("#targetColor").text(targetColor);
    initModes();
    initSquares();
}

function initModes(){
    $(".mode").on("click", function(){
        numOfColors = $(this).attr("id")==="easy" ? 3 : 6;
        $("#easy").removeClass("selected");
        $("#hard").removeClass("selected");
        $(this).addClass("selected");

        playAgain();
    })
}

function initSquares(){
    $(".square").each(function(){
        $(this).css("backgroundColor",colors.shift());
    });
    $(".square").on("click", function(){
        if($(this).css("backgroundColor")===targetColor){
            $("#message").text("Correct!!");
            winningColor(targetColor);
            $("h1").css("backgroundColor",targetColor);
            $("#newColors").text("PLAY AGAIN?");
        }
        else{
            $("#message").text("Try Again!!");
                $(this).css("backgroundColor","#232323");
        }
    })
}


$("#newColors").on("click",function(){
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
    $(".square").css("backgroundColor",color);
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
    targetColor = getTargetColor();
    $("#targetColor").text(targetColor);
    toggleSquares();
}

function playAgain(){
    newColors();
    $("h1").css("backgroundColor","steelblue");
    $("#newColors").text("NEW COLORS");
    $("#message").text("");

}

function toggleSquares(){
    $(".square").css("display","none");
    $(".square").each(function(index){
        if(index<numOfColors){
            $(this).css({
                display: "block",
                backgroundColor: colors.shift()
            });
        }
    });
}

