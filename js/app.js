'use strict'



var camera, scene, renderer;
var geometry, material, mesh, points;

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

	scene = new THREE.Scene();

  var curve = new THREE.EllipseCurve(
    1,  -5,            // ax, aY
    2, 2,           // xRadius, yRadius
    Math.PI,   Math.PI * 3 / 2,  // aStartAngle, aEndAngle
    false,            // aClockwise
    0                 // aRotation
  );
  
  points = curve.getPoints( 50 );
  geometry = new THREE.BufferGeometry().setFromPoints( points );

  //geometry = new THREE.EllipseCurve( 2, 1, 1.2, 1.2, 0, 3.14, true, 0)
  //material = new THREE.MeshBasicMaterial ({color: 0xFF0000, wireframe: false});
  //material = new THREE.MeshNormalMaterial();
  material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

  var ellipse = new THREE.Line( geometry, material );
geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
geometry.vertices.push(new THREE.Vector3( 0, 1, 0) );
geometry.vertices.push(new THREE.Vector3( 1, 1, 0) );
geometry.vertices.push(new THREE.Vector3( 1, -5, 0) );
var line = new THREE.Line( geometry, material );

//mesh = new THREE.Mesh( geometry, material );
	//scene.add( mesh );
  scene.add(ellipse);
  scene.add(line);
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

}

function animate() {

	requestAnimationFrame( animate );

  //mesh.rotation.x += 0.01;
  //mesh.rotation.y += 0.02;

	renderer.render( scene, camera );

}
