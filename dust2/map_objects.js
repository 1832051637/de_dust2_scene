function add_skybox() {
    // var loader = new THREE.CubeTextureLoader();
    var texture = new THREE.CubeTextureLoader().load([
    'textures/majik_ft.jpg',
    'textures/majik_bk.jpg',
    'textures/majik_up.jpg',
    'textures/majik_dn.jpg',
    'textures/majik_rt.jpg',
    'textures/majik_lf.jpg',
  ]);
    scene.background = texture;
    scene.background.rotation.y -= Math.PI / 2
}

function add_floors() {
    path_t = new THREE.TextureLoader().load("textures/path.png");
	path_t.wrapS = path_t.wrapT = THREE.RepeatWrapping;
	path_t.repeat.set(1, 1.5);
	
    floor = new THREE.Mesh(
		new THREE.PlaneGeometry(12,18, 20,20),
		new THREE.MeshPhongMaterial({ map:path_t})
	);
    floor.material.side = THREE.DoubleSide;
	floor.translateX(1)
	floor.translateZ(4)
	floor.rotation.x += Math.PI / 2; // Rotate the floor 90 degrees
    floor.receiveShadow = shadow_on;
	// floor.castShadow = shadow_on;
	scene.add(floor);

	slope1 = new THREE.Mesh(
		new THREE.PlaneGeometry(12,20, 20,20),
		new THREE.MeshPhongMaterial({/*color:0xfab75a,*/ map:path_t})
	);
	slope1.translateX(1)
	slope1.translateZ(-8); 
	slope1.translateY(1); 
    slope1.material.side = THREE.DoubleSide;
	slope1.rotation.x += Math.PI / 2; // Rotate the floor 90 degrees
	slope1.rotation.x += Math.PI / 14;
	
    slope1.receiveShadow = shadow_on;
	// slope1.castShadow = shadow_on;
	scene.add(slope1);

	floor2 = new THREE.Mesh(
		new THREE.PlaneGeometry(12,17.5, 20,20),
		new THREE.MeshPhongMaterial({ map:path_t})
	);
	floor2.translateX(1);
	floor2.translateZ(-26.49); 
	floor2.translateY(3.229); 
    floor2.material.side = THREE.DoubleSide;
	floor2.rotation.x += Math.PI / 2; // Rotate the floor 90 degrees
	
    floor2.receiveShadow = shadow_on;
	// floor2.castShadow = shadow_on;
	scene.add(floor2);


	path_t2 = new THREE.TextureLoader().load("textures/path.png");
	
	path_t2.rotation -= Math.PI/2;
	path_t2.center = new THREE.Vector2(0.5, 0.5);

	path_t2.wrapS = path_t2.wrapT = THREE.RepeatWrapping;
	path_t2.repeat.set(1, 1.5);
	slope2 = new THREE.Mesh(
		new THREE.PlaneGeometry(19.8,11, 20,20),
		new THREE.MeshPhongMaterial({map:path_t2})
	);
	slope2.position.set(floor2.position.x,floor2.position.y,floor2.position.z);
    slope2.material.side = THREE.DoubleSide;
	slope2.translateX(-8.5);
	slope2.translateY(1.5);
	slope2.translateZ(-2.75);
	slope2.rotation.x += Math.PI / 2; // Rotate the floor 90 degrees
	slope2.rotation.y -= Math.PI / 11.1;

	
    slope2.receiveShadow = shadow_on;
	scene.add(slope2);

	path_t2 = new THREE.TextureLoader().load("textures/path.png");
	
	path_t2.rotation -= Math.PI/2;
	path_t2.center = new THREE.Vector2(0.5, 0.5);

	path_t2.wrapS = path_t2.wrapT = THREE.RepeatWrapping;
	path_t2.repeat.set(1, 1);

	floor3 = new THREE.Mesh(
		new THREE.PlaneGeometry(10,11, 20,20),
		new THREE.MeshPhongMaterial({map:path_t2})
	);
		
	floor3.position.set(floor2.position.x,floor2.position.y,floor2.position.z);
	floor3.translateY(4.27); 
	floor3.translateX(-23.0);
	floor3.translateZ(-2.75);
    floor3.material.side = THREE.DoubleSide;
	floor3.rotation.x += Math.PI / 2;
    floor3.receiveShadow = shadow_on;
	scene.add(floor3);


	ground_t = new THREE.TextureLoader().load("textures/ground.png");
	ground_t.wrapS = ground_t.wrapT = THREE.RepeatWrapping;
	ground_t.repeat.set(2, 2);
	side_t = new THREE.TextureLoader().load("textures/side.png");
	side_t.wrapS = side_t.wrapT = THREE.RepeatWrapping;
	side_t.repeat.set(2, 1);
	
	floor4_mat = [
        new THREE.MeshPhongMaterial({
            map:side_t}),
        new THREE.MeshPhongMaterial({
			map:ground_t}),
        new THREE.MeshPhongMaterial({
			map:ground_t}),
        new THREE.MeshPhongMaterial({
			map:ground_t}),
        new THREE.MeshPhongMaterial({
			map:ground_t}),
        new THREE.MeshPhongMaterial({
            map:ground_t})
    ];

	floor4 = new THREE.Mesh(
		new THREE.BoxGeometry(10,1,12),
		floor4_mat
	);
	
	floor4.position.set(floor3.position.x,floor3.position.y,floor3.position.z);
	floor4.translateY(-0.51); 
	floor4.translateZ(11);
    floor4.receiveShadow = shadow_on;
	floor4.castShadow = shadow_on;
	scene.add(floor4);


	top_t = new THREE.TextureLoader().load("textures/top.png");

	floor5_mat = [
        new THREE.MeshPhongMaterial({
            map:side_t}),
        new THREE.MeshPhongMaterial({
			map:top_t}),
        new THREE.MeshPhongMaterial({
			map:top_t}),
        new THREE.MeshPhongMaterial({
			map:top_t}),
        new THREE.MeshPhongMaterial({
			map:side_t}),
        new THREE.MeshPhongMaterial({
            map:side_t})
    ];

	floor5 = new THREE.Mesh(
		new THREE.BoxGeometry(10,1,6),
		floor5_mat
	);

	floor5.position.set(floor4.position.x,floor4.position.y,floor4.position.z);
	floor5.translateY(-0.51); 
	floor5.translateX(1);
	floor5.translateZ(-1);
    // floor5.material.side = THREE.DoubleSide;
	// floor5.rotation.x += Math.PI / 2;
    floor5.receiveShadow = shadow_on;
	floor5.castShadow = shadow_on;
	scene.add(floor5);

	sideA_t = new THREE.TextureLoader().load("textures/site_A.png");
	floor5 = new THREE.Mesh(
		new THREE.BoxGeometry(15,1, 6),
		new THREE.MeshPhongMaterial({map:sideA_t})
	);

	floor5.position.set(floor4.position.x,floor4.position.y,floor4.position.z);
	floor5.translateY(-1.01); 
	floor5.translateX(11.5);
	floor5.translateZ(-2.5);
    floor5.material.side = THREE.DoubleSide;
	// floor5.rotation.x += Math.PI / 2;
    floor5.receiveShadow = shadow_on;
	// floor5.castShadow = shadow_on;
	scene.add(floor5);


	floor_t = new THREE.TextureLoader().load("textures/floor.png");
	
	floor_t.rotation -= Math.PI/2;
	floor_t.center = new THREE.Vector2(0.5, 0.5);
	floor_t.wrapS = floor_t.wrapT = THREE.RepeatWrapping;
	floor_t.repeat.set(3, 2.5);

	floor6 = new THREE.Mesh(
		new THREE.BoxGeometry(12,0.5, 24),
		new THREE.MeshPhongMaterial({map:floor_t})
	);

	floor6.position.set(floor5.position.x,floor5.position.y,floor5.position.z);
	floor6.translateY(-0.01 + 0.25); 
	floor6.translateX(-1.01);
	floor6.translateZ(15.01);
    // floor6.material.side = THREE.DoubleSide;
	// floor6.rotation.x += Math.PI / 2;
    floor6.receiveShadow = shadow_on;
	floor6.castShadow = shadow_on;
	scene.add(floor6);

	floor_t = new THREE.TextureLoader().load("textures/floor.png");
	
	floor_t.rotation -= Math.PI/2;
	floor_t.center = new THREE.Vector2(0.5, 0.5);
	floor_t.wrapS = floor_t.wrapT = THREE.RepeatWrapping;
	floor_t.repeat.set(1, 5);

	floor7 = new THREE.Mesh(
		new THREE.BoxGeometry(22,0.5, 10.5),
		new THREE.MeshPhongMaterial({map:floor_t})
	);

	floor7.position.set(floor6.position.x,floor6.position.y,floor6.position.z);
	floor7.translateY(0.01); 
	floor7.translateX(17);
	floor7.translateZ(6.75);
    // floor7.material.side = THREE.DoubleSide;
	// floor7.rotation.x += Math.PI / 2;
    floor7.receiveShadow = shadow_on;
	floor7.castShadow = shadow_on;
	scene.add(floor7);
}


function add_boxes() {
    box_t = new THREE.TextureLoader().load("textures/box.png");
	box_x_t = new THREE.TextureLoader().load("textures/box_x.png");
    box_g_t = new THREE.TextureLoader().load("textures/box_g.png");
	box_g_t2 = new THREE.TextureLoader().load("textures/box_g2.png");

    var box_g_materials = [
        new THREE.MeshPhongMaterial({
            map:box_g_t}),
        new THREE.MeshPhongMaterial({
			map:box_g_t}),
        new THREE.MeshPhongMaterial({
			map:box_g_t2}),
        new THREE.MeshPhongMaterial({
			map:box_g_t}),
        new THREE.MeshPhongMaterial({
			map:box_g_t}),
        new THREE.MeshPhongMaterial({
            map:box_g_t})
    ];

	box1 = new THREE.Mesh(
		new THREE.BoxGeometry(3,3,3), // width, height, depth
		new THREE.MeshPhongMaterial({map:box_x_t})
	);
    box1.translateY(1.5);
	box1.translateX(-3.5);
	box1.translateZ(-6);
	// The cube can have shadows cast onto it, and it can cast shadows
	box1.receiveShadow = shadow_on;
	box1.castShadow = shadow_on;
	scene.add(box1);

	box2 = new THREE.Mesh(
		new THREE.BoxGeometry(3,3,3), // width, height, depth
		new THREE.MeshPhongMaterial({wireframe:false,map:box_x_t})
	);
	box2.position.set(box1.position.x, box1.position.y, box1.position.z);
	box2.translateZ(-3);
	box2.translateY(0.9);
	box2.receiveShadow = shadow_on;
	box2.castShadow = shadow_on;
	scene.add(box2);

	box3 = new THREE.Mesh(
		new THREE.BoxGeometry(2,2,2), // width, height, depth
		new THREE.MeshPhongMaterial({map:box_t})
	);
	box3.position.set(box1.position.x, box1.position.y, box1.position.z);
	box3.translateZ(-0.5);
	box3.translateX(-0.5);
	box3.translateY(2.5);
	box3.receiveShadow = shadow_on;
	box3.castShadow = shadow_on;
	scene.add(box3);


    box4 = new THREE.Mesh(
		new THREE.BoxGeometry(1.9,1.9,1.9, 20,20), // width, height, depth
        box_g_materials
	);
	box4.position.set(slope2.position.x, slope2.position.y, slope2.position.z);
	box4.translateZ(4.2);
	box4.translateX(1.8);
	box4.translateY(0.45);
    box4.rotation.z -= Math.PI / 11.1;
	box4.receiveShadow = shadow_on;
	box4.castShadow = shadow_on;
	scene.add(box4);

    box5 = new THREE.Mesh(
		new THREE.BoxGeometry(1.9,1.9,1.9, 20, 20), // width, height, depth
        box_g_materials
	);
	box5.position.set(floor5.position.x, floor5.position.y, floor5.position.z);
	box5.translateZ(1.75);
	box5.translateX(6.5);
	box5.translateY(1.45);
    // box4.rotation.z -= Math.PI / 11.1;
	box5.receiveShadow = shadow_on;
	box5.castShadow = shadow_on;
	scene.add(box5);

    box6 = new THREE.Mesh(
		new THREE.BoxGeometry(1.9,1.9,1.9), // width, height, depth
        box_g_materials
	);
	box6.position.set(box5.position.x, box5.position.y, box5.position.z);
	box6.translateZ(-0.25);
	box6.translateX(-2.15);
	box6.translateY(0);
    box6.rotation.y -= Math.PI / 14;
	box6.receiveShadow = shadow_on;
	box6.castShadow = shadow_on;
	scene.add(box6);

    box7 = new THREE.Mesh(
		new THREE.BoxGeometry(1.9,1.9,1.9), // width, height, depth
        box_g_materials
	);
	box7.position.set(box5.position.x, box5.position.y, box5.position.z);
	// box7.translateZ(-0.25);
	box7.translateX(-0.7);
	box7.translateY(1.9);
	box7.receiveShadow = shadow_on;
	box7.castShadow = shadow_on;
	scene.add(box7);

    box8 = new THREE.Mesh(
		new THREE.BoxGeometry(1.9,1.9,1.9), // width, height, depth
        box_g_materials
	);
	box8.position.set(floor5.position.x, floor5.position.y, floor5.position.z);
	box8.translateZ(-1.85);
	box8.translateX(-1);
	box8.translateY(1.45);
	box8.receiveShadow = shadow_on;
	box8.castShadow = shadow_on;
	scene.add(box8);

    box9 = new THREE.Mesh(
		new THREE.BoxGeometry(2.2,2.2,2.2), // width, height, depth
        new THREE.MeshPhongMaterial({map:box_t})
	);
	box9.position.set(floor4.position.x, floor4.position.y, floor4.position.z);
	box9.translateZ(2);
	box9.translateX(-3);
	box9.translateY(1.6);
    box9.rotation.y -= Math.PI / 14;
	box9.receiveShadow = shadow_on;
	box9.castShadow = shadow_on;
	scene.add(box9);

	box10 = new THREE.Mesh(
		new THREE.BoxGeometry(2.2,2.2,2.2), // width, height, depth
        new THREE.MeshPhongMaterial({map:box_t})
	);
	box10.position.set(floor7.position.x+2.75, floor7.position.y + 0.25 +1.1, floor7.position.z-3.8);
	box10.receiveShadow = shadow_on;
	box10.castShadow = shadow_on;
	scene.add(box10);

	box11 = new THREE.Mesh(
		new THREE.BoxGeometry(2.2,2.2,2.2), // width, height, depth
        new THREE.MeshPhongMaterial({map:box_t})
	);
	box11.position.set(box10.position.x, box10.position.y + 2.2, box10.position.z);
	box11.receiveShadow = shadow_on;
	box11.castShadow = shadow_on;
	scene.add(box11);
}

function add_walls() {
    wall_t = new THREE.TextureLoader().load("textures/wall1.png");
	wall_t.wrapS = wall_t.wrapT = THREE.RepeatWrapping;
	wall_t.repeat.set(0.75, 1);
	
	hole_wall = new THREE.Mesh(
		new THREE.BoxGeometry(4,9,0.5), // width, height, depth
		new THREE.MeshPhongMaterial({map:wall_t})
	);
	hole_wall.translateZ(-4.2);
	hole_wall.translateY(3);
	hole_wall.translateX(-3.5);
	hole_wall.receiveShadow = shadow_on;
	hole_wall.castShadow = shadow_on;
	scene.add(hole_wall);
	

	wall_h_t = new THREE.TextureLoader().load("textures/wall_h.png");
	wall_h_t.wrapS = wall_t.wrapT = THREE.RepeatWrapping;
	wall_h_t.repeat.set(3, 1);
	hole_top = new THREE.Mesh(
		new THREE.BoxGeometry(10,3,0.5), // width, height, depth
		new THREE.MeshPhongMaterial({map:wall_h_t})
	);
	hole_top.position.set(hole_wall.position.x, hole_wall.position.y, hole_wall.position.z);
	hole_top.translateY(3);
	hole_top.translateZ(0);
	hole_top.translateX(7);
	hole_top.receiveShadow = shadow_on;
	hole_top.castShadow = shadow_on;
	scene.add(hole_top);
	
	wall_t = new THREE.TextureLoader().load("textures/wall1.png");
	wall_t.wrapS = wall_t.wrapT = THREE.RepeatWrapping;
	wall_t.repeat.set(3, 1);

	wall1 = new THREE.Mesh(
		new THREE.BoxGeometry(14,9,0.5), // width, height, depth
		new THREE.MeshPhongMaterial({map:wall_t})
	);
	wall1.position.set(hole_wall.position.x, hole_wall.position.y, hole_wall.position.z);
	wall1.translateX(-1.751);
	wall1.translateZ(-6.751);
	wall1.translateY(0.001);
	wall1.rotation.y += Math.PI/2;
	wall1.receiveShadow = shadow_on;
	wall1.castShadow = shadow_on;
	scene.add(wall1);

	wall_t = new THREE.TextureLoader().load("textures/wall1.png");
	wall_t.wrapS = wall_t.wrapT = THREE.RepeatWrapping;
	wall_t.repeat.set(1, 1);

	wall2 = new THREE.Mesh(
		new THREE.BoxGeometry(2.999,9,0.501), // width, height, depth
		new THREE.MeshPhongMaterial({map:wall_t})
	);
	wall2.position.set(wall1.position.x, wall1.position.y, wall1.position.z);
	wall2.translateX(1.25);
	wall2.translateZ(-6.75);
	wall2.translateY(-0.01);
	// wall2.rotation.y += Math.PI/2;
	wall2.receiveShadow = shadow_on;
	wall2.castShadow = shadow_on;
	scene.add(wall2);
	

	wall_t = new THREE.TextureLoader().load("textures/wall1.png");
	wall_t.wrapS = wall_t.wrapT = THREE.RepeatWrapping;
	wall_t.repeat.set(2, 1);

	wall3 = new THREE.Mesh(
		new THREE.BoxGeometry(6.5,9,0.5), // width, height, depth
		new THREE.MeshPhongMaterial({map:wall_t})
	);
	wall3.position.set(wall2.position.x, wall2.position.y, wall2.position.z);
	wall3.translateX(1.25);
	wall3.translateY(0.01);
	wall3.translateZ(-3.11);
	wall3.rotation.y += Math.PI/2;
	wall3.receiveShadow = shadow_on;
	wall3.castShadow = shadow_on;
	scene.add(wall3);

	wall_t = new THREE.TextureLoader().load("textures/wall1.png");
	wall_t.wrapS = wall_t.wrapT = THREE.RepeatWrapping;
	wall_t.repeat.set(3, 1);
	wall4 = new THREE.Mesh(
		new THREE.BoxGeometry(15,9,0.5), // width, height, depth
		new THREE.MeshPhongMaterial({map:wall_t})
	);
	wall4.position.set(wall3.position.x, wall3.position.y, wall3.position.z);
	wall4.translateX(-7.253);
	wall4.translateY(0.01);
	wall4.translateZ(-3.01);
	// wall4.rotation.y += Math.PI/2;
	wall4.receiveShadow = shadow_on;
	wall4.castShadow = shadow_on;
	scene.add(wall4);




	wall_w_t = new THREE.TextureLoader().load("textures/wall_w.png");
	// wall_w_t.wrapS = wall_t.wrapT = THREE.RepeatWrapping;
	// wall_w_t.repeat.set(0.9, 1);

	wall5 = new THREE.Mesh(
		new THREE.BoxGeometry(0.5,14,20), // width, height, depth
		new THREE.MeshPhongMaterial({map:wall_w_t})
	);
	wall5.position.set(slope1.position.x, slope1.position.y, slope1.position.z);
	wall5.translateX(6.25);
	wall5.translateY(5.5);
	wall5.translateZ(-6);
	// wall4.rotation.y += Math.PI/2;
	wall5.receiveShadow = shadow_on;
	wall5.castShadow = shadow_on;
	scene.add(wall5);


	wall_base = new THREE.Mesh(
		new THREE.BoxGeometry(0.5,6,16), // width, height, depth
		new THREE.MeshPhongMaterial({map:wall_t})
	);
	// wall_base.position.set(slope1.position.x, slope1.position.y, slope1.position.z);
	wall_base.translateX(7.25);
	wall_base.translateY(3);
	wall_base.translateZ(4);
	// wall4.rotation.y += Math.PI/2;
	wall_base.receiveShadow = shadow_on;
	wall_base.castShadow = shadow_on;
	scene.add(wall_base);

	wall_w2_t = new THREE.TextureLoader().load("textures/wall_w2.png");
	wall_w2_s_t = new THREE.TextureLoader().load("textures/wall_w2_s.png");
	var wall5_w_mat = [
        new THREE.MeshPhongMaterial({
            map:wall_w2_s_t}), // front
        new THREE.MeshPhongMaterial({
			map:wall_w2_t}), // back
        new THREE.MeshPhongMaterial({
			map:wall_w2_s_t}), //top
        new THREE.MeshPhongMaterial({
			map:wall_w2_s_t}), //down
        new THREE.MeshPhongMaterial({
			map:wall_w2_s_t}), // right
        new THREE.MeshPhongMaterial({
            map:wall_w2_t}) // left
    ];
	wall5_w = new THREE.Mesh(
		new THREE.BoxGeometry(3.5,11,3.5), // width, height, depth
		wall5_w_mat
		
	);
	wall5_w.position.set(wall5.position.x, wall5.position.y, wall5.position.z);
	// wall5_w.translateX(1);
	wall5_w.translateY(2.15);
	wall5_w.translateZ(-8.6);
	// wall4.rotation.y += Math.PI/2;
	wall5_w.receiveShadow = shadow_on;
	wall5_w.castShadow = shadow_on;
	scene.add(wall5_w);
	

	wall_w3_t = new THREE.TextureLoader().load("textures/wall_w3.png");
	wall_w3_s_t = new THREE.TextureLoader().load("textures/wall_w3_s.png");
	var wall6_mat = [
        new THREE.MeshPhongMaterial({
            map:wall_w3_s_t}), 
        new THREE.MeshPhongMaterial({
			map:wall_w3_s_t}), // back
        new THREE.MeshPhongMaterial({
			map:wall_w3_s_t}), //top
        new THREE.MeshPhongMaterial({
			map:wall_w3_s_t}), //down
        new THREE.MeshPhongMaterial({
			map:wall_w3_t}), // right
        new THREE.MeshPhongMaterial({
            map:wall_w3_t}) // left
    ];
	wall6 = new THREE.Mesh(
		new THREE.BoxGeometry(24,14,6), // width, height, depth
		wall6_mat
	);
	wall6.position.set(slope2.position.x, slope2.position.y, slope2.position.z);
	wall6.translateX(-7.5);
	wall6.translateY(4);
	wall6.translateZ(-8);
	wall6.receiveShadow = shadow_on;
	wall6.castShadow = shadow_on;
	scene.add(wall6);
	
	wall_g_t = new THREE.TextureLoader().load("textures/wall_g.png");
	wall7 = new THREE.Mesh(
		new THREE.BoxGeometry(1,9.5,22), // width, height, depth
		new THREE.MeshPhongMaterial({map:wall_g_t})
	);
	wall7.position.set(floor3.position.x, floor3.position.y, floor3.position.z);
	wall7.translateX(-5.5);
	wall7.translateY(3.5);
	wall7.translateZ(6);
	// wall4.rotation.y += Math.PI/2;
	wall7.receiveShadow = shadow_on;
	wall7.castShadow = shadow_on;
	scene.add(wall7);

	wall8_t = new THREE.TextureLoader().load("textures/wall_w4.png");
	wall8_s_t = new THREE.TextureLoader().load("textures/wall_w4_s.png");
	var wall8_mat = [
        new THREE.MeshPhongMaterial({
            map:wall8_t}), // postive x
        new THREE.MeshPhongMaterial({
			map:wall8_t}), // neg x
        new THREE.MeshPhongMaterial({
			map:wall_w2_s_t}), //pos y
        new THREE.MeshPhongMaterial({
			map:wall_w2_s_t}), //neg y
        new THREE.MeshPhongMaterial({
			map:wall8_s_t}), // pos z
        new THREE.MeshPhongMaterial({
            map:wall8_s_t}) // neg z
    ];
	wall8 = new THREE.Mesh(
		new THREE.BoxGeometry(20,20,21), // width, height, depth
		// new THREE.MeshPhongMaterial({//color:0xfab75a,
		// 	map:wall_g_t})
		wall8_mat
	);
	wall8.position.set(floor4.position.x, floor4.position.y, floor4.position.z);
	wall8.translateX(0.1);
	wall8.translateY(3.8);
	wall8.translateZ(14);
	// wall4.rotation.y += Math.PI/2;
	wall8.receiveShadow = shadow_on;
	wall8.castShadow = shadow_on;
	scene.add(wall8);
	
	wall9_t = new THREE.TextureLoader().load("textures/wall_w5.png");
	wall9 = new THREE.Mesh(
		new THREE.BoxGeometry(29,10,5), // width, height, depth
		new THREE.MeshPhongMaterial({map:wall9_t})
	);
	wall9.position.set(floor7.position.x, wall8.position.y, floor7.position.z);
	wall9.translateX(-8);
	// wall9.translateY(3.8);
	wall9.translateZ(7.75);
	// wall4.rotation.y += Math.PI/2;
	wall9.receiveShadow = shadow_on;
	wall9.castShadow = shadow_on;
	scene.add(wall9);
}
