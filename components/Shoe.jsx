import styles from "../styles/Home.module.css";

import { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export function Shoe(props) {
  const { nodes, materials } = useGLTF("/shoe.gltf");
  return (
    <group {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.customColors.laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customColors.mesh}
      />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customColors.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customColors.stripes}
      />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  );
}

export default function Home() {
  const [laces, setLaces] = useState("#fff");
  const [sole, setSole] = useState("#fff");
  const [mesh, setMesh] = useState("#fff");
  const [stripes, setStripes] = useState("#fff");

  const [rotate, setRotate] = useState(false);
  const [hurryUpMan, setHurryUpMan] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.canvas}>
          <Canvas width={800} height={600}>
            <Suspense fallback={null}>
              <ambientLight />
              <spotLight
                intensity={0.9}
                angle={0.4}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow={true}
              />
              <Shoe
                customColors={{
                  mesh: mesh,
                  stripes: stripes,
                  sole: sole,
                  laces: laces,
                }}
              />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                zoomSpeed={0.5}
                rotateSpeed={0.5}
                autoRotate={rotate}
                minDistance={4}
                maxDistance={9}
              />
            </Suspense>
          </Canvas>
        </div>
        <div className={styles.optionsContainer}>
          <div className={styles.colorPairs}>
            <label for="mesh">Upper</label>
            <input
              type="color"
              id="mesh"
              name="mesh"
              value={mesh}
              onChange={(e) => setMesh(e.target.value)}
            />
          </div>
          <div className={styles.colorPairs}>
            <label for="stripes">Stripes</label>
            <input
              type="color"
              id="stripes"
              name="stripes"
              value={stripes}
              onChange={(e) => setStripes(e.target.value)}
            />
          </div>
          <div className={styles.colorPairs}>
            <label for="sole">Sole</label>
            <input
              type="color"
              id="sole"
              name="sole"
              value={sole}
              onChange={(e) => setSole(e.target.value)}
            />
          </div>
          <div className={styles.colorPairs}>
            <label for="laces">Laces</label>
            <input
              type="color"
              id="laces"
              name="laces"
              value={laces}
              onChange={(e) => setLaces(e.target.value)}
            />
          </div>
        </div>
        <button onClick={() => setRotate(!rotate)}>Rotate</button>
      </div>
    </div>
  );
}
