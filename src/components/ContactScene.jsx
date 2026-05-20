import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function Ring({ position, radius, speed, opacity }) {
  const ref = useRef()
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * speed * 0.5
    ref.current.rotation.y += delta * speed * 0.8
    ref.current.rotation.z += delta * speed
  })
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[radius, 0.012, 4, 80]} />
      <meshBasicMaterial color="#e8ff00" transparent opacity={opacity} />
    </mesh>
  )
}

function RingCluster({ position }) {
  return (
    <Float speed={1.2} floatIntensity={0.6} rotationIntensity={0.2}>
      <group position={position}>
        <Ring position={[0, 0, 0]} radius={3.0} speed={0.35} opacity={0.08} />
        <Ring position={[0, 0, 0]} radius={2.2} speed={0.55} opacity={0.11} />
        <Ring position={[0, 0, 0]} radius={1.5} speed={0.75} opacity={0.14} />
        <Ring position={[0, 0, 0]} radius={0.9} speed={1.0}  opacity={0.16} />
      </group>
    </Float>
  )
}

export default function ContactScene() {
  return (
    <>
      <RingCluster position={[3.5, 0, 0]} />

      <Float speed={1.0} floatIntensity={0.5} rotationIntensity={0.15}>
        <group position={[-5, 1, -2]}>
          <Ring position={[0, 0, 0]} radius={1.8} speed={0.4}  opacity={0.07} />
          <Ring position={[0, 0, 0]} radius={1.1} speed={0.65} opacity={0.09} />
        </group>
      </Float>
    </>
  )
}
