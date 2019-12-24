import {
  Scene,
  PerspectiveCamera,
  Color,
  WebGLRenderer,
  TorusGeometry,
  MeshBasicMaterial,
  Mesh,
  AxesHelper
} from 'three';

const createTorus = (scene) => {
  const geometry = new TorusGeometry(5, 1, 30, 30);
  const material = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });
  const torus = new Mesh(geometry, material);
  scene.add(torus);
  return torus;
};

const addAxis = (scene) => {
  scene.add(new AxesHelper(5));
};

const init = () => {
  const { innerWidth, innerHeight } = window;
  const scene = new Scene();
  scene.background = new Color(0x000000);
  const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 1, 1000);
  camera.position.z = 20;
  const torus = createTorus(scene);
  const renderer = new WebGLRenderer();
  renderer.setSize(innerWidth, innerHeight);
  return {
    renderer,
    scene,
    camera,
    torus
  };
};

export { init, createTorus, addAxis };
