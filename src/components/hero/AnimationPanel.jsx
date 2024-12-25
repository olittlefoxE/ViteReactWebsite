import React, { useEffect, useRef, useState } from "react";
import { ScrollButton } from "./ScrollButton";
import { boidsAnimation } from "../animations/boidsAnimation";
import { ashAnimation } from "../animations/ashAnimation";

export const AnimationPanel = () => {
  const [animationType, setAnimationType] = useState("ash"); // Default animation is "ash"
  const canvasRef = useRef(null);

  useEffect(() => {
    let cleanup;

    // Switch animation based on the current type
    if (animationType === "boids") {
      cleanup = boidsAnimation(canvasRef.current);
    } else if (animationType === "ash") {
      cleanup = ashAnimation(canvasRef.current);
    }

    // Cleanup on component unmount or when the animationType changes
    return () => {
      if (cleanup) cleanup();
    };
  }, [animationType]);

  useEffect(() => {
    // Change animation every ...
    const interval = setInterval(() => {
      setAnimationType((prevType) => (prevType === "ash" ? "boids" : "ash"));
    }, 30000); // 30 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="relative h-screen w-screen bg-forgeGradient dark:bg-forgeGradientDark">
      <canvas
        ref={canvasRef}
        className="absolute left-0 top-0 h-full w-full"
      ></canvas>
      <ScrollButton targetId="toMain" />
    </div>
  );
};
