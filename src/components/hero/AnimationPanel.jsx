import { useEffect, useRef } from "react";
import { ashAnimation } from "./ashAnimation";

/**
 * @description AnimationPanel component that renders a canvas element for the ash animation.
 * @param {Function} useRef - Hook to create a mutable ref object.
 * @param {Function} useEffect - Hook to perform side effects in function components.
 * @param {Function} ashAnimation - Function to initialize the ash animation on the canvas.
 * @returns {JSX.Element} <AnimationPanel /> - The rendered animation panel component.
 */

const AnimationPanel = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize the ash animation
    // Mount the canvas to the DOM
    if (!canvasRef.current) return;
    const cleanup = ashAnimation(canvasRef.current);

    // Cleanup on component unmount
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div className="relative h-screen w-screen bg-forgeGradient dark:bg-forgeGradientDark pointer-events-none">
      <canvas
        id="ashCanvas"
        ref={canvasRef}
        className="absolute left-0 top-0 h-full w-full pointer-events-none"
      ></canvas>
    </div>
  );
};

export default AnimationPanel;
