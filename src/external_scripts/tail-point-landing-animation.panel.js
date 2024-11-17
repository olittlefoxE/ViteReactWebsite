/*
 * Script: by ChatGPT
 * Usage: front animation
 * Animation: Boids Algorithm - Tail Points
 */

const canvas = document.getElementById("animation-canvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

class Point {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.pointSize = Math.random() * 5 + 5; // Größere Punkte
    this.length = Math.random() * 500 + 150; // Längere Schweife
    this.angle = Math.random() * 2 * Math.PI; // Anfangswinkel
    this.speed = Math.random() * 0.3 + 0.2; // Langsamere Bewegung
    this.radius = Math.random() * 50 + 50; // Zufälliger Kreisradius
    this.directionChangeInterval = Math.random() * 100 + 50; // Zeit bis zur nächsten Richtungsänderung
    this.directionChangeCounter = 0;
    this.dx = Math.cos(this.angle) * this.speed;
    this.dy = Math.sin(this.angle) * this.speed;
    this.trail = []; // Array, um die Positionen des Schweifs zu speichern
    this.maxTrailLength = 50; // Längere Schweife
  }

  draw() {
    // Zeichne den Punkt
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.pointSize, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    // Zeichne den Schweif
    for (let i = 0; i < this.trail.length; i++) {
      const pos = this.trail[i];
      const opacity = (i + 1) / this.trail.length;
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      // Langsamerer Anstieg der Dicke des Schweifs
      ctx.lineWidth = ((i + 1) / this.trail.length) * this.pointSize;
      ctx.stroke();
    }
  }

  update() {
    // Bewegung im Kreis
    this.directionChangeCounter++;
    if (this.directionChangeCounter > this.directionChangeInterval) {
      this.angle += Math.random() * 0.6 - 0.2; // Zufällige Richtungsänderung
      this.radius = Math.random() * 60 + 50; // Neuer zufälliger Radius
      this.directionChangeInterval = Math.random() * 100 + 50; // Neue Zeit bis zur nächsten Änderung
      this.directionChangeCounter = 0;
    }

    // Kreisbewegung berechnen
    this.x += Math.cos(this.angle) * this.radius * 0.01;
    this.y += Math.sin(this.angle) * this.radius * 0.01;

    // Füge die aktuelle Position dem Schweif hinzu
    this.trail.push({ x: this.x, y: this.y });

    // Begrenze die Länge des Schweifs
    if (this.trail.length > this.maxTrailLength) {
      this.trail.shift();
    }

    // Überprüfen, ob der Punkt außerhalb des Bildschirms ist
    if (
      this.x < 0 ||
      this.x > canvas.width ||
      this.y < 0 ||
      this.y > canvas.height
    ) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.trail = []; // Reset des Schweifs
      this.angle = Math.random() * 2 * Math.PI;
      this.radius = Math.random() * 50 + 50;
    }

    this.draw();
  }
}

const points = [];
for (let i = 0; i < 50; i++) {
  points.push(new Point());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  points.forEach((point) => point.update());
  requestAnimationFrame(animate);
}

animate();
