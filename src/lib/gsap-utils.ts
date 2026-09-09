import gsap from 'gsap';

export const animateCharacters = (elementOrSelector: string | Element | null, delay = 0) => {
  if (!elementOrSelector) return;
  
  const target = typeof elementOrSelector === 'string' 
    ? `${elementOrSelector} .split-char` 
    : (elementOrSelector as Element).querySelectorAll('.split-char');

  return gsap.fromTo(
    target,
    {
      y: 50,
      opacity: 0,
      rotateX: -90,
    },
    {
      y: 0,
      opacity: 1,
      rotateX: 0,
      stagger: 0.02,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay,
      scrollTrigger: {
        trigger: elementOrSelector,
        start: 'top 85%',
      }
    }
  );
};

export const animateFadeInUp = (elementOrSelector: string | Element | null, delay = 0) => {
  if (!elementOrSelector) return;

  return gsap.fromTo(
    elementOrSelector,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      delay,
      scrollTrigger: {
        trigger: elementOrSelector,
        start: 'top 85%',
      }
    }
  );
};
