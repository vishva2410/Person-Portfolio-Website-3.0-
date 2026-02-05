import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Line, Float } from '@react-three/drei';
import * as THREE from 'three';

interface Node {
    label: string;
    position: [number, number, number];
    type: 'root' | 'exp' | 'tech' | 'research' | 'sub';
}

const nodes: Node[] = [
    { label: "Experience", position: [0, 1.2, 0], type: 'root' },
    { label: "CraftyourCareer", position: [-2, 0.2, 0], type: 'exp' },
    { label: "Data Analyst Intern", position: [-2.5, -0.5, 0], type: 'sub' },
    { label: "Dec 2024 - Mar 2025", position: [-1.5, -0.7, 0], type: 'sub' },

    { label: "Technical Skills", position: [2, 0.2, 0], type: 'tech' },
    { label: "Python / TensorFlow", position: [2.8, -0.5, 0], type: 'sub' },
    { label: "AWS (EC2, S3)", position: [1.5, -0.7, 0], type: 'sub' },
    { label: "React / Three.js", position: [2.5, 0.9, 0], type: 'sub' },

    { label: "Research", position: [0, -0.3, 0], type: 'research' },
    { label: "Green Morph Solutions", position: [0, -1, 0], type: 'sub' },
    { label: "IJSAT Vol.16, 2025", position: [0, -1.3, 0], type: 'sub' },
];

const connections: [number, number][] = [
    [0, 1], [1, 2], [1, 3],
    [0, 4], [4, 5], [4, 6], [4, 7],
    [0, 8], [8, 9], [9, 10]
];

export const StationSkills = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            const t = state.clock.getElapsedTime();
            groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.02;
        }
    });

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            <Text position={[0, 2, 0]} fontSize={0.3} color="#EAEAEA" letterSpacing={0.03}>
                THE CORE_
            </Text>

            <Text position={[0, 1.65, 0]} fontSize={0.08} color="#666">
                Experience & Skills Network
            </Text>

            {connections.map(([start, end], i) => (
                <Line
                    key={i}
                    points={[nodes[start].position, nodes[end].position]}
                    color="#333"
                    lineWidth={1.5}
                    transparent
                    opacity={0.5}
                />
            ))}

            {nodes.map((node, i) => (
                <Float key={i} speed={1.5} rotationIntensity={0.08} floatIntensity={0.1}>
                    <group position={node.position}>
                        <mesh>
                            <sphereGeometry args={[node.type === 'root' ? 0.15 : 0.08, 16, 16]} />
                            <meshStandardMaterial
                                color={node.type === 'root' ? "#EAEAEA" : node.type === 'sub' ? "#555" : "#888"}
                                emissive={node.type === 'root' ? "#222" : "#111"}
                            />
                        </mesh>
                        <Text
                            position={[0, node.type === 'root' ? 0.28 : 0.16, 0]}
                            fontSize={node.type === 'root' ? 0.12 : 0.07}
                            color="#EAEAEA"
                            anchorX="center"
                            anchorY="bottom"
                        >
                            {node.label}
                        </Text>
                    </group>
                </Float>
            ))}
        </group>
    );
};
