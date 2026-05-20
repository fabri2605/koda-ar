# KODA (AR) — Sitio web con 3D

Sitio web de portafolio y servicios para **KODA (AR)**, productor y DJ de techno/electrónica argentino. Permite a músicos y sellos contactar a KODA para contratar servicios de mezcla, masterización, stem mastering, feedback de tracks y co-producción. El sitio presenta el trabajo del artista (tracks en SoundCloud), su historia, los servicios disponibles y un formulario de contacto directo.

La particularidad visual es el uso de escenas 3D interactivas con **Three.js** en todas las secciones, generadas con geometrías wireframe animadas en tiempo real que refuerzan la estética techno/industrial del artista.

---

## Resumen de secciones

| Sección | Contenido | 3D |
|---|---|---|
| **Hero** | Nombre del artista, tagline, CTAs | Icosaedros, toros, partículas, grilla, barras de audio |
| **About** | Biografía, foto, links a redes | — |
| **Services** | 5 servicios detallados con lo que incluyen | Torus knot + octaedros flotantes |
| **Music** | 3 tracks embebidos de SoundCloud | Ondas de forma de audio animadas + barras de frecuencia |
| **Contact** | Formulario que genera un email + datos de contacto | Anillos concéntricos giratorios |

---

## Cómo correr el proyecto

### Requisitos

- Node.js 18 o superior
- npm

### Pasos

```bash
# 1. Clonar el repositorio
git clone <url-del-repo>
cd koda-3d

# 2. Instalar dependencias
npm install

# 3. Correr en modo desarrollo
npm run dev
```

El servidor de desarrollo queda disponible en `http://localhost:5173` con hot-reload automático.

```bash
# Compilar para producción
npm run build

# Previsualizar el build de producción localmente
npm run preview
```

---

## Cómo se creó

### 1. Scaffolding inicial

Se creó el proyecto con Vite usando el template de React:

```bash
npm create vite@latest koda-3d -- --template react
cd koda-3d
npm install
```

### 2. Instalación de Three.js

Se agregaron las librerías necesarias para las escenas 3D:

```bash
npm install three @react-three/fiber @react-three/drei
```

- **three** — motor de gráficos 3D WebGL
- **@react-three/fiber** — renderer de Three.js para React (R3F)
- **@react-three/drei** — helpers y abstracciones para R3F (Float, etc.)

### 3. Estructura del proyecto

```
src/
├── assets/
│   ├── PRESKIT KODA10.jpg    # Foto hero
│   └── PRESKIT KODA11.jpg    # Foto about
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx              # Sección hero con Canvas 3D
│   ├── HeroScene.jsx         # Escena 3D del hero
│   ├── About.jsx
│   ├── Services.jsx          # Sección servicios con Canvas 3D
│   ├── ServicesScene.jsx     # Torus knot + octaedros flotantes
│   ├── Music.jsx             # Sección música con Canvas 3D
│   ├── MusicScene.jsx        # Ondas de audio animadas
│   ├── Contact.jsx           # Formulario con Canvas 3D
│   ├── ContactScene.jsx      # Anillos concéntricos giratorios
│   └── Footer.jsx
├── App.jsx
├── App.css
├── index.css                 # Variables CSS, tipografía, layout
└── main.jsx
```

### 4. Sistema de diseño

Se definieron variables CSS globales en `index.css` para mantener coherencia visual:

- `--black: #0a0a0a` — fondo principal
- `--dark: #111111` — fondo de secciones alternas
- `--accent: #e8ff00` — color de acento amarillo/verde neón
- `--font-mono: 'Space Mono'` — tipografía monospace para títulos y labels

### 5. Integración de escenas 3D

Cada sección con 3D sigue el mismo patrón: un `<Canvas>` posicionado en `absolute` detrás del contenido con `gl={{ alpha: true }}` para fondo transparente, y el contenido real en un div con `position: relative` y `zIndex: 1` encima.

```jsx
<section style={{ position: 'relative', overflow: 'hidden' }}>
  {/* Canvas 3D de fondo */}
  <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
    <Canvas gl={{ alpha: true }} style={{ background: 'transparent' }}>
      <Suspense fallback={null}>
        <MiEscena />
      </Suspense>
    </Canvas>
  </div>

  {/* Contenido encima */}
  <div style={{ position: 'relative', zIndex: 1 }} className="container">
    ...
  </div>
</section>
```

### 6. Animaciones 3D

Las animaciones se hacen con el hook `useFrame` de R3F, que corre en el loop de requestAnimationFrame sin causar re-renders de React:

```jsx
const ref = useRef()
useFrame((_, delta) => {
  ref.current.rotation.x += delta * speed
  ref.current.rotation.y += delta * speed * 0.8
})
```

El parámetro `delta` (tiempo en segundos desde el frame anterior) garantiza que la velocidad sea consistente independientemente del framerate.

### 7. Formulario de contacto

El formulario construye el cuerpo del email con los datos ingresados, lo copia al portapapeles y abre el cliente de email con `mailto:` prellenado. No requiere backend.

---

## Stack

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18 | UI y componentes |
| Vite | 5 | Bundler y dev server |
| Three.js | 0.184 | Motor 3D WebGL |
| @react-three/fiber | 8 | React renderer para Three.js |
| @react-three/drei | 9 | Helpers 3D (Float, etc.) |
