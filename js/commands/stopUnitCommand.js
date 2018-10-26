function StopUnitCommand( unit ) {
    var vxBefore, vyBefore;
    return {
      execute: function( ) {
        vxBefore = unit.vx;
        vyBefore = unit.vy;
        unit.vx = 0;
        unit.vy = 0;
      },
      undo: function( ) {
        unit.vx = vxBefore;
        unit.vy = vyBefore;
      }
    };
}