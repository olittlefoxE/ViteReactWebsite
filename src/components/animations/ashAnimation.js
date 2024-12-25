export function ashAnimation(canvas) {
  const ctx = canvas.getContext("2d");

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Minimum speed
  const minSpeedY = 1; // Minimum upward speed
  const minSpeedX = 0.1; // Minimum horizontal speed

  class AshParticle {
    constructor() {
      this.position = {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
      };
      this.velocity = {
        x: Math.random() * 0.5 - 0.25 + minSpeedX,
        y: -(Math.random() * 2 + 1) + minSpeedY,
      };
      this.size = Math.random() * 3 + 1;
      this.opacity = Math.random() * 0.8 + 0.2;
    }

    update() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // Respawn particle at the bottom when it exits the top
      if (this.position.y < 0) {
        this.position.y = canvas.height + Math.random() * 100;
        this.position.x = Math.random() * canvas.width;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 200, 200, ${this.opacity})`;
      ctx.fill();
    }
  }

  const particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push(new AshParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const particle of particles) {
      particle.update();
      particle.draw();
    }
    requestAnimationFrame(animate);
  }

  animate();

  return () => {
    window.removeEventListener("resize", resizeCanvas);
    cancelAnimationFrame(animate);
  };
}
