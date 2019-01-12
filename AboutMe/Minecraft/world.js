var scene, camera, renderer, mesh;
var keyboard = {};
var player = {height: 0.8,speed:0.1};
var ambientLight;
var light;
var textureLoader = new THREE.TextureLoader();
var newGame = {
  scene : new THREE.Scene(),

  camera : new THREE.PerspectiveCamera(90, 1200/720, 0.1, 1000),
  box : new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5) ,
    new THREE.MeshBasicMaterial({ color: 0xffffff,
      map: new textureLoader.load("materials/enter.png")})
  )


};
var playGame = false;
var audioListener = new THREE.AudioListener();
var oceanAmbientSound = new THREE.Audio( audioListener );
var gamePausedSong = new THREE.Audio( audioListener);
function init(){
  scene = new THREE.Scene();
  //scene.background = new THREE.Color( 0x85e0fc );
  camera = new THREE.PerspectiveCamera(90, 1200/720, 0.1, 1000);

  newGame.box.position.set(0,0,1);



  newGame.scene.add(newGame.box);
  newGame.scene.background = new THREE.Color( 0xe2e2e2 );
  newGame.camera.lookAt(newGame.box.position);




  var mtlLoader = new THREE.MTLLoader();

  var geometry = new THREE.CubeGeometry(1000,1000,1000);
  var cubeMaterials = [
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("skybox/ft.png"), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("skybox/bk.png"), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("skybox/up.png"), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("skybox/dn.png"), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("skybox/rt.png"), side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("skybox/lf.png"), side: THREE.DoubleSide})
  ];

  var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
  var cube = new THREE.Mesh(geometry, cubeMaterial);
  scene.add(cube);







  mtlLoader.load("materials/voxel_floating_rock.mtl", function (materials) {
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);

    objLoader.load("materials/voxel_floating_rock.obj", function (mesh) {
      mesh.traverse(function (node) {
        if (node instanceof THREE.Mesh) {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      })
      scene.add(mesh);
      mesh.position.set(-30, -60,20);
      mesh.rotation.x -= Math.PI/2;
    });
  });


  // instantiate a listener


// add the listener to the camera
camera.add( audioListener );
newGame.camera.add(audioListener);

// instantiate audio object


// add the audio object to the scene
scene.add( oceanAmbientSound );
scene.add( gamePausedSong );

// instantiate a loader
var loaderAudio1 = new THREE.AudioLoader();


song1  = 'sounds/bensound-littleidea.mp3';
song2 = 'sounds/bensound-creativeminds.mp3';
// load a resource
loaderAudio1.load(
	// resource URL
	song1,

	// onLoad callback
	function ( audioBuffer ) {
		// set the audio object buffer to the loaded object
		oceanAmbientSound.setBuffer( audioBuffer );

		// play the audio
    //oceanAmbientSound.play();


    oceanAmbientSound.setLoop(true);
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.log( 'An error happened' );
	}
);

var loaderAudio2 = new THREE.AudioLoader();


loaderAudio2.load(
	// resource URL
	song2,

	// onLoad callback
	function ( audioBuffer ) {
		// set the audio object buffer to the loaded object
		gamePausedSong.setBuffer( audioBuffer );

		// play the audio
    gamePausedSong.play();


    gamePausedSong.setLoop(true);
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.log( 'An error happened' );
	}
);











  camera.position.set(0, player.height, -15);
  camera.lookAt(new THREE.Vector3(0,player.height, 0));
  scene.add(camera);





  renderer = new THREE.WebGLRenderer();
  renderer.setSize(1280, 720);

  var hemiLight = new THREE.HemisphereLight( 0x0000ff, 0x00ff00, 0.6 );

            hemiLight.color.setHSL( 100, 1, 100 );

            hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );

            hemiLight.position.set( 0, 500, 0 );
            hemiLight.castShadow = true;

            scene.add( hemiLight );



            // this is the Sun

            dirLight = new THREE.DirectionalLight( 0xffffff, 1 );

            dirLight.color.setHSL( 100, 100, 100 );

            dirLight.position.set( 1500, 2500, 2000 );

            dirLight.position.multiplyScalar( 50 );
            dirLight.intensity = 1;

            scene.add( dirLight );

            // dirLight.shadowCameraVisible = true;



            dirLight.castShadow = true;

            dirLight.shadowMapWidth = dirLight.shadowMapHeight = 1024*2;



            var d = 30;



            dirLight.shadowCameraLeft = -d;

            dirLight.shadowCameraRight = d;

            dirLight.shadowCameraTop = d;

            dirLight.shadowCameraBottom = -d;



            // the magic is here - this needs to be tweaked if you change dimensions



            dirLight.shadowCameraFar = 3.5;

            dirLight.shadowBias = -0.00001;

            dirLight.shadowDarkness = 0.35;

            scene.add( dirLight );

  var mtlLoader = new THREE.MTLLoader();

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.BasicShadowMap;

  document.body.appendChild(renderer.domElement);

  animate();
}
function animate(){


  if (playGame == false) {
    newGame.box.rotation.y += 0.01;
    requestAnimationFrame(animate);
    renderer.render(newGame.scene, newGame.camera);

    if (keyboard[13]) {//enter
      playGame = true;
    }
    return;
  }


requestAnimationFrame(animate);
  if (playGame == true) {
    gamePausedSong.stop();
    oceanAmbientSound.play();
    if (keyboard[27]) {//esc
      playGame = false;
      oceanAmbientSound.stop();
      gamePausedSong.play();
    }
  }



  if (keyboard[87]) { //W
    camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
    camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
  }

  if (keyboard[83]) { //S
    camera.position.x += Math.sin(camera.rotation.y) * player.speed;
    camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
  }

  if (keyboard[65]) { //A
    camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed;
    camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed;
  }
  if (keyboard[68]) { //D
    camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
    camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed;
  }

  if (keyboard[37]) {//forward arrow
    camera.rotation.y -= Math.PI * 0.01;
  }
  if (keyboard[39]) {//backward arrow
    camera.rotation.y += Math.PI * 0.01;
  }

  if (keyboard[32]) {//space
    camera.position.y += player.speed;
  }
  if (keyboard[16]) {//shift
    camera.position.y -= player.speed;
  }

  if (keyboard[49]) {// 1

    boxTexture = new textureLoader.load("materials/bois.jpg");
    box = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshPhongMaterial({color:0xffffff,
        wireframe:false,
        map:boxTexture})

    );
    box.castShadow =true;
    box.receiveShadow = true;
    scene.add(box);
    box.position.set(
      camera.position.x - Math.sin(camera.rotation.y)*2,
      camera.position.y - 0.5,
      camera.position.z + Math.cos(camera.rotation.y)*2
    )
    box.rotation.set(
      camera.rotation.x,
      camera.rotation.y - Math.PI,
      camera.rotation.z
    )
    box.name = "" + camera.position.x - Math.sin(camera.rotation.y)*2 + camera.position.y - 0.5 + camera.position.z + Math.cos(camera.rotation.y)*2;
  }
  if (keyboard[50]) { // 2
    boxTexture = new textureLoader.load("materials/herbe 3.jpg");
    box = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshPhongMaterial({color:0xffffff,
        wireframe:false,
        map:boxTexture})

    );
    scene.add(box);
    box.position.set(
      camera.position.x - Math.sin(camera.rotation.y)*2,
      camera.position.y - 0.5,
      camera.position.z + Math.cos(camera.rotation.y)*2
    )
    box.rotation.set(
      camera.rotation.x,
      camera.rotation.y - Math.PI,
      camera.rotation.z
    )
    box.name = "" + camera.position.x - Math.sin(camera.rotation.y)*2 + camera.position.y - 0.5 + camera.position.z + Math.cos(camera.rotation.y)*2;
  }
  if (keyboard[51]) { //3
    boxTexture = new textureLoader.load("materials/herbe 2.jpg");
    box = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshPhongMaterial({color:0xffffff,
        wireframe:false,
        map:boxTexture})

    );
    scene.add(box);
    box.position.set(
      camera.position.x - Math.sin(camera.rotation.y)*2,
      camera.position.y - 0.5,
      camera.position.z + Math.cos(camera.rotation.y)*2
    )
    box.rotation.set(
      camera.rotation.x,
      camera.rotation.y - Math.PI,
      camera.rotation.z
    )
    box.name = "" + camera.position.x - Math.sin(camera.rotation.y)*2 + camera.position.y - 0.5 + camera.position.z + Math.cos(camera.rotation.y)*2;

  }
  if (keyboard[52]) {// 4
    boxTexture = new textureLoader.load("materials/minecraft_stone.jpg");
    box = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshPhongMaterial({color:0xffffff,
        wireframe:false,
        map:boxTexture})

    );
    scene.add(box);
    box.position.set(
      camera.position.x - Math.sin(camera.rotation.y)*2,
      camera.position.y - 0.5,
      camera.position.z + Math.cos(camera.rotation.y)*2
    )
    box.rotation.set(
      camera.rotation.x,
      camera.rotation.y - Math.PI,
      camera.rotation.z
    )
    box.name = "" + camera.position.x - Math.sin(camera.rotation.y)*2 + camera.position.y - 0.5 + camera.position.z + Math.cos(camera.rotation.y)*2;

  }
  if (keyboard[53]) { //5
    boxTexture = new textureLoader.load("materials/Diamanterz.png");
    box = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshPhongMaterial({color:0xffffff,
        wireframe:false,
        map:boxTexture})

    );
    scene.add(box);
    box.position.set(
      camera.position.x - Math.sin(camera.rotation.y)*2,
      camera.position.y - 0.5,
      camera.position.z + Math.cos(camera.rotation.y)*2
    )
    box.rotation.set(
      camera.rotation.x,
      camera.rotation.y - Math.PI,
      camera.rotation.z
    )
    box.name = "" + camera.position.x - Math.sin(camera.rotation.y)*2 + camera.position.y - 0.5 + camera.position.z + Math.cos(camera.rotation.y)*2;
  }

  if (keyboard[54]) {//6
    boxTexture = new textureLoader.load("materials/Tor.png");
    box = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshPhongMaterial({color:0xffffff,
        wireframe:false,
        map:boxTexture})

    );
    scene.add(box);
    box.position.set(
      camera.position.x - Math.sin(camera.rotation.y)*2,
      camera.position.y - 0.5,
      camera.position.z + Math.cos(camera.rotation.y)*2
    )
    box.rotation.set(
      camera.rotation.x,
      camera.rotation.y - Math.PI,
      camera.rotation.z
    )
    box.name = "" + camera.position.x - Math.sin(camera.rotation.y)*2 + camera.position.y - 0.5 + camera.position.z + Math.cos(camera.rotation.y)*2;
  }
  if (keyboard[55]) { //7
    boxTexture = new textureLoader.load("materials/Ziegelstein.png");
    box = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshPhongMaterial({color:0xffffff,
        wireframe:false,
        map:boxTexture})

    );
    scene.add(box);
    box.position.set(
      camera.position.x - Math.sin(camera.rotation.y)*2,
      camera.position.y - 0.5,
      camera.position.z + Math.cos(camera.rotation.y)*2
    )
    box.rotation.set(
      camera.rotation.x,
      camera.rotation.y - Math.PI,
      camera.rotation.z
    )
    box.name = "" + camera.position.x - Math.sin(camera.rotation.y)*2 + camera.position.y - 0.5 + camera.position.z + Math.cos(camera.rotation.y)*2;
  }
  if (keyboard[56]) {//8
    boxTexture = new textureLoader.load("materials/Lava.png");
    box = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshPhongMaterial({color:0xffffff,
        wireframe:false,
        map:boxTexture})

    );
    scene.add(box);
    box.position.set(
      camera.position.x - Math.sin(camera.rotation.y)*2,
      camera.position.y - 0.5,
      camera.position.z + Math.cos(camera.rotation.y)*2
    )
    box.rotation.set(
      camera.rotation.x,
      camera.rotation.y - Math.PI,
      camera.rotation.z
    )
    box.name = "" + camera.position.x - Math.sin(camera.rotation.y)*2 + camera.position.y - 0.5 + camera.position.z + Math.cos(camera.rotation.y)*2;
  }
  if (keyboard[57]) { //9
    boxTexture = new textureLoader.load("materials/Glowstone.png");
    box = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshPhongMaterial({color:0xffffff,
        wireframe:false,
        map:boxTexture})

    );
    scene.add(box);
    box.position.set(
      camera.position.x - Math.sin(camera.rotation.y)*2,
      camera.position.y - 0.5,
      camera.position.z + Math.cos(camera.rotation.y)*2
    )
    box.rotation.set(
      camera.rotation.x,
      camera.rotation.y - Math.PI,
      camera.rotation.z
    )
    box.name = "" + camera.position.x - Math.sin(camera.rotation.y)*2 + camera.position.y - 0.5 + camera.position.z + Math.cos(camera.rotation.y)*2;
  }
  if (keyboard[48]) {//0
    boxTexture = new textureLoader.load("materials/Erde.png");
    box = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshPhongMaterial({color:0xffffff,
        wireframe:false,
        map:boxTexture})

    );
    scene.add(box);
    box.position.set(
      camera.position.x - Math.sin(camera.rotation.y)*2,
      camera.position.y - 0.5,
      camera.position.z + Math.cos(camera.rotation.y)*2
    )
    box.rotation.set(
      camera.rotation.x,
      camera.rotation.y - Math.PI,
      camera.rotation.z
    )
    box.name = "" + camera.position.x - Math.sin(camera.rotation.y)*2 + camera.position.y - 0.5 + camera.position.z + Math.cos(camera.rotation.y)*2;
  }



  if (keyboard[8]) {//backspace
    var sphereObject = scene.getObjectByName(""+camera.position.x - Math.sin(camera.rotation.y)*2 + camera.position.y - 0.5 + camera.position.z + Math.cos(camera.rotation.y)*2);
    scene.remove(sphereObject);
  }



  renderer.render(scene, camera);
}

function keyDown(event){
  keyboard[event.keyCode] = true;
}

function keyUp(event){
  keyboard[event.keyCode] = false;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);
window.onload = init;
