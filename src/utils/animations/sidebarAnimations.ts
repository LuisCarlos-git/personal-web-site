import { animationDelayTime } from '../constants';

export const sidebarAnimations = {
  initial: {
    opacity: 0,
    x: -300,
  },

  animate: {
    opacity: 1,
    x: 0,
  },

  transition(i: number) {
    return {
      delay: animationDelayTime.fast * i,
      stiffness: 0,
    };
  },
};
