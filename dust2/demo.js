let scene, camera, renderer, mesh;
const canvas_h = window.innerHeight * 0.85;
const canvas_w = window.innerWidth * 0.85;
let free_mode = false;
let shadow_on = true;
let keyboard = {};
let player = new Player();
let light = new Light();
let light_mesh;
let clock;
let orbit_control;
let free_control;


function init(){
	add_action_to_UI();
    clock = new THREE.Clock();
	// Create a scene and camera

	// Creates the renderer with size
	renderer = new THREE.WebGLRenderer({antialias: true} );
	renderer.setSize(canvas_w, canvas_h);

    renderer.shadowMap.enabled = shadow_on;
    renderer.shadowMap.type = THREE.BasicShadowMap;

	scene2 = new THREE.Scene();
	camera2 = new THREE.PerspectiveCamera(50, canvas_w/canvas_h, 0.01, 1000);
	scene = new THREE.Scene();
	const near = 5;
	const far = 70;
	const color = '#9cbaba';
	scene.fog = new THREE.Fog(color, near, far);
	// scene.fog = new THREE.FogExp2(color, 0.00025);
	camera = new THREE.PerspectiveCamera(50, canvas_w/canvas_h, 0.01, 1000);

	// Move the camera to 0,0,-5 (the Y axis is "up")
	camera.position.set(2,12.5,-35);
	

	if (free_mode == true){
		camera.lookAt(new THREE.Vector3(-13, 7, -15));
		initial_free_control();

	} else {
		initial_orbit_control();
	}
	
	make_label("white", "blue", 350, 80, 'CT Base is here', [0.5,-1.5,0.5]);
	cs_icon = new THREE.TextureLoader().load("textures/icon.png");

	cs_mesh = new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1), // width, height, depth
		new THREE.MeshPhongMaterial({//color:0xff4444, 
			wireframe:false, map:cs_icon,
		})
	);
    cs_mesh.position.y += 1;
	cs_mesh.receiveShadow = shadow_on;
	cs_mesh.castShadow = shadow_on;
	
	// Add the mesh to the scene.
	scene.add(cs_mesh);
	
	// Add map objects..
	add_skybox();
	add_floors();

	add_boxes();
	
	add_walls();
	

    // Lights
	// const labelMaterial = new THREE.SpriteMaterial({
	// 	map: texture,
	// 	transparent: true
	//   });

	

	// let sun_icon = new THREE.TextureLoader().load("textures/sun.png");
	light_mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7), // width, height, depth
		new THREE.MeshPhongMaterial({
			color:0xffff00,
			fog:false,
			// opacity:0.5,
			// transparent: true,
			wireframe:false})
		);
	
	light_mesh.receiveShadow = shadow_on;
	light_mesh.position.set(light.pos[0],light.pos[1]-1.5,light.pos[2]+1);
	scene.add(light_mesh);
	make_label("white", "darkorange", 350, 80, 'Light is here', [light.pos[0],light.pos[1]-4,light.pos[2]+1]);

	// c4_mesh = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.5,0.5), // width, height, depth
	// 	new THREE.MeshPhongMaterial({color:0xc9002c, wireframe:false})
	// 	);

	// c4_mesh.position.set(light.pos2[0],light.pos2[1] + 0.5,light.pos2[2]);
	// c4_mesh.receiveShadow = shadow_on;
	// c4_mesh.castShadow = shadow_on;
	// scene.add(c4_mesh);
	
	
	gltf_loader = new THREE.GLTFLoader();
	gltf_loader.load("models/c4/c4.gltf", function(gltf){
		const object = gltf.scene.children[0];
		gltf.scene.name = "c4";
        object.position.set(light.pos2[0],light.pos2[1] - 0.5,light.pos2[2]-0.2);
		object.scale.set(0.04, 0.04, 0.04);
		gltf.scene.traverse( function( node ) {

			if ( node.isMesh ) { node.castShadow = false; node.receiveShadow = true;}
	
		} );
		object.rotation.z += Math.PI;
		scene.add(gltf.scene);
	});

	var loader = gltf_loader;
		loader.load("models/ak/scene.gltf", function(gltf){
			const object = gltf.scene.children[0];

			gltf.scene.name = "ak";
			object.position.set(floor5.position.x,floor5.position.y + 1.5, floor5.position.z+2);

			object.scale.set(1.8, 1.8, 1.8);
			gltf.scene.traverse( function( node ) {
				if ( node.isMesh ) { node.castShadow = true; node.receiveShadow = false;}
		
			} );
			object.rotation.z += Math.PI/2;
			scene.add(gltf.scene);
		});

		// loader.load("models/awm/scene.gltf", function(gltf){
		// 	const object = gltf.scene.children[0];

		// 	gltf.scene.name = "awm";
		// 	object.position.set(floor5.position.x, floor5.position.y + 3, floor5.position.z+4);

		// 	object.scale.set(2, 2, 2);
		// 	gltf.scene.traverse( function( node ) {
		// 		if ( node.isMesh ) { node.castShadow = true; node.receiveShadow = true;}
		
		// 	} );
		// 	// object.rotation.z -= Math.PI/4;
		// 	scene.add(gltf.scene);
		// });


	make_label("white", "red", 250, 50, 'C4 is here', [light.pos2[0],light.pos2[1],light.pos2[2]]);

	var ak_t = new THREE.TextureLoader().load("textures/ak.png");
	ak = new THREE.Sprite( new THREE.SpriteMaterial( { map: ak_t } ))
	// sprite.scale.set(imageWidth,imageHeight,1);
	ak.position.set(0, 0, 0);
	scene2.add(ak);
	

	spot_mesh = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.5,0.5), // width, height, depth
		new THREE.MeshPhongMaterial({color:0xffffff, wireframe:false})
		);

	spot_mesh.position.set(light.spot_pos[0],light.spot_pos[1] + 0.5,light.spot_pos[2]);
	scene.add(spot_mesh);

	scene.add(light.spot_light);
	scene.add(light.spot_light.target);
    scene.add(light.ambient);
    // light.init_data();
    scene.add(light.point_light);
	scene.add(light.point_light2);



	document.body.appendChild(renderer.domElement);
	
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;

	// Begin animation
	animate();
}

function add_action_to_UI() {
	// Button events
	document.getElementById('orbit').onclick = function() {free_mode = false;
		initial_orbit_control();};
	document.getElementById('free').onclick = function() {
		free_mode = true;
		initial_free_control();
		};
}

function animate(){
	requestAnimationFrame(animate); 

	
	// Rotate our mesh
	cs_mesh.rotation.x += 0.01;
	cs_mesh.rotation.y += 0.02;

	light_mesh.rotation.x += 0.01;
	light_mesh.rotation.y += 0.02;

	// console.log(clock.getElapsedTime());
	let current_time = clock.getElapsedTime();
	
	update_camera();

	light.point_light2.distance = 5 + 2 * Math.sin(current_time);
	scene.traverse( 
		// update_obj(child, camera)
		function ( child ) {
		if ( child.name == "c4" ) {
			child.position.y = 1 + 0.5 * Math.sin(current_time);
		}
		if (child.name == "ak") {
			// child.rotation.y += 0.01 * current_time;
		}
		} 
	);
	


	if (!free_mode) {
		orbit_control.update();
	}
	// Draw the scene from the perspective of the camera.


	renderer.render(scene, camera);
	// renderer.render(scene2, camera2);
}


// }
// When the page has loaded, run init();
function main() {
    addEvents();
    init(); 
}

// main();
