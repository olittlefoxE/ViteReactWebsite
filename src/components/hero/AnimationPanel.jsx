import { useEffect, useRef } from "react";
import { ashAnimation } from "./ashAnimation";

const AnimationPanel = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize the ash animation
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
