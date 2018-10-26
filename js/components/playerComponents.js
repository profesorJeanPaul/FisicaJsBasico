function PlayerInputComponent(  ) {
    this.update = function( player ) {
        this.dx = player.dx.reduce( ( a, b ) => { return a + b }, 0 );
        this.dy = player.dy.reduce( ( a, b ) => { return a + b }, 0 );
        player.dx = [ ];
        player.dy = [ ];
    }
}

function PlayerUpdateComponent(  ) {
    let jumpSpeed = 15;
    this.update = function( player, inputComponent ) {
        player.vy = inputComponent.dy != 0 ? inputComponent.dy * jumpSpeed : player.vy;
        player.vx = inputComponent.dx != 0 ? inputComponent.dx * player.speed : player.vx;
    }
}

function UnitUpdateComponent( ) {
    this.update = function( player, inputComponent ) {
        let state = player.state;
        state.update( player, inputComponent );
        player.vx = inputComponent.dx != 0 ? inputComponent.dx * player.speed : player.vx;
    }
}

function PlayerRenderComponent(  ) {
    this.update = function(  player, updateComponent ) {
        context.fillRect( player.x, player.y, player.w, player.h );
    }
}