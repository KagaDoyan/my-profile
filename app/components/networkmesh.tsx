'use client';
import React, { useEffect, useRef, useState } from "react";

interface NetworkMeshLayoutProps {
  children: React.ReactNode;
  dotColor?: string; // Color of the dots
  lineColor?: string; // Color of the connecting lines
  speed?: number; // Animation speed
  dotCount?: number; // Number of dots to display
}

const NetworkMeshLayout: React.FC<NetworkMeshLayoutProps> = ({
  children,
  dotColor = "rgba(0, 0, 255, 0.8)", // Default: Blue dots
  lineColor = "rgba(0, 0, 255, 0.5)", // Default: Blue lines
  speed = 0.5, // Default: Moderate speed
  dotCount = 100, // Default: 100 dots
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<{ x: number; y: number; vx: number; vy: number }[]>([]);

  // Function to adjust canvas dimensions and scale context for high-DPI screens
  const adjustCanvasSize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    // Set CSS dimensions (for layout)
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
  };

  useEffect(() => {
    adjustCanvasSize();
    window.addEventListener("resize", adjustCanvasSize);
    return () => window.removeEventListener("resize", adjustCanvasSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const maxDistance = 150;

    // Generate random points based on `dotCount` prop
    const generateRandomPoints = () => {
      pointsRef.current = [];
      for (let i = 0; i < dotCount; i++) {
        pointsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
        });
      }
    };

    generateRandomPoints();

    const drawMesh = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < pointsRef.current.length; i++) {
        for (let j = i + 1; j < pointsRef.current.length; j++) {
          const dx = pointsRef.current[i].x - pointsRef.current[j].x;
          const dy = pointsRef.current[i].y - pointsRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const alpha = 1 - distance / maxDistance;
            ctx.beginPath();
            ctx.moveTo(pointsRef.current[i].x, pointsRef.current[i].y);
            ctx.lineTo(pointsRef.current[j].x, pointsRef.current[j].y);
            // Adjust alpha dynamically
            ctx.strokeStyle = `${lineColor.replace("0.5", alpha.toString())}`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw points
      pointsRef.current.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      });
    };

    const updatePoints = () => {
      pointsRef.current.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
      });
    };

    const animate = () => {
      updatePoints();
      drawMesh();
      requestAnimationFrame(animate);
    };

    animate();
  }, [dotColor, lineColor, speed, dotCount]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0"></canvas>
      <div className="relative z-10 overflow-y-scroll h-full">
        {children}
      </div>
    </div>
  );
};

export default NetworkMeshLayout;
