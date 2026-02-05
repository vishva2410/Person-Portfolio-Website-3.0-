import { useState } from 'react';
import { Text, Html } from '@react-three/drei';

export const StationContact = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<string[]>([
        "VISHVA_NET v3.0",
        "Secure connection established.",
        "",
        "Available commands:",
        "  email    - Copy email address",
        "  github   - Open GitHub profile",
        "  linkedin - Open LinkedIn",
        "  resume   - Download resume",
        "  clear    - Clear terminal"
    ]);

    const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const cmd = input.toLowerCase().trim();
            let response = "";

            if (cmd === 'email') {
                response = ">> Copied: vishvateja10@gmail.com";
                navigator.clipboard.writeText("vishvateja10@gmail.com");
            } else if (cmd === 'github') {
                response = ">> Opening GitHub...";
                window.open("https://github.com", "_blank");
            } else if (cmd === 'linkedin') {
                response = ">> Opening LinkedIn...";
                window.open("https://linkedin.com", "_blank");
            } else if (cmd === 'resume') {
                response = ">> Resume download initiated...";
            } else if (cmd === 'clear') {
                setOutput([]);
                setInput("");
                return;
            } else if (cmd) {
                response = `>> Command not found: '${cmd}'`;
            } else {
                setInput("");
                return;
            }

            setOutput(prev => [...prev, `$ ${input}`, response]);
            setInput("");
        }
    };

    return (
        <group position={[0, 0, 0]}>
            <Text position={[0, 1.8, 0]} fontSize={0.3} color="#EAEAEA" letterSpacing={0.03}>
                COMM_LINK
            </Text>

            <Text position={[0, 1.5, 0]} fontSize={0.08} color="#666">
                Interactive Terminal
            </Text>

            <mesh position={[0, -0.2, 0]}>
                <planeGeometry args={[4, 3]} />
                <meshPhysicalMaterial
                    color="#080808"
                    transparent
                    opacity={0.95}
                    metalness={0.7}
                    roughness={0.4}
                />
            </mesh>

            <Html transform position={[0, -0.2, 0.05]} distanceFactor={2}>
                <div
                    className="w-[380px] h-[260px] bg-black/98 p-4 font-mono text-xs overflow-hidden border border-gray-800 rounded"
                    style={{
                        color: '#00ff00',
                        boxShadow: '0 0 40px rgba(0, 255, 0, 0.08), inset 0 0 30px rgba(0,0,0,0.6)'
                    }}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex-1 overflow-y-auto mb-2 space-y-0.5">
                            {output.map((line, i) => (
                                <div key={i} className="leading-snug whitespace-pre">{line}</div>
                            ))}
                        </div>
                        <div className="flex items-center border-t border-gray-800 pt-2">
                            <span className="mr-2 text-green-500">$</span>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                className="bg-transparent border-none outline-none flex-1 text-green-400 placeholder-green-900 text-xs"
                                placeholder="type a command..."
                                autoFocus
                            />
                        </div>
                    </div>
                </div>
            </Html>

            <Text position={[0, -2, 0]} fontSize={0.06} color="#444">
                vishvateja10@gmail.com | +91 8297425433
            </Text>
        </group>
    );
};
