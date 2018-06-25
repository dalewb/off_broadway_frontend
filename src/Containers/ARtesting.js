import React, { Component } from 'react';

// import { Scene, WebGLRenderer, Color, BoxGeometry, MeshBasicMaterial, VertexColors, Mesh, Quaternion, Vector3, Matrix4, Clock, CubeGeometry, TextureLoader, PlaneGeometry, DoubleSide, AmbientLight, OrbitControls, Raycaster, PerspectiveCamera, Vector2, DirectionalLight, MultiMaterial, SkinnedMesh, AnimationMixer, SceneUtils } from 'three';

// import { ARUtils, ARPerspectiveCamera, ARView, ARDebug } from 'three.ar.js';
// import { VRControls } from 'three.ar.js/third_party/js/VRControls';
let THREE = require('three');
let OBJLoader = require('three-obj-loader');
OBJLoader(THREE);
// import * as THREE from 'three';

class ARtesting extends Component {

    getItStarted = () => {
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(75, (window.innerWidth/2) / (window.innerHeight/2), 0.1, 1000);

        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        let divvy = document.getElementById('canvasholder');
        divvy.appendChild(renderer.domElement);

        let geometry = new THREE.BoxGeometry(1, 1, 1);
        let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        let cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        var manager = new THREE.LoadingManager();
        manager.onProgress = function ( item, loaded, total ) {
            console.log( item, loaded, total );
        };

        camera.position.z = 5;

        let moonie = new THREE.GLTFLoader();
        moonie.load(
            '/moon_3d_model/scene.gltf',
            function ( object ) {
                console.log('adding moonie!');
                scene.add( object );
            }, function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + ' % loaded' );
            }, function ( error ) {
                console.log( 'An error happened', error );
            }
        );
        
        let animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += .005;
            cube.rotation.y += .005;
            renderer.render(scene, camera);
        };
        animate();
    }

    componentDidMount() {
        this.getItStarted();
    }


  render() {
    return (
        <div id="canvasholder">
            TESTING.
            <span className="title">Tap to spawn objects on surfaces.</span><br/>
            <span className="links">
                <a href="https://github.com/google-ar/ar.js">ar.js</a> -
                <a href="https://developers.google.com/ar/develop/web/getting-started#examples">examples</a>
            </span>
        </div>
    );
  };
};

export default ARtesting