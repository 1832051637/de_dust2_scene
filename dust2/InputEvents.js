function addEvents(event) {
    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);
}

function keyDown(event) {
    keyboard[event.keyCode] = true;
}

function keyUp(event) {
    keyboard[event.keyCode] = false;
}

function update_camera() {
    
    if (free_mode) {
        var direction = new THREE.Vector3();
        var distance = player.speed;
        camera.getWorldDirection( direction );
        if (keyboard[87]) {
            camera.position.add( direction.multiplyScalar(distance));
        }
        if (keyboard[83]) {
            camera.position.add( direction.multiplyScalar(-distance));
        }
        if(keyboard[65]){ // A key
            free_control.moveRight(-player.speed);
        }
        if(keyboard[68]){ // D key
            free_control.moveRight(player.speed);
        }
    } 
    // else {
    // // Keyboard movement inputs
    //     if(keyboard[87]){ // W key
    //         free_control.moveForward(player.speed);
    //     }
    //     if(keyboard[83]){ // S key
    //         free_control.moveForward(-player.speed);
    //     }
    //     if(keyboard[65]){ // A key
    //         free_control.moveRight(-player.speed);
    //     }
    //     if(keyboard[68]){ // D key
    //         free_control.moveRight(player.speed);

    //     }
    // }
}


function initial_orbit_control() {
    if (free_mode) {
        return;
    }
    orbit_control = new THREE.OrbitControls( camera, renderer.domElement );

		const blocker = document.getElementById('blocker');
        const instructions = document.getElementById('instructions');
        // blocker.hidden = true;
        // instructions.hidden = true
        instructions.style.display = 'none';
            blocker.style.display = 'none';
		// instructions.addEventListener( 'click', function (){blocker.hidden = true;
        //     instructions.hidden = true});
		orbit_control.update();
		orbit_control.rotateSpeed = 0.2;
		orbit_control.panSpeed = 0.5;
		orbit_control.zoomSpeed = 0.5;
        orbit_control.target = new THREE.Vector3(-13, 7, -15);
}

function initial_free_control() {
    if (!free_mode) {
        return;
    }
    free_control = new THREE.PointerLockControls(camera, document.body);

        const blocker = document.getElementById('blocker');
        const instructions = document.getElementById('instructions');

        blocker.style.display = 'block';
            instructions.style.display = '';
        instructions.addEventListener( 'click', function (){free_control.lock();});

        free_control.addEventListener( 'lock', function(){
            instructions.style.display = 'none';
            blocker.style.display = 'none';
        } );

        free_control.addEventListener( 'unlock', function(){
            blocker.style.display = 'block';
            instructions.style.display = '';
        } );
		free_control.target = new THREE.Vector3(-10, 7, -10);
		scene.add( free_control.getObject() );
}
