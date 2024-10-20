import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, OrbitControls, Stars } from '@react-three/drei';
import { useLocation } from 'react-router-dom';
import { Vector3 } from "three";

// Component representing an individual electron in the atom
function Electron({ radius, speed, angle }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    // Update electron position in each frame
    const t = clock.getElapsedTime() * speed;
    ref.current.position.x = radius * Math.cos(t + angle);
    ref.current.position.z = radius * Math.sin(t + angle);
  });
  return (
      <mesh ref={ref}>
        <sphereGeometry args={[0.05, 16, 16]} /> {/* Small sphere representing the electron */}
        <meshStandardMaterial color="#00aaff" /> {/* Blue color for the electron */}
      </mesh>
  );
}

// Component representing the nucleus of the atom
function Nucleus() {
  return (
      <mesh>
        <sphereGeometry args={[0.1, 32, 32]} /> {/* Sphere geometry for the nucleus */}
        <meshStandardMaterial color="#ff5555" /> {/* Red color for the nucleus */}
      </mesh>
  );
}

// Component representing the circular shell where electrons orbit
function ElectronShell({ radius }) {
  const points = [];
  const segments = 64; // Number of segments to form the circle
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2; // Angle for each segment
    points.push([Math.cos(theta) * radius, 0, Math.sin(theta) * radius]); // Points on the circle
  }
  return (
      <Line
          points={points}
          color="white"
          lineWidth={1}
          transparent
          opacity={0.5} // Semi-transparent line
      />
  );
}

// Function to calculate the electron distribution across shells
export function shell(electrons) {
  const shellCapacity = [2, 8, 18, 32, 50, 72, 98]; // Max electrons in each shell
  let shells = [];
  let shellIndex = 0;

  while (electrons > 0 && shellIndex < shellCapacity.length) {
    const electronsInShell = Math.min(electrons, shellCapacity[shellIndex]); // Calculate electrons in current shell
    shells.push(electronsInShell);
    electrons -= electronsInShell;
    shellIndex++;
  }

  // Return string representing the electron count in each shell (e.g., "K2 L8 M18")
  return shells.map((num, index) => {
    const shellName = String.fromCharCode(75 + index); // K, L, M, etc.
    return shellName + num;
  }).join(' ');
}

// Function to generate the full electron configuration for an element
const generateElectronConfiguration = (electrons) => {
  const subshells = [
    { shell: "1s", maxElectrons: 2 },
    { shell: "2s", maxElectrons: 2 },
    { shell: "2p", maxElectrons: 6 },
    { shell: "3s", maxElectrons: 2 },
    { shell: "3p", maxElectrons: 6 },
    { shell: "4s", maxElectrons: 2 },
    { shell: "3d", maxElectrons: 10 },
    { shell: "4p", maxElectrons: 6 },
    { shell: "5s", maxElectrons: 2 },
    { shell: "4d", maxElectrons: 10 },
    { shell: "5p", maxElectrons: 6 },
    { shell: "6s", maxElectrons: 2 },
    { shell: "4f", maxElectrons: 14 },
    { shell: "5d", maxElectrons: 10 },
    { shell: "6p", maxElectrons: 6 },
    { shell: "7s", maxElectrons: 2 },
    { shell: "5f", maxElectrons: 14 },
    { shell: "6d", maxElectrons: 10 },
  ];

  let configuration = "";
  let remainingElectrons = electrons;

  // Calculate electron configuration by filling subshells in order
  subshells.forEach(subshell => {
    if (remainingElectrons > 0) {
      const usedElectrons = Math.min(subshell.maxElectrons, remainingElectrons);
      configuration += `${subshell.shell}${usedElectrons} `;
      remainingElectrons -= usedElectrons;
    }
  });

  return configuration.trim();
};

// Noble gas shorthand notation mapping
const nobleGases = {
  2: "[He]",
  10: "[Ne]",
  18: "[Ar]",
  36: "[Kr]",
  54: "[Xe]",
  86: "[Rn]"
};

// Function to generate the shorthand electron configuration using noble gases
const generateShortElectronConfiguration = (electrons) => {
  let nobleGasCore = "";

  // Find the highest noble gas core for shorthand notation
  Object.keys(nobleGases).forEach(key => {
    if (electrons >= key) {
      nobleGasCore = nobleGases[key];
    }
  });

  const remainingElectrons = electrons - Object.keys(nobleGases).reduce((prev, curr) => {
    return electrons >= curr ? curr : prev;
  }, 0);

  // Add remaining electron configuration after noble gas core
  const remainingConfig = generateElectronConfiguration(remainingElectrons);
  return `${nobleGasCore} ${remainingConfig}`.trim();
};

// Main component for rendering the 3D atom model
export default function Atom3DModel() {
  const location = useLocation(); // Accessing route state to get element data
  const element = location.state && location.state.element; // Extract element data
  const [speed, setSpeed] = useState(1); // State for electron speed

  if (!element) {
    return <div>No element data available.</div>; // Display message if no element data found
  }

  const { symbol, protons, neutrons, electrons, name, valenceelectrons, category } = element;

  const electronShells = []; // Array to store electron components
  const shellLines = []; // Array to store shell lines

  const shells = [2, 8, 18, 32, 50, 72, 98]; // Maximum electrons per shell
  let remainingElectrons = electrons;
  let shellNumber = 0;

  // Calculate the electron distribution and add components to display electrons and shell lines
  while (remainingElectrons > 0 && shellNumber < shells.length) {
    const electronsInShell = Math.min(remainingElectrons, shells[shellNumber]);
    const radius = 1 + shellNumber * 0.3; // Radius of the shell

    shellLines.push(
        <ElectronShell key={`shell-line-${shellNumber}`} radius={radius} />
    );

    // Add electron components for each electron in the shell
    for (let i = 0; i < electronsInShell; i++) {
      const angle = (i / electronsInShell) * Math.PI * 2; // Position electrons evenly around the shell
      electronShells.push(
          <Electron
              key={`shell-${shellNumber}-electron-${i}`}
              radius={radius}
              speed={speed}
              angle={angle}
          />
      );
    }
    remainingElectrons -= electronsInShell;
    shellNumber++;
  }

  // Generate short notation for non-noble gas elements
  let nobleGasProblem = "";
  if (category !== "noblegas") {
    nobleGasProblem = "Short notation of subshells: " + generateShortElectronConfiguration(electrons);
  }

  // Handler for speed slider changes
  const handleSpeedChange = (event) => {
    setSpeed(parseFloat(event.target.value));
  };

  return (
      <div className="h-screen bg-black">
        <Canvas camera={{ position: new Vector3(0, 1, 3) }}>
          <Stars /> {/* Background stars for the 3D view */}
          <ambientLight intensity={1} /> {/* Ambient light for general illumination */}
          <pointLight position={[10, 10, 10]} intensity={0.8} /> {/* Point light for highlighting the atom */}
          <Nucleus protons={protons} neutrons={neutrons} /> {/* Render the nucleus */}
          {shellLines} {/* Render electron shell lines */}
          {electronShells} {/* Render individual electrons */}
          <OrbitControls /> {/* Enable orbit controls to move around the 3D scene */}
        </Canvas>

        <div className="absolute top-4 left-4 text-white">
          {/* Information box overlay */}
          <h1 className="text-2xl font-bold">{symbol}</h1>
          <h2>Name: {name}</h2>
          <p>Protons: {protons}</p>
          <p>Neutrons: {neutrons}</p>
          <p>Electrons: {electrons}</p>
          <p>Valence electrons: {valenceelectrons}</p>
          <p>Shells: {shell(electrons)}</p>
          <p>Full notation of subshells: {generateElectronConfiguration(electrons)}</p>
          <p>{nobleGasProblem}</p>
          <div className="slidecontainer">
            <input
                type="range"
                min="0"
                max="2"
                step="0"
                value={speed}
                onChange={handleSpeedChange}
                className="slider"
            />
            <p>Electron Speed: {speed.toFixed(1)}</p>
          </div>
        </div>
      </div>
  );
}