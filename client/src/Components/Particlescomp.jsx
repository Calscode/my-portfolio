import React, { useEffect, useRef } from "react";

export default function ParticlesComponent() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.particlesJS && ref.current) {
      window.particlesJS.load(
        ref.current.id,
        "/particles.json",
        () => {
          console.log("particles.js config loaded");
        }
      );
    }
  }, []);

  return (
    <div
      id="particles-js"
      ref={ref}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
}