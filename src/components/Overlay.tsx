export const Overlay = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none p-8 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start">
                <h1 className="font-mono text-cyber-text text-sm tracking-widest leading-none">
                    VISHVA TEJA G.<br />
                    <span className="text-cyber-gray">PORTFOLIO.V3</span>
                </h1>
                <div className="font-mono text-cyber-gray text-xs text-right">
                    SYS.STATUS: ONLINE<br />
                    RENDER: WEBGL
                </div>
            </div>

            <div className="flex justify-between items-end">
                <div className="font-mono text-cyber-gray text-xs">
                    SCROLL TO NAVIGATE<br />
                    [||||||||||]
                </div>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-cyber-text text-sm pointer-events-auto hover:text-cyber-accent transition-colors"
                >
                    GITHUB_
                </a>
            </div>
        </div>
    );
};
