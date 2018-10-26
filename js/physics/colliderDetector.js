function ColliderDetector( ) {
    this.collideRect = function( collider, collidee ) {
        // Store the collider and collidee edges
        var l1 = collider.getLeft();
        var t1 = collider.getTop();
        var r1 = collider.getRight();
        var b1 = collider.getBottom();
        
        var l2 = collidee.getLeft();
        var t2 = collidee.getTop();
        var r2 = collidee.getRight();
        var b2 = collidee.getBottom();
     
        // If the any of the edges are beyond any of the
        // others, then we know that the box cannot be
        // colliding
        if (b1 < t2 || t1 > b2 || r1 < l2 || l1 > r2) {
            return false;
        }
        // If the algorithm made it here, it had to collide
        return true;
    }

    this.resolve = function( unit, collider ) {
        let uMidX = unit.x + unit.w / 2;
        let uMidY = unit.y + unit.h / 2;
        let cMidX = collider.x + collider.w / 2;
        let cMidY = collider.y + collider.h / 2;
        let dx = ( uMidX - cMidX );
        let dy = ( uMidY - cMidY );
        let absDx = Math.abs( dx );
        let absDy = Math.abs( dy );

        console.log( "x: " + absDx , "y: " + absDy)
        // If the object is approaching from the sides
        if( Math.abs( absDx - absDy ) < 1 ) {
            return;
        }
        if( absDx > absDy ) {
            if( dx > 0 ) {
                unit.x = collider.getRight( );
                if( unit.vx < 0 ) {
                    unit.vx = 0;
                }
            } else {
                unit.x = collider.getLeft( ) - unit.w;
                if( unit.vx > 0 ) {
                    unit.vx = 0;
                }
            }
            
        } else {
            // If the object is approaching from top or bottom
            if( dy > 0 ) {
                unit.y = collider.getBottom( );
                if( unit.vy < 0 ) {
                    unit.vy = 0;
                }
            } else {
                unit.y = collider.getTop( ) - unit.h;
                unit.state = StatesDictionary.unitOnGround;
                if( unit.vy > 0 ) {
                    unit.vy = 0;
                }
            }
        }
    }

    this.resolveCollisions = function( unit, collidables ) {
        for( let i in collidables ) {
            if( this.collideRect( unit, collidables[ i ] ) && collidables[ i ] != unit ) {
                this.resolve( unit, collidables[ i ] );
            }
        }
    }
}