import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text, Float, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const StationHero = () => {
    const { viewport } = useThree();
    const sphereRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
            sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;

            const mouseX = state.mouse.x * 0.3;
            const mouseY = state.mouse.y * 0.3;
            sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, 1.8 + mouseX, 0.05);
            sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, mouseY, 0.05);
        }
    });

    return (
        <group position={[0, 0, 0]}>

            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
                <Icosahedron args={[1, 4]} ref={sphereRef} position={[1.8, 0, -1.5]}>
                    <MeshDistortMaterial
                        color="#444"
                        wireframe
                        distort={0.25}
                        speed={1.5}
                        roughness={0}
                    />
                </Icosahedron>
            </Float>

            <group position={[-1.2, 0, 0]}>
                <Text
                    fontSize={0.5}
                    letterSpacing={-0.03}
                    color="#EAEAEA"
                    anchorX="left"
                    anchorY="middle"
                    position={[0, 0.25, 0]}
                >
                    VISHVA
                </Text>
                <Text
                    fontSize={0.5}
                    letterSpacing={-0.03}
                    color="#EAEAEA"
                    anchorX="left"
                    anchorY="middle"
                    position={[0, -0.25, 0]}
                >
                    TEJA G.
                </Text>

                <Text
                    fontSize={0.08}
                    color="#666"
                    anchorX="left"
                    anchorY="middle"
                    position={[0.02, -0.6, 0]}
                >
                    ML/AI ENGINEER | FULL STACK | DATA SCIENCE
                </Text>

                <Text
                    fontSize={0.06}
                    color="#444"
                    anchorX="left"
                    anchorY="middle"
                    position={[0.02, -0.75, 0]}
                >
                    B.Tech Computer Science | Vardhaman College of Engineering
                </Text>
            </group>

        </group>
    );
};
