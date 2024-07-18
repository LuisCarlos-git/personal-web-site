import { animationDelayTime } from '../constants';

export const sidebarAnimations = {
  initial: {
    opacity: 0,
    translateX: -300,
  },

  animate: {
    opacity: 1,
    translateX: 0,
  },

  transition(i: number) {
    return {
      delay: animationDelayTime * i,
      stiffness: 0,
    };
  },
};
