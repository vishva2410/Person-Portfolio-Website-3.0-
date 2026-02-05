import { useRef, useState } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

interface Project {
    title: string;
    description: string;
    details: string;
    color: string;
    position: [number, number, number];
}

const projects: Project[] = [
    {
        title: "OncoDetect",
        description: "Deep Learning Cancer Screening",
        details: "Python, TensorFlow, System Design",
        color: "#ff4d4d",
        position: [-2, 0, 0]
    },
    {
        title: "Bodha AI",
        description: "Real-time NLP Voice System",
        details: "LiveKit, WebSockets, NLP",
        color: "#4d94ff",
        position: [0, 0, 0]
    },
    {
        title: "Context-Aware Eraser",
        description: "Privacy Protection Tool",
        details: "YOLO, Flask, REST APIs",
        color: "#b366ff",
        position: [2, 0, 0]
    }
];

interface ProjectCardProps {
    project: Project;
    isActive: boolean;
    onClick: (e: ThreeEvent<MouseEvent>) => void;
}

const ProjectCard = ({ project, isActive, onClick }: ProjectCardProps) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            if (!isActive) {
                meshRef.current.rotation.y += delta * 0.15;
            } else {
                meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, 0, 0.08);
            }
        }
    });

    const scale = isActive ? 1.1 : hovered ? 1.03 : 1;

    return (
        <group
            position={project.position}
            scale={scale}
            onClick={onClick}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <mesh ref={meshRef}>
                <boxGeometry args={[1.5, 2.2, 0.08]} />
                <meshPhysicalMaterial
                    color={isActive ? "#1a1a1a" : "#0d0d0d"}
                    roughness={0.4}
                    metalness={0.6}
                    emissive={project.color}
                    emissiveIntensity={isActive ? 0.35 : hovered ? 0.18 : 0.08}
                    transparent
                    opacity={0.95}
                />
            </mesh>

            <Text
                position={[0, 0.5, 0.08]}
                fontSize={0.14}
                color="#fff"
                anchorX="center"
                maxWidth={1.3}
            >
                {project.title}
            </Text>

            <Text
                position={[0, 0.25, 0.08]}
                fontSize={0.07}
                color="#aaa"
                anchorX="center"
                maxWidth={1.3}
            >
                {project.description}
            </Text>

            <Text
                position={[0, -0.2, 0.1]}
                fontSize={0.055}
                color="#777"
                anchorX="center"
                textAlign="center"
                maxWidth={1.2}
            >
                {project.details}
            </Text>
        </group>
    );
};

export const StationProjects = () => {
    const [activeProject, setActiveProject] = useState<number | null>(null);

    return (
        <group position={[0, 0, 0]}>
            <Text position={[0, 1.5, 0]} fontSize={0.3} color="#EAEAEA" letterSpacing={0.03}>
                THE LAB_
            </Text>

            <Text position={[0, 1.15, 0]} fontSize={0.08} color="#666">
                Click a project to learn more
            </Text>

            <group position={[0, -0.3, 0]}>
                {projects.map((project, idx) => (
                    <Float key={idx} speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
                        <ProjectCard
                            project={project}
                            isActive={activeProject === idx}
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveProject(activeProject === idx ? null : idx);
                            }}
                        />
                    </Float>
                ))}
            </group>
        </group>
    );
};
