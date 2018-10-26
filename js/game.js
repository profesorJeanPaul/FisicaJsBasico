// Creamos un lienzo
var context = null;
var gameManager = new GameManager( );
var canvas = document.createElement( "canvas" );
document.getElementById( "game" ).appendChild( canvas );
// Colorear el lienzo
canvas.style.backgroundColor = "black";
canvas.width = WIDTH;
canvas.height = HEIGHT;
// Generar el lápiz
context = canvas.getContext("2d");
context.strokeStyle = "white";
context.fillStyle = "white";
// GameLoop
setInterval( gameLoop, MILISECONDS_PER_FRAME );

function gameLoop( ) {
    gameManager.processInput( );
    gameManager.update( );
}
