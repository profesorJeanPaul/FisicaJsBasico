function CommandsDictionary( ) {
    this.getCommandOneKey = function( key ) {
        let commands = {
            // A
            "65": new MakeMoveUnitCommand( gameManager.getPlayer( ), LEFT, STAY ),
            // W
            "87": new MakeMoveUnitCommand( gameManager.getPlayer( ), STAY, UP ),
            // D
            "68": new MakeMoveUnitCommand( gameManager.getPlayer( ), RIGHT, STAY ),
            // S
            "83": new MakeMoveUnitCommand( gameManager.getPlayer( ), STAY, DOWN ),
            // ←
            "37": new MakeMoveUnitCommand( gameManager.getPlayer( ), LEFT, STAY ),
            // ↑
            "38": new MakeMoveUnitCommand( gameManager.getPlayer( ), STAY, UP ),
            // →
            "39": new MakeMoveUnitCommand( gameManager.getPlayer( ), RIGHT, STAY ),
            // ↓
            "40": new MakeMoveUnitCommand( gameManager.getPlayer( ), STAY, DOWN ),
            // Space
            "32": new StopUnitCommand( gameManager.getPlayer( ) ),
        }
        return commands[ key ] ? commands[ key ] : -1;
    }

    this.getCommandMultiKey = function( keys ) {
        if( keys.indexOf( KEY_Z.toString( ) ) != NOT_FOUND && keys.indexOf( KEY_CONTROL.toString( ) ) != NOT_FOUND ) {
            gameManager.undo( );
        }
    }
}