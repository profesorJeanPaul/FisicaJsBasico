function MakeMoveUnitCommand( unit, x, y ) {
    var xBefore, yBefore;
    return {
      execute: function( ) {
        xBefore = x * -1;
        yBefore = y * -1;
        unit.moveTo( x, y );
      },
      undo: function( ) {
        unit.moveTo( xBefore, yBefore );
      }
    };
  }