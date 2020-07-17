import * as THREE from "three"
// import * as donut from 'public/donut.gltf'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import * as donut from "./obj/donut.gltf"
// import cupPath from "public/obj/Coffee Cup_final.gltf"


export const makeThreeBits = (canvasHolder) => {

    const winW = window.innerWidth;
    const winH = window.innerHeight;
    
    // SCENE 
    let scene = new THREE.Scene();
    
    
    // RENDERER
    let renderer = new THREE.WebGL1Renderer({antialias: true})
    renderer.setClearColor("#e5e5e5")
    renderer.setSize(winW, winH)

    canvasHolder.appendChild( renderer.domElement );

    // CAMERA
    let camera = new THREE.PerspectiveCamera(45, winW/winH, 1, 500);
    camera.position.set( 0, 0, 50 );
    camera.lookAt( 0, 0, 0 );
    
    // LIGHT 
    let light = new THREE.PointLight(0xFFFFF, 1, 1000);
    light.position.set(5, 5, 0);
    scene.add(light);


    // LOADER
    var loader = new GLTFLoader();
    loader.load("%PUBLIC_URL%/obj/donut.gltf", (gtlf) => {
        scene.add(gtlf.scene)
        renderer.render( scene, camera );
    }, undefined, (error) => {
        console.log("ERROR in load:", error);
    })

    renderer.render( scene, camera );

    // MATERIAL
    // var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

    // var points = [];
    // points.push( new THREE.Vector3( - 10, 0, 0 ) );
    // points.push( new THREE.Vector3( 0, 10, 0 ) );
    // points.push( new THREE.Vector3( 10, 0, 0 ) );

    // var geometry = new THREE.BufferGeometry().setFromPoints( points );

    // var line = new THREE.Line(geometry, material);

    // scene.add(line)

    // BOX 
    // var geometry = new THREE.BoxGeometry( 1, 5, 1 );
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );

    // var animate = function () {
    //     requestAnimationFrame( animate );
    //     line.rotation.x += 0.01;
    //     line.rotation.y += 0.01;
    //     renderer.render( scene, camera );
    //   };
    //   animate();
    
    
    // return renderer.domElement;
}
