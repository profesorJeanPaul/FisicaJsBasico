function UnitOnGround(  ) {
    let jumpSpeed = 12;

    this.update = function( unit, inputComponent ) {
        // Jump
        if( inputComponent.dy  != 0 ) {
            unit.vy = inputComponent.dy * jumpSpeed;
        }
        if( unit.vy != 0 ) {
            unit.state = StatesDictionary.unitOnAir;
        }
    }
}

function UnitOnAir(  ) {
    this.update = function( unit, inputComponent ) {
        
    }
}