import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeadphoneScroll = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const currentFrame = useTransform(scrollYProgress, [0, 1], [1, 240]);

    // Preload all images
    useEffect(() => {
        const frameCount = 240;
        const loadedImages = [];
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const frameNumber = String(i).padStart(3, '0');
            img.src = `/Frames_Headphones/ezgif-frame-${frameNumber}.jpg`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImagesLoaded(true);
                }
            };

            loadedImages.push(img);
        }

        setImages(loadedImages);
    }, []);

    // Draw frame to canvas
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const frameIndex = Math.min(Math.floor(currentFrame.get()) - 1, 239);
        const img = images[frameIndex];

        if (img && img.complete) {
            // Set canvas size to match viewport
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Calculate dimensions to fit image
            const scale = Math.max(
                canvas.width / img.width,
                canvas.height / img.height
            );

            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            // Clear canvas with pure black
            ctx.fillStyle = '#050505';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw image (cropped to remove watermark from bottom-right)
            const cropHeight = img.height * 0.88; // Crop bottom 12% to remove watermark
            const cropWidth = img.width * 0.95; // Crop right 5% to remove watermark edge

            ctx.drawImage(
                img,
                0, 0, cropWidth, cropHeight, // Source (cropped)
                x, y, cropWidth * scale, cropHeight * scale // Destination
            );
        }
    }, [currentFrame, images, imagesLoaded]);

    // Subscribe to frame changes
    useEffect(() => {
        const unsubscribe = currentFrame.on("change", () => {
            if (imagesLoaded && canvasRef.current) {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d');
                const frameIndex = Math.min(Math.floor(currentFrame.get()) - 1, 239);
                const img = images[frameIndex];

                if (img && img.complete) {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;

                    const scale = Math.max(
                        canvas.width / img.width,
                        canvas.height / img.height
                    );

                    const x = (canvas.width / 2) - (img.width / 2) * scale;
                    const y = (canvas.height / 2) - (img.height / 2) * scale;

                    ctx.fillStyle = '#050505';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    const cropHeight = img.height * 0.88;
                    const cropWidth = img.width * 0.95;

                    ctx.drawImage(
                        img,
                        0, 0, cropWidth, cropHeight,
                        x, y, cropWidth * scale, cropHeight * scale
                    );
                }
            }
        });

        return () => unsubscribe();
    }, [currentFrame, images, imagesLoaded]);

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current && imagesLoaded) {
                const canvas = canvasRef.current;
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [imagesLoaded]);

    return (
        <div ref={containerRef} style={{ height: '400vh', position: 'relative' }}>
            {/* Loading State */}
            {!imagesLoaded && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#050505',
                    zIndex: 50
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            border: '4px solid #00ff9d',
                            borderTopColor: 'transparent',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                            margin: '0 auto 16px'
                        }}></div>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', letterSpacing: '0.05em' }}>
                            Loading Experience...
                        </p>
                    </div>
                </div>
            )}

            {/* Sticky Canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'sticky',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    backgroundColor: '#050505'
                }}
            />

            {/* Text Overlays */}
            <div style={{
                position: 'fixed',
                inset: 0,
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Title - 0% */}
                <motion.div
                    style={{
                        position: 'absolute',
                        textAlign: 'center',
                        opacity: useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0])
                    }}
                >
                    <h1 style={{
                        fontSize: 'clamp(3rem, 10vw, 9rem)',
                        fontWeight: 'bold',
                        letterSpacing: '-0.05em',
                        color: 'rgba(255,255,255,0.9)',
                        marginBottom: '16px'
                    }}>
                        Echovara
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.5rem, 3vw, 3rem)',
                        color: 'rgba(255,255,255,0.6)',
                        letterSpacing: '0.05em'
                    }}>
                        Pure Sound.
                    </p>
                </motion.div>

                {/* Precision Engineering - 30% */}
                <motion.div
                    style={{
                        position: 'absolute',
                        left: 'clamp(2rem, 6vw, 6rem)',
                        opacity: useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0])
                    }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 7vw, 7rem)',
                        fontWeight: 'bold',
                        letterSpacing: '-0.02em',
                        color: 'rgba(255,255,255,0.9)'
                    }}>
                        Precision<br />Engineering.
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
                        color: 'rgba(255,255,255,0.5)',
                        marginTop: '16px',
                        maxWidth: '28rem'
                    }}>
                        Every component crafted to perfection
                    </p>
                </motion.div>

                {/* Titanium Drivers - 60% */}
                <motion.div
                    style={{
                        position: 'absolute',
                        right: 'clamp(2rem, 6vw, 6rem)',
                        textAlign: 'right',
                        opacity: useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0])
                    }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 7vw, 7rem)',
                        fontWeight: 'bold',
                        letterSpacing: '-0.02em',
                        color: 'rgba(255,255,255,0.9)'
                    }}>
                        Titanium<br />Drivers.
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
                        color: 'rgba(255,255,255,0.5)',
                        marginTop: '16px',
                        maxWidth: '28rem'
                    }}>
                        Unparalleled audio clarity
                    </p>
                </motion.div>

                {/* CTA - 90% */}
                <motion.div
                    style={{
                        position: 'absolute',
                        textAlign: 'center',
                        opacity: useTransform(scrollYProgress, [0.85, 0.92, 1], [0, 1, 1])
                    }}
                >
                    <h2 style={{
                        fontSize: 'clamp(3rem, 8vw, 8rem)',
                        fontWeight: 'bold',
                        letterSpacing: '-0.05em',
                        color: 'rgba(255,255,255,0.9)',
                        marginBottom: '32px'
                    }}>
                        Hear Everything.
                    </h2>
                    <button style={{
                        padding: '16px 48px',
                        background: '#00ff9d',
                        color: '#000',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        letterSpacing: '0.05em',
                        borderRadius: '2px',
                        border: 'none',
                        cursor: 'pointer',
                        pointerEvents: 'auto',
                        transition: 'all 0.3s'
                    }}>
                        Explore Collection
                    </button>
                </motion.div>
            </div>

            {/* Add keyframes for spinner */}
            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default HeadphoneScroll;
