import React from 'react'

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