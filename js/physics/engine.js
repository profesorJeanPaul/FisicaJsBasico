const GRAVITY_Y = 0.5, GRAVITY_X = 0;

function Engine( gameEntities ) {
    var collider = new ColliderDetector( );

    this.update = function( elapsed ) {
        let gx = GRAVITY_X * elapsed;
        let gy = GRAVITY_Y * elapsed;
        let entity;
        let entities = gameEntities;
        
        collider.resolveCollisions( gameManager.getPlayer( ), gameEntities );

        for ( let i = 0, length = entities.length; i < length; i++ ) {
            entity = entities[ i ];
            switch ( entity.type ) {
                case DYNAMIC:
                    entity.vx += entity.ax * elapsed + gx;
                    entity.vy += entity.ay * elapsed + gy;
                    entity.x  += entity.vx * elapsed;
                    entity.y  += entity.vy * elapsed;
                    break;
                case KINEMATIC:
                    entity.vx += entity.ax * elapsed;
                    entity.vy += entity.ay * elapsed;
                    entity.x  += entity.vx * elapsed;
                    entity.y  += entity.vy * elapsed;
                    break;
            }
            entity.vx = 0;
        }
        
    };
}