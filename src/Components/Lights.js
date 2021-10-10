import React from "react";

export default function Lights() {
  return (
    <>
      {/* Global Light */}
      <ambientLight intensity={0.15} />
      {/* Planets Light */}
      <pointLight position={[0, 0, 0]} />
      {/* Sun Light */}
      <pointLight
        color="#f6f3ea"
        position={[5, 0, 0]}
        intensity={2}
        distance={6}
      />
      <pointLight
        color="#f6f3ea"
        position={[0, 5, 0]}
        intensity={2}
        distance={6}
      />
      <pointLight
        color="#f6f3ea"
        position={[0, 0, 5]}
        intensity={2}
        distance={6}
      />
      <pointLight
        color="#f6f3ea"
        position={[-5, 0, 0]}
        intensity={2}
        distance={6}
      />
      <pointLight
        color="#f6f3ea"
        position={[0, -5, 0]}
        intensity={2}
        distance={6}
      />
      <pointLight
        color="#f6f3ea"
        position={[0, 0, -5]}
        intensity={2}
        distance={6}
      />
    </>
  );
}
