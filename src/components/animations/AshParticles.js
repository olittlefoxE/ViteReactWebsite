export class AshParticle {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.position = {
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 100,
    };
    this.velocity = {
      x: Math.random() * 0.5 - 0.25, // Slight horizontal drift
      y: -(Math.random() * 2 + 1), // Upward movement
    };
    this.size = Math.random() * 3 + 1; // Random size
    this.opacity = Math.random() * 0.8 + 0.2; // Semi-transparent
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Respawn particle at the bottom when it exits the top
    if (this.position.y < 0) {
      this.position.y = this.canvas.height + Math.random() * 100;
      this.position.x = Math.random() * this.canvas.width;
    }
  }

  draw() {
    const { ctx, position, size, opacity } = this;
    ctx.beginPath();
    ctx.arc(position.x, position.y, size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(200, 200, 200, ${opacity})`; // Light gray
    ctx.fill();
  }
}
