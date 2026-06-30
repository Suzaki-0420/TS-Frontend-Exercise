export const FlowerEffect = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(30)].map((_, index) => {
                const angle = (360 / 30) * index;
                const distance = 250 + Math.random() * 200;

                return (
                    <div
                        key={index}
                        className="flower-particle"
                        style={{
                            "--angle": `${angle}deg`,
                            "--distance": `${distance}px`,
                        } as React.CSSProperties}
                    >
                        🌸
                    </div>
                );
            })}
        </div>
    );
};