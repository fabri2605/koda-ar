import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function TorusKnot() {
  const ref = useRef()
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.04
    ref.current.rotation.y += delta * 0.07
  })
  return (
    <mesh ref={ref} position={[3.5, 0, 0]}>
      <torusKnotGeometry args={[2.5, 0.55, 120, 16]} />
      <meshBasicMaterial color="#e8ff00" wireframe transparent opacity={0.07} />
    </mesh>
  )
}

function FloatingOcta({ position, speed, scale }) {
  const ref = useRef()
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * speed * 0.7
    ref.current.rotation.y += delta * speed
    ref.current.rotation.z += delta * speed * 0.4
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#e8ff00" wireframe transparent opacity={0.22} />
    </mesh>
  )
}

export default function ServicesScene() {
  return (
    <>
      <TorusKnot />

      <Float speed={0.7} floatIntensity={0.5} rotationIntensity={0.1}>
        <FloatingOcta position={[-5.5, 2.5, -1]} speed={0.22} scale={0.45} />
      </Float>

      <Float speed={1.1} floatIntensity={0.4} rotationIntensity={0.15}>
        <FloatingOcta position={[6.5, -2.5, -2]} speed={0.16} scale={0.55} />
      </Float>

      <Float speed={0.5} floatIntensity={0.6} rotationIntensity={0.1}>
        <FloatingOcta position={[-4.5, -3.5, -1]} speed={0.3} scale={0.35} />
      </Float>

      <Float speed={0.9} floatIntensity={0.35} rotationIntensity={0.2}>
        <FloatingOcta position={[1.5, 4, -2]} speed={0.19} scale={0.4} />
      </Float>

      <Float speed={1.3} floatIntensity={0.5} rotationIntensity={0.12}>
        <FloatingOcta position={[-1, -4, -3]} speed={0.25} scale={0.3} />
      </Float>
    </>
  )
}
