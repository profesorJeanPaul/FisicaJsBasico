function GameManager( ) {
    let unitInputComponent = new PlayerInputComponent( );
    let unitUpdateComponent = new UnitUpdateComponent( );
    let tileInputComponent = new TileInputComponent( );
    let tileUpdateComponent = new TileUpdateComponent( );
    let unitRenderComponent = new PlayerRenderComponent( );
    let unitPhysicsComponent = new UnitPhysicsComponent( );
    let _gameObjects = [ new Player( unitInputComponent,
                                     unitUpdateComponent,
                                     unitRenderComponent,
                                     unitPhysicsComponent,
                                     100, 100 ),
                        new Player(  tileInputComponent,
                                        tileUpdateComponent, 
                                    unitRenderComponent,
                                    unitPhysicsComponent,
                                     100, 300, 6, KINEMATIC ),
                        new Player(  tileInputComponent,
                                        tileUpdateComponent, 
                                    unitRenderComponent,
                                    unitPhysicsComponent,
                                     100, 300, 6, KINEMATIC ),
                        new Player(  tileInputComponent,
                                        tileUpdateComponent, 
                                    unitRenderComponent,
                                    unitPhysicsComponent,
                                     132, 300, 6, KINEMATIC ),
                        new Player(  tileInputComponent,
                                        tileUpdateComponent, 
                                    unitRenderComponent,
                                    unitPhysicsComponent,   
                                     164, 300, 6, KINEMATIC ),
                        new Player(  tileInputComponent,
                                        tileUpdateComponent, 
                                    unitRenderComponent,
                                    unitPhysicsComponent,
                                     192, 288, 6, KINEMATIC ),
                        new Player(  tileInputComponent,
                                        tileUpdateComponent, 
                                    unitRenderComponent,
                                    unitPhysicsComponent,
                                     192, 256, 6, KINEMATIC ),
                        new Player(  tileInputComponent,
                                        tileUpdateComponent, 
                                    unitRenderComponent,
                                    unitPhysicsComponent,
                                     192, 224, 6, KINEMATIC ) ];
    let _inputHandler = new InputHandler( );
    let _saving = false;
    let _commands = [ ];
    let _history = [ ];
    let _isUndo = false;
    let engine = new Engine( _gameObjects );
    let elapsed = 1;

    this.processInput = function( ) {
        
        // Handle the inputs from keyboard, jostick, mouse, etc
        _commands = _inputHandler.handleInput( );
        // Record game
        if( !_isUndo && _saving ) {
            _history.push( _commands );
        }
        _isUndo = false;
        engine.update( elapsed )
    }

    this.update = function( ) {
        // Execute all the command actions in the game
        for( let i in _commands ) {
            if( _commands[ i ] ) {
                _commands[ i ].execute( );
            }
        }
        // Clear the screen
        context.clearRect( 0, 0, WIDTH, HEIGHT );
        for( let i in _gameObjects ) {
            _gameObjects[ i ].update( );
        }
    }

    this.getPlayer = function( ) {
        return _gameObjects[ PLAYER ];
    }

    this.actionUnit = function( index, command ) {
        _gameObjects[ index ].inputs.push( command );
    }

    this.undo = function( ) {
        if( _history.length > 0 ) {
            _isUndo = true;
            let commands = _history.pop( );
            commands.forEach( command => {
                command.undo( );
            } );
        }
    }
}