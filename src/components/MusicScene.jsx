import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

const COUNT = 200

function Waveform({ yOffset, amplitude, freqX, speed, opacity }) {
  const attrRef = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3]     = (i / (COUNT - 1)) * 22 - 11
      arr[i * 3 + 2] = 0
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * speed
    for (let i = 0; i < COUNT; i++) {
      const x = positions[i * 3]
      positions[i * 3 + 1] =
        yOffset +
        Math.sin(x * freqX + t) * amplitude +
        Math.sin(x * freqX * 1.8 + t * 1.4) * amplitude * 0.35 +
        Math.sin(x * freqX * 0.5 + t * 0.7) * amplitude * 0.2
    }
    if (attrRef.current) attrRef.current.needsUpdate = true
  })

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          ref={attrRef}
          attach="attributes-position"
          count={COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#e8ff00" transparent opacity={opacity} />
    </line>
  )
}

function FreqBar({ x, baseHeight, index }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.elapsedTime
    const h = baseHeight * (0.5 + 0.5 * Math.abs(Math.sin(t * 1.3 + index * 0.5)))
    ref.current.scale.y = h
    ref.current.position.y = -1.5 + h * 0.5
  })
  return (
    <mesh ref={ref} position={[x, 0, -1]}>
      <boxGeometry args={[0.15, 1, 0.15]} />
      <meshBasicMaterial color="#e8ff00" transparent opacity={0.12} />
    </mesh>
  )
}

const BAR_COUNT = 18
const bars = Array.from({ length: BAR_COUNT }, (_, i) => ({
  x: (i / (BAR_COUNT - 1)) * 18 - 9,
  baseHeight: 0.6 + Math.random() * 2,
}))

export default function MusicScene() {
  return (
    <>
      <Waveform yOffset={0}    amplitude={0.75} freqX={0.65} speed={0.9}  opacity={0.55} />
      <Waveform yOffset={0.7}  amplitude={0.45} freqX={1.05} speed={0.7}  opacity={0.28} />
      <Waveform yOffset={-0.7} amplitude={0.4}  freqX={0.45} speed={1.15} opacity={0.18} />

      {bars.map((b, i) => (
        <FreqBar key={i} x={b.x} baseHeight={b.baseHeight} index={i} />
      ))}
    </>
  )
}
