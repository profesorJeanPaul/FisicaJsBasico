function GameObject( inputComponent, updateComponent, graphicComponent, x, y, speed ) {
    this.speed = speed || 5;
    this.x = x || 100;
    this.y = y || 100;
    this.inputs = [ ];

    this.update = function( ) {
        inputComponent.update( this );
        updateComponent.update( this, inputComponent );
        graphicComponent.update( this,  updateComponent );
    }
}