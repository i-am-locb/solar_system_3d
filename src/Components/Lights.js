import React from "react";

export default function Lights() {
  let dot = 1.25
  return (
    <>
      {/* Global Light */}
      <ambientLight intensity={0.15} />
      {/* Planets Light */}
      <pointLight position={[0, 0, 0]} />
      {/* Sun Light */}
      <pointLight
        color="#f6f3ea"
        position={[dot, 0, 0]}
        intensity={2}
        distance={dot}
      />
      <pointLight
        color="#f6f3ea"
        position={[0, dot, 0]}
        intensity={2}
        distance={dot}
      />
      <pointLight
        color="#f6f3ea"
        position={[0, 0, dot]}
        intensity={2}
        distance={dot}
      />
      <pointLight
        color="#f6f3ea"
        position={[-dot, 0, 0]}
        intensity={2}
        distance={dot}
      />
      <pointLight
        color="#f6f3ea"
        position={[0, -dot, 0]}
        intensity={2}
        distance={dot}
      />
      <pointLight
        color="#f6f3ea"
        position={[0, 0, -dot]}
        intensity={2}
        distance={dot}
      />
    </>
  );
}
