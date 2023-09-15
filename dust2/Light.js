class Light {
    constructor() {
        this.ambient = new THREE.AmbientLight(0xffffff, 0.35);
        this.point_light = new THREE.PointLight(0xffffff, 0.65, 200, 0.1);
        this.point_light2 = new THREE.PointLight(0xc9002c, 1, 5, 0.3);
        this.spot_light = new THREE.SpotLight(0xffffff);
        this.pos = [-5,25,5];
        this.pos2 = [-7.5, 7,-21.74];
        this.spot_pos = [0, 5.5, 0];
        this.init_data();
    }

    init_data() {
        this.point_light.position.set(this.pos[0],this.pos[1],this.pos[2]);
        this.point_light.castShadow = true;
        // Will not this.point_light anything closer than 0.1 units or further than 25 units
        this.point_light.shadow.camera.near = 0.1;
        this.point_light.shadow.camera.far = 100;
        this.point_light.shadow.mapSize.height = 1024;
        this.point_light.shadow.mapSize.width = 1024;
        // this.point_light.shadow.mapSize.height = 512;
        // this.point_light.shadow.mapSize.width = 512;

        this.point_light2.position.set(this.pos2[0],this.pos2[1],this.pos2[2]);
        this.point_light2.castShadow = true;
        // Will not this.point_light anything closer than 0.1 units or further than 25 units
        this.point_light2.shadow.camera.near = 0.1;
        this.point_light2.shadow.camera.far = 10;

        this.spot_light.position.set(this.spot_pos[0], this.spot_pos[1], this.spot_pos[2]);
        this.spot_light.intensity = 0.5;
        this.spot_light.penumbra = 0.33;
        this.spot_light.castShadow = true;
        this.spot_light.angle = Math.PI/9;
        this.spot_light.target.position.set(0, 0, 0);
    }
}