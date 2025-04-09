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

class EmberParticle {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 10;
    this.size = Math.random() * 4 + 2;
    this.speedY = -(Math.random() * 1.5 + 1); // Langsamere Aufstiegsgeschwindigkeit
    this.speedX = (Math.random() - 0.5) * 1; // Reduzierte horizontale Bewegung
    this.opacity = Math.random() * 0.8 + 0.2;
    this.color = `rgba(255, ${Math.random() * 100 + 155}, 0, ${this.opacity})`;
    this.life = 2; // Längere Lebensdauer
    this.maxLife = 2;
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.life -= 0.004; // Langsamerer Verfall
    
    // Smooth opacity transition
    this.opacity = (this.life / this.maxLife) * 0.8;
    this.color = `rgba(255, ${Math.random() * 100 + 155}, 0, ${this.opacity})`;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export const activateForgeEffect = () => {
  const canvas = document.querySelector('#ashCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const embers = [];
  let isActive = true;

  // Initiale Partikel
  for (let i = 0; i < 30; i++) {
    embers.push(new EmberParticle(canvas));
  }

  document.documentElement.classList.add('forge-active');

  const animate = () => {
    if (!isActive) return;

    // Kontinuierlich neue Partikel spawnen
    if (embers.length < 100) { // Maximale Anzahl von Partikeln
      if (Math.random() < 0.1) { // 10% Chance pro Frame
        embers.push(new EmberParticle(canvas));
      }
    }

    // Aktualisiere und zeichne bestehende Partikel
    for (let i = embers.length - 1; i >= 0; i--) {
      const ember = embers[i];
      ember.update();
      ember.draw(ctx);
      
      if (ember.life <= 0 || ember.y < -50) {
        embers.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  };

  animate();

  // Reset nach 60 Sekunden
  setTimeout(() => {
    isActive = false;
    document.documentElement.classList.remove('forge-active');
  }, 60000);
};
