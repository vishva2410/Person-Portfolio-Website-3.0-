import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface NeuralNetworkProps {
    className?: string;
}

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    pulsePhase: number;
    layer: number;
}

export const NeuralNetwork = ({ className = '' }: NeuralNetworkProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const nodesRef = useRef<Node[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number>();
    const [easterEggActive, setEasterEggActive] = useState(false);
    const clickCountRef = useRef(0);
    const lastClickTimeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Initialize nodes in a more structured neural network pattern
        const nodeCount = 80;
        const nodes: Node[] = [];
        const layers = 5;

        for (let i = 0; i < nodeCount; i++) {
            const layer = Math.floor(i / (nodeCount / layers));
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                pulsePhase: Math.random() * Math.PI * 2,
                layer,
            });
        }
        nodesRef.current = nodes;

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Easter egg: Triple click to activate "matrix mode"
        const handleClick = () => {
            const now = Date.now();
            if (now - lastClickTimeRef.current < 500) {
                clickCountRef.current++;
                if (clickCountRef.current >= 3) {
                    setEasterEggActive(prev => !prev);
                    clickCountRef.current = 0;
                }
            } else {
                clickCountRef.current = 1;
            }
            lastClickTimeRef.current = now;
        };
        canvas.addEventListener('click', handleClick);

        let time = 0;
        const animate = () => {
            if (!ctx || !canvas) return;
            time += 0.01;

            // Clear with slight trail effect for more visibility
            ctx.fillStyle = easterEggActive ? 'rgba(0, 5, 0, 0.1)' : 'rgba(10, 10, 10, 0.15)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const baseColor = easterEggActive ? { r: 0, g: 255, b: 100 } : { r: 180, g: 180, b: 180 };

            // Draw connections first (behind nodes)
            nodes.forEach((node, i) => {
                nodes.forEach((otherNode, j) => {
                    if (i >= j) return;
                    const dx = otherNode.x - node.x;
                    const dy = otherNode.y - node.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 200;

                    if (dist < maxDist) {
                        const opacity = (1 - dist / maxDist) * 0.6;
                        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.3 + 0.7;

                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(otherNode.x, otherNode.y);
                        ctx.strokeStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${opacity * pulse})`;
                        ctx.lineWidth = easterEggActive ? 1.5 : 0.8;
                        ctx.stroke();

                        // Data flow animation - particles along connections
                        if (dist < 150 && Math.random() > 0.98) {
                            const t = (time * 2) % 1;
                            const px = node.x + dx * t;
                            const py = node.y + dy * t;
                            ctx.beginPath();
                            ctx.arc(px, py, 2, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0.8)`;
                            ctx.fill();
                        }
                    }
                });
            });

            // Update and draw nodes
            nodes.forEach((node) => {
                // Update position
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off edges with sharp reflection
                if (node.x < 0) { node.x = 0; node.vx *= -1; }
                if (node.x > canvas.width) { node.x = canvas.width; node.vx *= -1; }
                if (node.y < 0) { node.y = 0; node.vy *= -1; }
                if (node.y > canvas.height) { node.y = canvas.height; node.vy *= -1; }

                // Mouse attraction/repulsion
                const dx = mouseRef.current.x - node.x;
                const dy = mouseRef.current.y - node.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200 && dist > 0) {
                    const force = (200 - dist) / 200 * 0.02;
                    node.vx += dx / dist * force;
                    node.vy += dy / dist * force;
                }

                // Clamp velocity
                const maxVel = 0.8;
                node.vx = Math.max(-maxVel, Math.min(maxVel, node.vx));
                node.vy = Math.max(-maxVel, Math.min(maxVel, node.vy));

                // Draw node with pulse effect
                const pulseSize = 2 + Math.sin(time * 3 + node.pulsePhase) * 1;
                const nodeOpacity = 0.6 + Math.sin(time * 2 + node.pulsePhase) * 0.3;

                // Outer glow
                ctx.beginPath();
                ctx.arc(node.x, node.y, pulseSize + 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${nodeOpacity * 0.1})`;
                ctx.fill();

                // Inner node - square for AI feel
                ctx.fillStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${nodeOpacity})`;
                ctx.fillRect(node.x - pulseSize / 2, node.y - pulseSize / 2, pulseSize, pulseSize);
            });

            // Draw grid overlay for tech feel
            ctx.strokeStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0.03)`;
            ctx.lineWidth = 1;
            const gridSize = 50;
            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('click', handleClick);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [easterEggActive]);

    return (
        <>
            <motion.canvas
                ref={canvasRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className={`fixed inset-0 pointer-events-auto ${className}`}
                style={{ zIndex: 0 }}
            />
            {/* Easter egg indicator */}
            {easterEggActive && (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed bottom-4 right-4 px-3 py-1 bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-mono z-50"
                >
                    MATRIX_MODE_ACTIVE
                </motion.div>
            )}
        </>
    );
};
