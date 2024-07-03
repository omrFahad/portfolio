import { Variants } from "framer-motion";

export const charVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export const iconVariants: Variants = {
    hidden: {
        y: [0, 25, 0],
    },
    visible: {
        y: [0, 25, 0],
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2.5,
        },

    }
}
