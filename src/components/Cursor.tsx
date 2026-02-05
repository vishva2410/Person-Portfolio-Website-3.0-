import { motion, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export const Cursor = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const lastClickRef = useRef(0);

    const springConfig = { stiffness: 500, damping: 28 };
    const x = useSpring(position.x, springConfig);
    const y = useSpring(position.y, springConfig);

    useEffect(() => {
        // Make cursor visible after first mouse move
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const handleMouseDown = () => {
            setIsClicking(true);
            // Easter egg: Click counter
            const now = Date.now();
            if (now - lastClickRef.current < 1000) {
                setClickCount(prev => prev + 1);
            } else {
                setClickCount(1);
            }
            lastClickRef.current = now;
        };

        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('role') === 'button' ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = () => {
            setIsHovering(false);
        };

        // Start tracking immediately
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [isVisible]);

    // Hide on touch devices
    if (typeof window !== 'undefined' &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
        return null;
    }

    return (
        <>
            {/* Main cursor - sharp square, always visible */}
            <motion.div
                className="fixed pointer-events-none z-[9999]"
                style={{
                    left: 0,
                    top: 0,
                    x,
                    y,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0,
                }}
                transition={{ duration: 0.15 }}
            >
                <motion.div
                    animate={{
                        width: isHovering ? 32 : isClicking ? 6 : 10,
                        height: isHovering ? 32 : isClicking ? 6 : 10,
                        rotate: isHovering ? 45 : 0,
                        borderWidth: isHovering ? 2 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="bg-white border-white"
                    style={{ mixBlendMode: 'difference' }}
                />
            </motion.div>

            {/* Crosshair lines */}
            <motion.div
                className="fixed pointer-events-none z-[9998]"
                style={{
                    left: 0,
                    top: 0,
                    x,
                    y,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{ opacity: isVisible && !isHovering ? 0.4 : 0 }}
            >
                <div className="relative">
                    <div className="absolute w-px h-3 bg-neutral-400 left-0 -top-5" />
                    <div className="absolute w-px h-3 bg-neutral-400 left-0 top-2" />
                    <div className="absolute h-px w-3 bg-neutral-400 top-0 -left-5" />
                    <div className="absolute h-px w-3 bg-neutral-400 top-0 left-2" />
                </div>
            </motion.div>

            {/* Easter egg: Click counter badge */}
            {clickCount >= 10 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed bottom-4 left-4 px-3 py-1 bg-neutral-900 border border-neutral-600 text-neutral-300 text-xs font-mono z-50"
                >
                    CLICKS: {clickCount} 🖱️
                </motion.div>
            )}
        </>
    );
};
