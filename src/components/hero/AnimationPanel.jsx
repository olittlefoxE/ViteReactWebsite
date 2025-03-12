import { useEffect, useRef } from "react";
import { ashAnimation } from "../common/ashAnimation";

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
    <div className="relative h-[calc(100vh-11vh)] w-full bg-forgeGradient dark:bg-forgeGradientDark">
      <canvas
        ref={canvasRef}
        className="absolute left-0 top-0 h-full w-full"
      ></canvas>
    </div>
  );
};

export default AnimationPanel;
