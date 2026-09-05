    "use client";

    import { motion } from "framer-motion";
    import styles from "./OrbitalSphere.module.css";

    export default function OrbitalSphere() {
    return (
        <div className={styles.wrapper}>
        <motion.div
            className={styles.sphere}
            animate={{ rotate: 360 }}
            transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            }}
        >
            <div className={`${styles.orbit} ${styles.orbitOne}`} />
            <div className={`${styles.orbit} ${styles.orbitTwo}`} />
            <div className={`${styles.orbit} ${styles.orbitThree}`} />

            <span className={`${styles.dot} ${styles.dotOne}`} />
            <span className={`${styles.dot} ${styles.dotTwo}`} />
            <span className={`${styles.dot} ${styles.dotThree}`} />
        </motion.div>
        </div>
    );
    }