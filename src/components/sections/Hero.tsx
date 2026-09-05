    "use client";

    import styles from "./Hero.module.css";
    import OrbitalSphere from "@/components/effects/OrbitalSphere";

    export default function Hero() {
    return (
        <section className={styles.hero}>
        {/* Background */}
        <div className={styles.grid} />
        <div className={styles.glow} />

        {/* Main hero content */}
        <div className={`container ${styles.inner}`}>
            <div className={styles.content}>
            <div className={styles.availability}>
                <span className={styles.availabilityDot} />
                AVAILABLE FOR OPPORTUNITIES
            </div>

            <h1>
                I BUILD DIGITAL
                <br />
                EXPERIENCES THAT
                <br />
                <span className={styles.heroAccent}>FEEL ALIVE.</span>
            </h1>

            <p>
                Frontend developer & software engineer crafting thoughtful,
                fast and human-centered products for the web.
            </p>

            <div className={styles.actions}>
                <a
                href="#work"
                className={`${styles.button} ${styles.primaryButton}`}
                >
                EXPLORE WORK ↓
                </a>

                <a
                href="#about"
                className={`${styles.button} ${styles.secondaryButton}`}
                >
                ABOUT ME ↗
                </a>
            </div>
            </div>

            {/* Right side */}
            <div className={styles.visual}>
            <OrbitalSphere />

            <span className={styles.monogram}>A/</span>
            </div>
        </div>

        {/* Bottom */}
        <div className={`container ${styles.meta}`}>
            <span>INDIANAPOLIS, IN / USA</span>

            <span>REACT · TYPESCRIPT · NEXT.JS · FIREBASE</span>

            <span>01 / PORTFOLIO 2026</span>
        </div>
        </section>
    );
    }