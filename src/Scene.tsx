import { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll, Environment } from '@react-three/drei';
import { StationHero } from './components/StationHero';
import { StationProjects } from './components/StationProjects';
import { StationSkills } from './components/StationSkills';
import { StationContact } from './components/StationContact';
import * as THREE from 'three';

const Sections = () => {
    const { viewport } = useThree();
    const scroll = useScroll();
    const groupRef = useRef<THREE.Group>(null);

    // Calculate section spacing based on viewport height
    const sectionHeight = viewport.height;

    useFrame(() => {
        if (groupRef.current) {
            // Scroll offset is 0 to 1, multiply by total content height
            const totalHeight = sectionHeight * 3; // 4 sections = 3 gaps
            groupRef.current.position.y = scroll.offset * totalHeight;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Hero at origin */}
            <group position={[0, 0, 0]}>
                <StationHero />
            </group>

            {/* Projects one section down */}
            <group position={[0, -sectionHeight, 0]}>
                <StationProjects />
            </group>

            {/* Skills two sections down */}
            <group position={[0, -sectionHeight * 2, 0]}>
                <StationSkills />
            </group>

            {/* Contact three sections down */}
            <group position={[0, -sectionHeight * 3, 0]}>
                <StationContact />
            </group>
        </group>
    );
};

export const Scene = () => {
    return (
        <>
            <ambientLight intensity={0.7} />
            <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={0.8}
                castShadow
            />
            <pointLight position={[-10, -10, -10]} intensity={0.2} />
            <Environment preset="city" />

            <ScrollControls pages={4} damping={0.3} distance={1}>
                <Scroll>
                    <Sections />
                </Scroll>
            </ScrollControls>
        </>
    );
};
