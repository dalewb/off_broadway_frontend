import React, { Component } from 'react';

import { Scene, WebGLRenderer, Color, BoxGeometry, MeshBasicMaterial, VertexColors, Mesh, Quaternion, Vector3, Matrix4, Clock, CubeGeometry, TextureLoader, PlaneGeometry, DoubleSide, AmbientLight, OrbitControls, Raycaster, PerspectiveCamera, Vector2, DirectionalLight, MultiMaterial, SkinnedMesh, AnimationMixer, SceneUtils } from 'three';

import { ARUtils, ARPerspectiveCamera, ARView, ARDebug } from 'three.ar.js';
// import { VRControls } from 'three.ar.js/third_party/js/VRControls';
let THREE = require('three');
// import * as THREE from 'three';

// let MyLoader = require('../assets/JDLoader.min.js');


let vrDisplay;
let vrFrameData;
let vrControls;
let arView;
let canvas;
let camera;
let scene;
let renderer;
let cube;
let colors = [
  new Color( 0xffffff ),
  new Color( 0xffff00 ),
  new Color( 0xff00ff ),
  new Color( 0xff0000 ),
  new Color( 0x00ffff ),
  new Color( 0x00ff00 ),
  new Color( 0x0000ff ),
  new Color( 0x000000 )
];
/**
 * Use the `getARDisplay()` utility to leverage the WebVR API
 * to see if there are any AR-capable WebVR VRDisplays. Returns
 * a valid display if found. Otherwise, display the unsupported
 * browser message.
 */
init();
// ARUtils.getARDisplay().then(function (display) {
//   if (display) {
//     vrFrameData = new VRFrameData();
//     vrDisplay = display;
//     init();
//   } else {
//     ARUtils.displayUnsupportedMessage();
//   }
// });
function init() {
  // Turn on the debugging panel
  let arDebug = new ARDebug(vrDisplay);
  document.body.appendChild(arDebug.getElement());
  // Setup the js rendering environment
  renderer = new WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  console.log('setRenderer size', window.innerWidth, window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  canvas = renderer.domElement;
  document.body.appendChild(canvas);
  scene = new Scene();
  // Creating the ARView, which is the object that handles
  // the rendering of the camera stream behind the js
  // scene
  arView = new ARView(vrDisplay, renderer);
  // The ARPerspectiveCamera is very similar to PerspectiveCamera,
  // except when using an AR-capable browser, the camera uses
  // the projection matrix provided from the device, so that the
  // perspective camera's depth planes and field of view matches
  // the physical camera on the device.
  camera = new ARPerspectiveCamera(
    vrDisplay,
    60,
    window.innerWidth / window.innerHeight,
    vrDisplay.depthNear,
    vrDisplay.depthFar
  );
  // VRControls is a utility from js that applies the device's
  // orientation/position to the perspective camera, keeping our
  // real world and virtual world in sync.
  vrControls = new VRControls(camera);
  // Create the cube geometry that we'll copy and place in the
  // scene when the user clicks the screen
  let geometry = new BoxGeometry( 0.05, 0.05, 0.05 );
  let faceIndices = ['a', 'b', 'c'];
  for (let i = 0; i < geometry.faces.length; i++) {
    let f  = geometry.faces[i];
    for (let j = 0; j < 3; j++) {
      let vertexIndex = f[faceIndices[ j ]];
      f.vertexColors[j] = colors[vertexIndex];
    }
  }
  let material = new MeshBasicMaterial({ vertexColors: VertexColors });
  cube = new Mesh(geometry, material);
  // Bind our event handlers
  window.addEventListener('resize', onWindowResize, false);
  canvas.addEventListener('touchstart', onClick, false);
  // Kick off the render loop!
  update();
}
/**
 * The render loop, called once per frame. Handles updating
 * our scene and rendering.
 */
function update() {
  // Clears color from the frame before rendering the camera (arView) or scene.
  renderer.clearColor();
  // Render the device's camera stream on screen first of all.
  // It allows to get the right pose synchronized with the right frame.
  arView.render();
  // Update our camera projection matrix in the event that
  // the near or far planes have updated
  camera.updateProjectionMatrix();
  // From the WebVR API, populate `vrFrameData` with
  // updated information for the frame
  vrDisplay.getFrameData(vrFrameData);
  // Update our perspective camera's positioning
  vrControls.update();
  // Render our js virtual scene
  renderer.clearDepth();
  renderer.render(scene, camera);
  // Kick off the requestAnimationFrame to call this function
  // when a new VRDisplay frame is rendered
  vrDisplay.requestAnimationFrame(update);
}
/**
 * On window resize, update the perspective camera's aspect ratio,
 * and call `updateProjectionMatrix` so that we can get the latest
 * projection matrix provided from the device
 */
function onWindowResize () {
  console.log('setRenderer size', window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
/**
 * When clicking on the screen, create a cube at the user's
 * current position.
 */
function onClick () {
  // Fetch the pose data from the current frame
  let pose = vrFrameData.pose;
  // Convert the pose orientation and position into
  // Quaternion and Vector3 respectively
  let ori = new Quaternion(
    pose.orientation[0],
    pose.orientation[1],
    pose.orientation[2],
    pose.orientation[3]
  );
  let pos = new Vector3(
    pose.position[0],
    pose.position[1],
    pose.position[2]
  );
  let dirMtx = new Matrix4();
  dirMtx.makeRotationFromQuaternion(ori);
  let push = new Vector3(0, 0, -1.0);
  push.transformDirection(dirMtx);
  pos.addScaledVector(push, 0.125);
  // Clone our cube object and place it at the camera's
  // current position
  let clone = cube.clone();
  scene.add(clone);
  clone.position.copy(pos);
  clone.quaternion.copy(ori);
}

class ARtesting extends Component {
    render() {
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