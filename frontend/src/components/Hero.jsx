import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #050505 0%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
  padding: 80px 2rem 2rem;
`;

const HeroContent = styled.div`
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const TextContent = styled.div`
  @media (max-width: 968px) {
    order: 2;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  
  span {
    background: linear-gradient(135deg, #00ff9d 0%, #00d4aa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 3rem;
  line-height: 1.6;
  font-weight: 300;
  letter-spacing: 0.02em;
`;

const CTAButton = styled(motion.button)`
  padding: 18px 48px;
  background: linear-gradient(135deg, #00ff9d 0%, #00d4aa 100%);
  color: #000;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.1em;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 10px 40px rgba(0, 255, 157, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 50px rgba(0, 255, 157, 0.5);
  }

  @media (max-width: 968px) {
    width: 100%;
    max-width: 300px;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 968px) {
    order: 1;
  }
`;

const HeadphoneImage = styled(motion.img)`
  width: 100%;
  max-width: 600px;
  height: auto;
  filter: drop-shadow(0 20px 60px rgba(0, 255, 157, 0.2));
`;

const FloatingCircle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '400px'};
  height: ${props => props.size || '400px'};
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 157, 0.1) 0%, transparent 70%);
  filter: blur(40px);
  z-index: 0;
  top: ${props => props.top || '50%'};
  left: ${props => props.left || '50%'};
  transform: translate(-50%, -50%);
`;

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    return (
        <HeroSection>
            <FloatingCircle
                size="600px"
                top="30%"
                left="20%"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <FloatingCircle
                size="500px"
                top="70%"
                left="80%"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <HeroContent
                as={motion.div}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <TextContent>
                    <Title variants={itemVariants}>
                        Experience <span>Pure Sound</span>
                    </Title>
                    <Subtitle variants={itemVariants}>
                        Premium wireless headphones engineered for audiophiles.
                        Immerse yourself in crystal-clear audio with cutting-edge technology.
                    </Subtitle>
                    <CTAButton
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Collection
                    </CTAButton>
                </TextContent>

                <ImageContainer variants={imageVariants}>
                    <HeadphoneImage
                        src="/Frames_Headphones/ezgif-frame-120.jpg"
                        alt="Premium Headphones"
                        animate={{
                            y: [0, -10, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </ImageContainer>
            </HeroContent>
        </HeroSection>
    );
};

export default Hero;
