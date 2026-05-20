import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function RotatingIcosahedron({ position, scale, speed }) {
  const ref = useRef()
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * speed * 0.6
    ref.current.rotation.y += delta * speed
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#e8ff00" wireframe transparent opacity={0.55} />
    </mesh>
  )
}

function RotatingTorus({ position, scale, speed }) {
  const ref = useRef()
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * speed * 0.4
    ref.current.rotation.z += delta * speed * 0.7
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <torusGeometry args={[1, 0.3, 8, 24]} />
      <meshBasicMaterial color="#e8ff00" wireframe transparent opacity={0.3} />
    </mesh>
  )
}

function Particles() {
  const count = 400
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 30
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])

  const ref = useRef()
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#e8ff00" size={0.04} transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

function GridFloor() {
  return (
    <gridHelper
      args={[40, 40, '#222222', '#1a1a1a']}
      position={[0, -4, 0]}
      rotation={[0, 0, 0]}
    />
  )
}

function AudioBars() {
  const heights = useMemo(() => [1.2, 2.1, 0.8, 1.8, 2.5, 1.0, 1.6, 2.2, 0.9, 1.4, 2.0, 1.1], [])
  const refs = useRef([])

  useFrame(({ clock }) => {
    refs.current.forEach((mesh, i) => {
      if (!mesh) return
      const t = clock.elapsedTime
      const h = heights[i] * (0.6 + 0.4 * Math.abs(Math.sin(t * 1.5 + i * 0.7)))
      mesh.scale.y = h
      mesh.position.y = h / 2 - 4
    })
  })

  return (
    <group>
      {heights.map((h, i) => (
        <mesh
          key={i}
          ref={el => (refs.current[i] = el)}
          position={[-5.5 + i * 1, h / 2 - 4, -8]}
        >
          <boxGeometry args={[0.4, 1, 0.4]} />
          <meshBasicMaterial color="#e8ff00" transparent opacity={0.25} />
        </mesh>
      ))}
    </group>
  )
}

export default function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <RotatingIcosahedron position={[2.5, 0, -3]} scale={2} speed={0.2} />
      </Float>

      <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.3}>
        <RotatingTorus position={[-3, 1.5, -5]} scale={0.9} speed={0.15} />
      </Float>

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <RotatingIcosahedron position={[-2, -2, -6]} scale={0.7} speed={0.3} />
      </Float>

      <Float speed={1.0} rotationIntensity={0.2} floatIntensity={0.4}>
        <RotatingTorus position={[4, -1.5, -7]} scale={0.6} speed={0.25} />
      </Float>

      <Particles />
      <GridFloor />
      <AudioBars />
    </>
  )
}
