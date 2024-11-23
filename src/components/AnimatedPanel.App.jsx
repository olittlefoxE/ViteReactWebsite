import React, { useEffect, useRef } from "react";
export const AnimatedPanel = ({ title, content }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Function to resize the canvas to fill its parent
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    // Resize on mount and when the window resizes
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Boid {
      constructor() {
        this.position = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        };
        this.velocity = {
          x: Math.random() * 2.0 - 1,
          y: Math.random() * 2.0 - 1,
        };
        this.acceleration = { x: 0, y: 0 };
        this.maxSpeed = 2.15;
        this.maxForce = 0.03;
        this.neighborDist = 60;
      }

      applyForce(force) {
        this.acceleration.x += force.x;
        this.acceleration.y += force.y;
      }

      separation(boids) {
        let steer = { x: 0, y: 0 };
        let count = 0;
        for (let i = 0; i < boids.length; i++) {
          let d = this.distance(this.position, boids[i].position);
          if (d > 0 && d < this.neighborDist) {
            let diff = {
              x: this.position.x - boids[i].position.x,
              y: this.position.y - boids[i].position.y,
            };
            diff.x /= d;
            diff.y /= d;
            steer.x += diff.x;
            steer.y += diff.y;
            count++;
          }
        }
        if (count > 0) {
          steer.x /= count;
          steer.y /= count;
        }
        if (this.magnitude(steer) > 0) {
          steer = this.setMagnitude(steer, this.maxSpeed);
          steer.x -= this.velocity.x;
          steer.y -= this.velocity.y;
          steer = this.limit(steer, this.maxForce);
        }
        return steer;
      }

      alignment(boids) {
        let sum = { x: 0, y: 0 };
        let count = 0;
        for (let i = 0; i < boids.length; i++) {
          let d = this.distance(this.position, boids[i].position);
          if (d > 0 && d < this.neighborDist) {
            sum.x += boids[i].velocity.x;
            sum.y += boids[i].velocity.y;
            count++;
          }
        }
        if (count > 0) {
          sum.x /= count;
          sum.y /= count;
          sum = this.setMagnitude(sum, this.maxSpeed);
          let steer = {
            x: sum.x - this.velocity.x,
            y: sum.y - this.velocity.y,
          };
          steer = this.limit(steer, this.maxForce);
          return steer;
        } else {
          return { x: 0, y: 0 };
        }
      }

      cohesion(boids) {
        let sum = { x: 0, y: 0 };
        let count = 0;
        for (let i = 0; i < boids.length; i++) {
          let d = this.distance(this.position, boids[i].position);
          if (d > 0 && d < this.neighborDist) {
            sum.x += boids[i].position.x;
            sum.y += boids[i].position.y;
            count++;
          }
        }
        if (count > 0) {
          sum.x /= count;
          sum.y /= count;
          return this.seek(sum);
        } else {
          return { x: 0, y: 0 };
        }
      }

      seek(target) {
        let desired = {
          x: target.x - this.position.x,
          y: target.y - this.position.y,
        };
        desired = this.setMagnitude(desired, this.maxSpeed);
        let steer = {
          x: desired.x - this.velocity.x,
          y: desired.y - this.velocity.y,
        };
        steer = this.limit(steer, this.maxForce);
        return steer;
      }

      update() {
        this.velocity.x += this.acceleration.x;
        this.velocity.y += this.acceleration.y;
        this.velocity = this.limit(this.velocity, this.maxSpeed);
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // Wrap-around
        if (this.position.x > canvas.width) this.position.x = 0;
        if (this.position.x < 0) this.position.x = canvas.width;
        if (this.position.y > canvas.height) this.position.y = 0;
        if (this.position.y < 0) this.position.y = canvas.height;

        this.acceleration = { x: 0, y: 0 };
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
      }

      distance(a, b) {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
      }

      magnitude(vector) {
        return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
      }

      setMagnitude(vector, mag) {
        let m = this.magnitude(vector);
        if (m > 0) {
          vector.x = (vector.x / m) * mag;
          vector.y = (vector.y / m) * mag;
        }
        return vector;
      }

      limit(vector, max) {
        if (this.magnitude(vector) > max) {
          vector = this.setMagnitude(vector, max);
        }
        return vector;
      }
    }

    const boids = [];
    for (let i = 0; i < 120; i++) {
      boids.push(new Boid());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < boids.length; i++) {
        let separationForce = boids[i].separation(boids);
        let alignmentForce = boids[i].alignment(boids);
        let cohesionForce = boids[i].cohesion(boids);

        boids[i].applyForce(separationForce);
        boids[i].applyForce(alignmentForce);
        boids[i].applyForce(cohesionForce);

        boids[i].update();
        boids[i].draw();
      }
      requestAnimationFrame(animate);
    }

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animate);
    };
  }, []);


  return (
    <div className="relative m-4 rounded-lg bg-gray-800 p-8 text-white shadow-md">
      <h2 className="mb-4 text-xl font-bold">dadad</h2>
      <p className="mb-4 text-gray-300">dasdda</p>
      <canvas ref={canvasRef} className="h-[calc(100vh-2rem)] w-full"></canvas>
    </div>
  );
};
