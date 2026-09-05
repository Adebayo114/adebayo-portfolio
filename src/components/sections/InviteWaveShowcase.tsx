    "use client";
    
    import { motion, useScroll, useTransform } from "framer-motion";
    import { useRef } from "react";
    import ProjectReaction from "../ui/ProjectReaction";
    import styles from "./InviteWaveShowcase.module.css";
    import NextImage from "next/image";
    export default function InviteWaveShowcase() {

                const sectionRef = useRef<HTMLElement>(null);

        const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"],
        });

        const rotate = useTransform(scrollYProgress, [0, 1], [4, 0]);
        const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
        const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
        
        
        return (

        
                <section
        id="work"
        ref={sectionRef}
        className={styles.section}
        >


            
        <div className={`container ${styles.inner}`}>
            <div className={styles.topRow}>
            <span>01 / SELECTED WORK</span>
            <span>PRODUCT / WEB APP</span>
            </div>

            <div className={styles.intro}>
            <div>
                <h2>INVITEWAVE</h2>

                <p className={styles.tagline}>
                Events shouldn&apos;t be difficult to discover, create or share.
                </p>
            </div>

            <p className={styles.description}>
                A modern event platform for creating, discovering and managing
                events, with RSVP experiences designed for both guests and hosts.
            </p>
            </div>

            <div className={styles.stack}>
            <span>React</span>
            <span>Firebase</span>
            <span>Firestore</span>
            <span>Vite</span>
            </div>

            <motion.div
                className={styles.preview}
                style={{
                    rotate,
                    scale,
                    y,
                }}
                >
            </motion.div>


            <div className={styles.browserBar}>
                <div className={styles.dots}>
                <span />
                <span />
                <span />
                </div>

                <span>invitewave.events</span>
            </div>

            <NextImage
            src="/images/projects/invitewave/hero.png"
            alt="InviteWave event discovery homepage"
            width={1768}
            height={832}
            className={styles.projectImage}
            priority
            />

            <div className={styles.actions}>
            <a href="https://www.invitewave.events/">
                VISIT LIVE ↗
            </a>

            <a href="/work/invitewave">
                CASE STUDY →
            </a>

            <a href="https://github.com/Adebayo114/InviteWave">
                GITHUB ↗
            </a>
            </div>
           <ProjectReaction projectId="invitewave" />
        </div>

        </section>
    );
    }