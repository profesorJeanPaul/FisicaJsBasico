function InputHandler( ) {
    const UNDEFINED = -1;
    let keyInputs = [ ];
    let commandsDictionary  = new CommandsDictionary( );
    // Key inputs
    document.addEventListener( "keydown", function( key ) {
        // console.log( key.key + ": " + key.keyCode )
        keyInputs[ key.keyCode ] = true;
    } );
    document.addEventListener( "keyup", function( key ) {
        keyInputs[ key.keyCode ] = false;
    } );

    this.handleInput = function( ) {
        let commands = [ ];
        let allPressedKeys = [ ];
        for( let i in keyInputs ) {
            if( keyInputs[ i ] == true ) {
                allPressedKeys.push( i );
                if( commandsDictionary.getCommandOneKey( i ) != UNDEFINED ) {
                    commands.push( commandsDictionary.getCommandOneKey( i ) );
                }
            }
        }
        commandsDictionary.getCommandMultiKey( allPressedKeys );
        
        return commands;
    }
}