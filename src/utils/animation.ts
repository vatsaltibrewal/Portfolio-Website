// src/utils/animation.ts
interface FadeInProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  delay?: number;
}

export function generateFadeIn({
  direction = 'up',
  duration = 0.5,
  delay = 0
}: FadeInProps = {}) {
  // This would be used with framer-motion like:
  // const fadeIn = generateFadeIn({ direction: 'up', delay: 0.2 });
  // <motion.div initial={fadeIn.initial} animate={fadeIn.animate} transition={fadeIn.transition}>
  
  const directionValues = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  };

  return {
    initial: {
      opacity: 0,
      ...directionValues[direction]
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0
    },
    transition: {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1]
    }
  };
}