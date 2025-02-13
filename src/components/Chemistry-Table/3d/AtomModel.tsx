import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import { Element } from '../informations/types';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface AtomModelProps {
  element: Element;
}

const Electron: React.FC<{ radius: number, speed: number, initialAngle: number }> = ({ radius, speed, initialAngle }) => {
  const ref = useRef<THREE.Group>(null);
  const lastTime = useRef(0);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const currentTime = clock.getElapsedTime();
      const deltaTime = currentTime - lastTime.current;
      lastTime.current = currentTime;
      
      const angle = initialAngle + currentTime * speed;
      ref.current.position.x = Math.cos(angle) * radius;
      ref.current.position.y = Math.sin(angle) * radius;
      ref.current.position.z = 0;
    }
  });

  return (
    <group ref={ref}>
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#00ffff" 
          emissiveIntensity={1}
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
};

const ElectronShell: React.FC<{ radius: number, electrons: { angle: number, speed: number }[] }> = ({ radius, electrons }) => {
  const points = useMemo(() => 
    new Array(electrons.length + 1).fill(0).map(() => new THREE.Vector3()),
    [electrons.length]
  );

  useFrame(({ clock }) => {
    electrons.forEach((electron, i) => {
      const angle = electron.angle + clock.getElapsedTime() * electron.speed;
      points[i].set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        0
      );
    });
    // Close the loop
    if (points.length > 1) {
      points[points.length - 1].copy(points[0]);
    }
  });

  return (
    <group>
      {electrons.length > 1 && (
        <Line
          points={points}
          color="#00ffff"
          lineWidth={1}
          transparent
          opacity={0.3}
        />
      )}
      {electrons.map((electron, i) => (
        <Electron
          key={i}
          radius={radius}
          speed={electron.speed}
          initialAngle={electron.angle}
        />
      ))}
    </group>
  );
};

export const AtomModel: React.FC<AtomModelProps> = ({ element }) => {
  const [speed, setSpeed] = useState<number>(1);
  
  const nucleusSize = Math.max(Math.log(element.number) * 0.3, 1);
  const particleSize = Math.max(nucleusSize / 3, 0.3);

  // Generate positions for protons and neutrons
  const nucleusParticles = useMemo(() => {
    const particles = [];
    const radius = nucleusSize * 0.8;
    
    // Helper function to get evenly distributed points on a sphere
    const getFibonacciSpherePoint = (i: number, n: number) => {
      const phi = Math.acos(1 - 2 * (i + 0.5) / n);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      
      return {
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi)
      };
    };

    // Add protons
    for (let i = 0; i < element.protons; i++) {
      const point = getFibonacciSpherePoint(i, element.protons);
      particles.push({
        position: new THREE.Vector3(point.x, point.y, point.z),
        type: 'proton'
      });
    }
    
    // Add neutrons with slight offset
    for (let i = 0; i < element.neutrons; i++) {
      const point = getFibonacciSpherePoint(i, element.neutrons);
      particles.push({
        position: new THREE.Vector3(point.x + 0.2, point.y + 0.2, point.z),
        type: 'neutron'
      });
    }
    
    return particles;
  }, [element.protons, element.neutrons, nucleusSize]);

  const electronShells = useMemo(() => {
    const shells = [];
    let remainingElectrons = element.electrons;
    
    const shellCapacities = [2, 8, 18, 32, 32, 18, 8];
    let shellIndex = 0;
    
    while (remainingElectrons > 0 && shellIndex < shellCapacities.length) {
      const maxElectrons = shellCapacities[shellIndex];
      const electronsInShell = Math.min(remainingElectrons, maxElectrons);
      const radius = (shellIndex + 1) * 3;
      
      const electrons = Array.from({ length: electronsInShell }, (_, i) => ({
        angle: (i / electronsInShell) * Math.PI * 2,
        speed: (1 / (shellIndex + 1) * 2) * speed
      }));
      
      shells.push({ electrons, radius });
      remainingElectrons -= electronsInShell;
      shellIndex++;
    }
    
    return shells;
  }, [element.electrons, speed]);

  const circlePoints = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle), Math.sin(angle), 0));
    }
    return points;
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#000']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Nucleus particles */}
        {nucleusParticles.map((particle, i) => (
          <Sphere 
            key={i}
            position={particle.position}
            args={[particleSize, 16, 16]}
          >
            <meshStandardMaterial 
              color={particle.type === 'proton' ? 'red' : 'blue'}
              emissive={particle.type === 'proton' ? 'red' : 'blue'}
              emissiveIntensity={0.2}
            />
          </Sphere>
        ))}

        {electronShells.map((shell, i) => (
          <group key={i}>
            <group scale={[shell.radius, shell.radius, shell.radius]}>
              <Line
                points={circlePoints}
                color="white"
                lineWidth={1}
                transparent
                opacity={0.2}
              />
            </group>
            <ElectronShell
              radius={shell.radius}
              electrons={shell.electrons}
            />
          </group>
        ))}

        <OrbitControls 
          enableZoom={true}
          minDistance={5}
          maxDistance={50}
        />
      </Canvas>
      <div style={{ 
        position: 'absolute', 
        bottom: '20px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        background: 'rgba(0,0,0,0.7)',
        padding: '10px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <span style={{ color: 'white' }}>Speed:</span>
        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          style={{ width: '100px' }}
        />
      </div>
    </div>
  );
}; 