import React from 'react';
import { init } from './utils/utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ADD: 0.01,
      renderer: null,
      scene: null,
      camera: null,
      torus: null
    };
  }

  componentDidMount = () => {
    const start = init();
    const viewer = document.getElementById('viewer');
    viewer.appendChild(start.renderer.domElement);
    const { renderer, scene, camera, torus } = start;
    this.setState({
      renderer,
      scene,
      camera,
      torus
    });
    this.mainLoop();
  };

  mainLoop = () => {
    const { ADD, torus, scene, camera, renderer } = this.state;
    if (scene !== null && torus !== null && camera !== null && renderer !== null) {
      torus.rotation.z += ADD;
      torus.rotation.x = 2;

      renderer.render(scene, camera);
    }
    requestAnimationFrame(this.mainLoop);
  };

  body = () => <div id="viewer"></div>;

  render() {
    return this.body();
  }
}

export default App;
