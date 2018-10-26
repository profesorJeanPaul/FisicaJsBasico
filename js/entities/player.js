function Player( 
            inputComponent, updateComponent, graphicComponent, 
            physicsComponent, x, y, speed, type ) {
    this.speed = speed || 4;
    this.x = x || 100;
    this.y = y || 100;
    this.w = 32;
    this.h = 32;
    // Velocity and aceleration
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    // Directions
    this.dx = [ ];
    this.dy = [ ];
    this.type = type || DYNAMIC;
    // States
    this.state = StatesDictionary.unitOnAir;

    this.moveTo = function( mx, my ) {
        this.dx.push( mx );
        this.dy.push( my );
    }

    this.update = function( ) {
        inputComponent.update( this );
        updateComponent.update( this, inputComponent );
        physicsComponent.update( this, updateComponent );
        graphicComponent.update( this,  updateComponent );
    }

    // Collider Box
    this.getLeft = function( ) {
        return this.x;
    }

    this.getTop = function( ) {
        return this.y;
    }

    this.getRight = function( ) {
        return this.x + this.w;
    }

    this.getBottom = function( ) {
        return this.y + this.h;
    }
}