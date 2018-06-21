import React, { Component } from 'react';

// import { Scene, WebGLRenderer, Color, BoxGeometry, MeshBasicMaterial, VertexColors, Mesh, Quaternion, Vector3, Matrix4, Clock, CubeGeometry, TextureLoader, PlaneGeometry, DoubleSide, AmbientLight, OrbitControls, Raycaster, PerspectiveCamera, Vector2, DirectionalLight, MultiMaterial, SkinnedMesh, AnimationMixer, SceneUtils } from 'three';

import { ARUtils, ARPerspectiveCamera, ARView, ARDebug } from 'three.ar.js';
// import { VRControls } from 'three.ar.js/third_party/js/VRControls';
let THREE = require('three');
// import * as THREE from 'three';

// let MyLoader = require('../assets/JDLoader.min.js');


class ARtesting extends Component {
  // let scene = new THREE.Scene();
  // let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

  // let renderer = new THREE.WebGLRenderer();
  // renderer.setSize( window.innerWidth, window.innerHeight );
  // document.body.appendChild( renderer.domElement );

  // let geometry = new THREE.BoxGeometry( 1, 1, 1 );
  // let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // let cube = new THREE.Mesh( geometry, material );
  // scene.add( cube );

  // camera.position.z = 5;

  // let animate = function () {
  //   requestAnimationFrame( animate );

  //   cube.rotation.x += 0.1;
  //   cube.rotation.y += 0.1;

  //   renderer.render( scene, camera );
  // };

  render() {
    // this.animate();
    alert(`H: ${window.innerHeight}. W: ${window.innerWidth}`);
    return (
        <div id="canvasholder">
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