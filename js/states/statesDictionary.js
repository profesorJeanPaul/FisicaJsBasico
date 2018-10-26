const StatesDictionary = ( function( ) {
    let unitOnGround = new UnitOnGround( );
    let unitOnAir = new UnitOnAir( );

    return {
        unitOnGround: unitOnGround,
        unitOnAir: unitOnAir
    };
} )( );