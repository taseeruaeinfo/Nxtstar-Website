import { motion } from 'framer-motion';

// Animation variants for different UI elements
export const animations = {
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 }
    },
    slideUp: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    },
    slideInLeft: {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 }
    },
    slideInRight: {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 }
    },
    scale: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 }
    },
    // Pop-up animation for on-scroll effects
    popUp: {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        transition: { type: "spring", stiffness: 300, damping: 15 }
    },
    // Pop-up with bounce for more dynamic elements
    popUpBounce: {
        initial: { opacity: 0, scale: 0.5, y: 50 },
        animate: { opacity: 1, scale: 1, y: 0 },
        transition: { type: "spring", stiffness: 400, damping: 8 }
    },
    // Rotate and pop-up for attention-grabbing elements
    rotatePopUp: {
        initial: { opacity: 0, scale: 0.5, rotate: -10 },
        animate: { opacity: 1, scale: 1, rotate: 0 },
        transition: { type: "spring", stiffness: 300, damping: 10 }
    }
};

// Motion components with preset animations
export const FadeIn = ({ children, delay = 0 }) => (
    <motion.div
        initial="initial"
        animate="animate"
        variants={{
            initial: animations.fadeIn.initial,
            animate: animations.fadeIn.animate
        }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
);

export const SlideUp = ({ children, delay = 0 }) => (
    <motion.div
        initial="initial"
        animate="animate"
        variants={{
            initial: animations.slideUp.initial,
            animate: animations.slideUp.animate
        }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
);

export const SlideInLeft = ({ children, delay = 0 }) => (
    <motion.div
        initial="initial"
        animate="animate"
        variants={{
            initial: animations.slideInLeft.initial,
            animate: animations.slideInLeft.animate
        }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
);

export const SlideInRight = ({ children, delay = 0 }) => (
    <motion.div
        initial="initial"
        animate="animate"
        variants={{
            initial: animations.slideInRight.initial,
            animate: animations.slideInRight.animate
        }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
);

export const Scale = ({ children, delay = 0 }) => (
    <motion.div
        initial="initial"
        animate="animate"
        variants={{
            initial: animations.scale.initial,
            animate: animations.scale.animate
        }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
);

// Pop-up animation components for on-scroll effects
export const PopUp = ({ children, delay = 0 }) => (
    <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
            initial: animations.popUp.initial,
            animate: animations.popUp.animate
        }}
        transition={{ ...animations.popUp.transition, delay }}
    >
        {children}
    </motion.div>
);

export const PopUpBounce = ({ children, delay = 0 }) => (
    <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
            initial: animations.popUpBounce.initial,
            animate: animations.popUpBounce.animate
        }}
        transition={{ ...animations.popUpBounce.transition, delay }}
    >
        {children}
    </motion.div>
);

export const RotatePopUp = ({ children, delay = 0 }) => (
    <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
            initial: animations.rotatePopUp.initial,
            animate: animations.rotatePopUp.animate
        }}
        transition={{ ...animations.rotatePopUp.transition, delay }}
    >
        {children}
    </motion.div>
);

// For hover animations on elements like buttons, cards, etc.
export const MotionButton = motion.button;
export const MotionDiv = motion.div;