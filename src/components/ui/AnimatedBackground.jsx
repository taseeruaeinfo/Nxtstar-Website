import { useEffect, useState } from 'react';
import '../../styles/AnimatedBackground.css';

const AnimatedBackground = () => {
    const [particles, setParticles] = useState([]);
    const [heroHeight, setHeroHeight] = useState(0);

    // Add effect to measure hero section height
    useEffect(() => {
        const updateHeroHeight = () => {
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                setHeroHeight(heroSection.offsetHeight);
            }
        };

        // Initial measurement
        updateHeroHeight();

        // Update on resize
        window.addEventListener('resize', updateHeroHeight);

        return () => window.removeEventListener('resize', updateHeroHeight);
    }, []);

    useEffect(() => {
        // Create particles
        const createParticles = () => {
            const numberOfParticles = window.innerWidth < 768 ? 40 : 70;
            const newParticles = [];

            for (let i = 0; i < numberOfParticles; i++) {
                // Create stars with different sizes and opacities
                const isStar = Math.random() > 0.7;
                const isLargeStar = isStar && Math.random() > 0.8;

                newParticles.push({
                    id: i,
                    x: Math.random() * 100, // percentage of viewport width
                    y: Math.random() * 100, // percentage of viewport height
                    size: isLargeStar ? Math.random() * 3 + 4 : isStar ? Math.random() * 2 + 2 : Math.random() * 2 + 1, // varied sizes
                    speedX: (Math.random() - 0.5) * 0.08, // slower horizontal movement
                    speedY: (Math.random() - 0.5) * 0.08, // slower vertical movement
                    opacity: isStar ? Math.random() * 0.3 + 0.6 : Math.random() * 0.4 + 0.1, // brighter for stars
                    isStar: isStar,
                    pulseSpeed: 0.5 + Math.random() * 2 // random pulse speed for stars
                });
            }

            setParticles(newParticles);
        };

        createParticles();

        // Animation loop for particles
        let animationFrameId;
        let lastTime = 0;

        const animateParticles = (currentTime) => {
            // Limit updates to every 50ms for performance
            if (currentTime - lastTime > 50) {
                lastTime = currentTime;

                setParticles(prevParticles =>
                    prevParticles.map(particle => {
                        // Add slight sine wave movement for more natural flow
                        const sineOffset = particle.isStar ? 0 : Math.sin(currentTime * 0.001 + particle.id) * 0.05;

                        let newX = particle.x + particle.speedX + sineOffset;
                        let newY = particle.y + particle.speedY;

                        // Wrap around edges
                        if (newX > 100) newX = 0;
                        if (newX < 0) newX = 100;
                        if (newY > 100) newY = 0;
                        if (newY < 0) newY = 100;

                        return {
                            ...particle,
                            x: newX,
                            y: newY
                        };
                    })
                );
            }

            animationFrameId = requestAnimationFrame(animateParticles);
        };

        animationFrameId = requestAnimationFrame(animateParticles);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setParticles([]);
            setTimeout(() => {
                const numberOfParticles = window.innerWidth < 768 ? 40 : 70;
                const newParticles = [];

                for (let i = 0; i < numberOfParticles; i++) {
                    // Create stars with different sizes and opacities
                    const isStar = Math.random() > 0.7;
                    const isLargeStar = isStar && Math.random() > 0.8;

                    newParticles.push({
                        id: i,
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                        size: isLargeStar ? Math.random() * 3 + 4 : isStar ? Math.random() * 2 + 2 : Math.random() * 2 + 1,
                        speedX: (Math.random() - 0.5) * 0.08,
                        speedY: (Math.random() - 0.5) * 0.08,
                        opacity: isStar ? Math.random() * 0.3 + 0.6 : Math.random() * 0.4 + 0.1,
                        isStar: isStar,
                        pulseSpeed: 0.5 + Math.random() * 2
                    });
                }

                setParticles(newParticles);
            }, 100);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Use state to track animation frame for pulsing
    const [time, setTime] = useState(0);

    // Animation for star pulsing
    useEffect(() => {
        let frameId;

        const animate = () => {
            setTime(prev => prev + 0.01);
            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <div
            className="animated-background"
            style={{
                height: heroHeight > 0 ? `${heroHeight}px` : '100vh',
                position: 'absolute', // Change from fixed to absolute
                clipPath: `polygon(0 0, 100% 0, 100% ${heroHeight}px, 0 ${heroHeight}px)`
            }}
        >
            <div className="gradient-animation"></div>
            <div className="particles">
                {particles.map(particle => {
                    // Calculate pulsing effect for stars
                    const pulseOpacity = particle.isStar
                        ? particle.opacity * (0.7 + 0.3 * Math.sin(time * particle.pulseSpeed))
                        : particle.opacity;

                    return (
                        <div
                            key={particle.id}
                            className={`particle ${particle.isStar ? 'star-particle' : ''}`}
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                opacity: pulseOpacity,
                                boxShadow: particle.isStar
                                    ? `0 0 ${particle.size * 2}px rgba(160, 210, 255, ${pulseOpacity})`
                                    : 'none',
                                borderRadius: particle.isStar ? '50%' : '50%'
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default AnimatedBackground;