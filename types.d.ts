import '@react-three/fiber'

// Augment JSX.IntrinsicElements with React Three Fiber elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any
      group: any
      mesh: any
      planeGeometry: any
      shaderMaterial: any
      ringGeometry: any
      meshBasicMaterial: any
    }
  }
}

// Make this file a module
export { }