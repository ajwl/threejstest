import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



export const makeThreeBits = (canvasHolder) => {

    const winW = window.innerWidth;
    const winH = window.innerHeight;


    gsap.registerPlugin(ScrollTrigger); 
    
    // SCENE 
    let scene = new THREE.Scene();
    
    // RENDERER
    let renderer = new THREE.WebGL1Renderer({antialias: true})
    renderer.setClearColor("#bfffff")
    renderer.setSize(winW, winH)

    canvasHolder.appendChild( renderer.domElement );

    // CAMERA
    let camera = new THREE.PerspectiveCamera(45, winW/winH, 1, 500);
    camera.position.set( 1, 1, 20 );
    
    // LIGHT 
    let light = new THREE.PointLight(0xFFFFF, 1, 500);
    light.position.set(5, 5, 0);
    scene.add(light);
    var ambientLight = new THREE.AmbientLight( 0xcccccc );
    scene.add( ambientLight );

    // LOADER
    let obj;
    var loader = new GLTFLoader();
    loader.load("gltf/Coffee Cup_final.gltf", (gltf) => {
        console.log("load succssful")
        console.log(gltf)
        gltf.scene.scale.set( 2, 2, 2 );			   
        gltf.scene.position.x = 0;				    
        gltf.scene.position.y = 0;
        gltf.scene.position.z = 0;
        obj = gltf.scene;
        scene.add(gltf.scene)
        animate2()
    }, undefined, (error) => {
        console.log("ERROR in load:", error);
    })


    // BOX 
    // var geometry = new THREE.BoxGeometry( 1, 5, 1 );
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );

    // var animate = function () {
    //     obj.rotation.x += 0.01;
    //     obj.rotation.y += 0.01;
    //     renderer.render( scene, camera );
    //   };

    const animate2 = () => {

        let tl = new gsap.timeline(
        {
            onUpdate: renderer.render(scene, camera),
            scrollTrigger: {
                trigger: ".marker",
                scrub: true,
                start: "top top",
                end: "bottom bottom"
            },
            defaults: {duration: 2, ease: 'power2.inOut'}
        });
        
        let delay = 0;
        
        tl.to(".marker", {x: 400, ease: 'power1.in'}, delay)

        tl.play()

    }
}
