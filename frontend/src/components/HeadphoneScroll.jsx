import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';



const HeadphoneScroll = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [currentScrollProgress, setCurrentScrollProgress] = useState(0);
    const frameIndexRef = useRef(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Track scroll progress for conditional rendering
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setCurrentScrollProgress(latest);
        });
        return unsubscribe;
    }, [scrollYProgress]);

    // ---- TEXT ANIMATIONS (MUST BE TOP LEVEL) ----

    // Title
    const titleOpacity = useTransform(scrollYProgress, [0, 0.12, 0.2], [1, 1, 0]);

    // Precision Engineering
    const precisionOpacity = useTransform(scrollYProgress, [0.25, 0.32, 0.45, 0.52], [0, 1, 1, 0]);

    // Titanium Drivers
    const titaniumOpacity = useTransform(scrollYProgress, [0.55, 0.62, 0.72, 0.78], [0, 1, 1, 0]);

    // CTA
    const ctaOpacity = useTransform(scrollYProgress, [0.82, 0.88, 1], [0, 1, 1]);




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

    // Optimized render function with GPU acceleration
    const renderFrame = useCallback((frameIndex) => {
        if (!canvasRef.current || !images[frameIndex]) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', {
            alpha: false,
            desynchronized: true,
            willReadFrequently: false
        });
        const img = images[frameIndex];

        if (!img.complete) return;

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
    }, [images]);

    // Subscribe to scroll changes with RAF
    useEffect(() => {
        if (!imagesLoaded) return;

        let rafId;
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {
                const frameIndex = Math.min(
                    Math.floor(latest * 239),
                    239
                );

                if (frameIndex !== frameIndexRef.current) {
                    frameIndexRef.current = frameIndex;
                    renderFrame(frameIndex);
                }
            });
        });

        return () => {
            unsubscribe();
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [scrollYProgress, imagesLoaded, renderFrame]);

    // Initial render and resize
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const dpr = window.devicePixelRatio || 1;

        const resize = () => {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            const ctx = canvas.getContext('2d');
            ctx.scale(dpr, dpr);

            renderFrame(frameIndexRef.current);
        };

        resize();
        renderFrame(0);

        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, [imagesLoaded, renderFrame]);

    return (
        <div ref={containerRef} style={{ height: '400vh', position: 'relative', background: '#050505' }}>
            {/* Loading State */}
            {!imagesLoaded && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#050505',
                    zIndex: 9999
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            border: '3px solid rgba(0, 255, 157, 0.2)',
                            borderTopColor: '#00ff9d',
                            borderRadius: '50%',
                            animation: 'spin 0.8s linear infinite',
                            margin: '0 auto 16px'
                        }}></div>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            Loading
                        </p>
                    </div>
                </div>
            )}

            {/* Sticky Canvas with GPU Acceleration */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'sticky',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#050505',
                    willChange: 'transform, contents',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    contain: 'layout style paint'
                }}
            />

            {/* Text Overlays - Conditionally rendered based on scroll progress */}
            {imagesLoaded && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10
                }}>
                    {/* Title - 0-25% */}
                    {currentScrollProgress <= 0.25 && (
                        <motion.div
                            style={{
                                position: 'absolute',
                                textAlign: 'center',
                                opacity: titleOpacity
                            }}
                        >
                            <h1 style={{
                                fontSize: 'clamp(3rem, 12vw, 10rem)',
                                fontWeight: '800',
                                letterSpacing: '-0.05em',
                                color: '#fff',
                                marginBottom: '16px',
                                textShadow: '0 0 40px rgba(0, 255, 157, 0.3)'
                            }}>
                                Echovara
                            </h1>
                            <p style={{
                                fontSize: 'clamp(1.2rem, 3vw, 2.5rem)',
                                color: 'rgba(255,255,255,0.6)',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                fontWeight: '300'
                            }}>
                                Pure Sound
                            </p>
                        </motion.div>
                    )}

                    {/* Precision Engineering - 22-55% */}
                    {currentScrollProgress > 0.22 && currentScrollProgress < 0.55 && (
                        <motion.div
                            style={{
                                position: 'absolute',
                                left: 'clamp(2rem, 8vw, 8rem)',
                                opacity: precisionOpacity
                            }}
                        >
                            <h2 style={{
                                fontSize: 'clamp(2rem, 8vw, 7rem)',
                                fontWeight: '700',
                                letterSpacing: '-0.03em',
                                color: '#fff',
                                lineHeight: '1.1',
                                textShadow: '0 0 30px rgba(0, 255, 157, 0.2)'
                            }}>
                                Precision<br />Engineering
                            </h2>
                            <div style={{
                                width: '60px',
                                height: '3px',
                                background: 'linear-gradient(90deg, #00ff9d, transparent)',
                                marginTop: '20px',
                                marginBottom: '20px'
                            }}></div>
                            <p style={{
                                fontSize: 'clamp(0.9rem, 1.5vw, 1.3rem)',
                                color: 'rgba(255,255,255,0.5)',
                                maxWidth: '28rem',
                                fontWeight: '300',
                                letterSpacing: '0.02em'
                            }}>
                                Every component crafted to perfection
                            </p>
                        </motion.div>
                    )}

                    {/* Titanium Drivers - 52-82% */}
                    {currentScrollProgress > 0.52 && currentScrollProgress < 0.82 && (
                        <motion.div
                            style={{
                                position: 'absolute',
                                right: 'clamp(2rem, 8vw, 8rem)',
                                textAlign: 'right',
                                opacity: titaniumOpacity
                            }}
                        >
                            <h2 style={{
                                fontSize: 'clamp(2rem, 8vw, 7rem)',
                                fontWeight: '700',
                                letterSpacing: '-0.03em',
                                color: '#fff',
                                lineHeight: '1.1',
                                textShadow: '0 0 30px rgba(0, 255, 157, 0.2)'
                            }}>
                                Titanium<br />Drivers
                            </h2>
                            <div style={{
                                width: '60px',
                                height: '3px',
                                background: 'linear-gradient(270deg, #00ff9d, transparent)',
                                marginTop: '20px',
                                marginBottom: '20px',
                                marginLeft: 'auto'
                            }}></div>
                            <p style={{
                                fontSize: 'clamp(0.9rem, 1.5vw, 1.3rem)',
                                color: 'rgba(255,255,255,0.5)',
                                maxWidth: '28rem',
                                fontWeight: '300',
                                letterSpacing: '0.02em'
                            }}>
                                Unparalleled audio clarity
                            </p>
                        </motion.div>
                    )}

                    {/* CTA - 78-100% */}
                    {currentScrollProgress > 0.78 && (
                        <motion.div
                            style={{
                                position: 'absolute',
                                textAlign: 'center',
                                opacity: ctaOpacity
                            }}
                        >
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 10vw, 9rem)',
                                fontWeight: '800',
                                letterSpacing: '-0.05em',
                                color: '#fff',
                                marginBottom: '40px',
                                textShadow: '0 0 50px rgba(0, 255, 157, 0.4)'
                            }}>
                                Hear Everything
                            </h2>
                            <button style={{
                                padding: '18px 60px',
                                background: 'linear-gradient(135deg, #00ff9d 0%, #00d4aa 100%)',
                                color: '#000',
                                fontSize: '16px',
                                fontWeight: '700',
                                letterSpacing: '0.1em',
                                borderRadius: '4px',
                                border: 'none',
                                cursor: 'pointer',
                                pointerEvents: 'auto',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                textTransform: 'uppercase',
                                boxShadow: '0 10px 40px rgba(0, 255, 157, 0.3)'
                            }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 15px 50px rgba(0, 255, 157, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 10px 40px rgba(0, 255, 157, 0.3)';
                                }}
                            >
                                Explore Collection
                            </button>
                        </motion.div>
                    )}
                </div>
            )}

            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default HeadphoneScroll;
