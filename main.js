var Main = (function() {

	var Main = function() {};

	var WIDTH = 400, HEIGHT = 300;
	var VIEW_ANGLE = 45, ASPECT = WIDTH / HEIGHT, NEAR = 0.1, FAR = 10000;
	var container = document.getElementById('container');

	var renderer = new THREE.WebGLRenderer();
	var camera = new THREE.PerspectiveCamera(
		VIEW_ANGLE,
		ASPECT,
		NEAR,
		FAR);

	this.scene = new THREE.Scene();

	var entities = [];

	var initialize = function() {
		this.scene.add(camera);

		camera.position.z = 300;

		renderer.setSize(WIDTH, HEIGHT);

		container.appendChild(renderer.domElement);
		var scene = new THREE.Scene();

		var sphereArray = [];
		var factory = new SphereFactory(THREE);

		for (var i = 0; i < Math.floor(Math.random() * 20 + 5); i++) {
			var sphere = factory.createSphere();

			scene.add(sphere);
			entities.push(sphere);
		}

		var pointLight = new THREE.PointLight(0xFFFFFF);
		pointLight.position.x = 10;
		pointLight.position.y = 50;
		pointLight.position.z = 130;

		scene.add(pointLight);
	}

	var modulateEntityScale = function(entity) {
		var scaleFactor = Math.random() * 0.1 + 1;

		entity.scale.x *= scaleFactor;
		entity.scale.y *= scaleFactor;
		entity.scale.z *= scaleFactor;
	}

	var update = function() {
		for (var i = 0, l = entities.length; i < l; i++) {
			entities[i].position.x += Math.random() - 0.5;
			entities[i].position.y += Math.random() - 0.5;

			modulateEntityScale(entities[i]);
		}
	};

	var animate = function() {
		//update();
		renderer.render(scene, camera);

		window.requestAnimationFrame(animate);
	};

	Main.prototype.run = function() {
		initialize();
		window.requestAnimationFrame(animate);
	}

	return Main;
}());

var main = new Main();
main.run();

