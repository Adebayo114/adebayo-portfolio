    import styles from "./About.module.css";

    export default function About() {
    return (
        <section id="about" className={styles.about}>
        <div className={`container ${styles.inner}`}>
            <div className={styles.topRow}>
            <span>03 / ABOUT</span>
            <span>A LITTLE ABOUT ME</span>
            </div>

            <div className={styles.layout}>
            {/* LEFT */}
            <div className={styles.statement}>
                <h2>
                BUILDING THINGS
                <br />
                THAT DIDN&apos;T
                <br />
                EXIST <span>YESTERDAY.</span>
                </h2>
            </div>

            {/* RIGHT */}
            <div className={styles.story}>
                <span className={styles.eyebrow}>MY STORY</span>

                <p className={styles.lead}>
                I&apos;m Adebayo, a frontend developer who enjoys turning ideas
                into digital products people can actually use.
                </p>

                <p>
                My path into tech started with curiosity. I wanted to understand
                how the websites I used every day were actually built. That
                curiosity turned into learning HTML, CSS and JavaScript, then
                React — and eventually into building complete products of my own.
                </p>

                <p>
                I learn best by building. Whether I&apos;m working on an event
                platform, an interactive learning experience or experimenting
                with a new idea, I care about the details that make software feel
                simple, thoughtful and alive.
                </p>

                <div className={styles.details}>
                <div>
                    <span>BASED IN</span>
                    <p>Indianapolis, IN</p>
                </div>

                <div>
                    <span>FOCUS</span>
                    <p>Frontend / Product Development</p>
                </div>

                <div>
                    <span>CURRENTLY</span>
                    <p>Building & learning</p>
                </div>
                </div>
            </div>
            </div>

            <div className={styles.bottom}>
            <span>SCROLL TO KNOW MORE</span>

            <div className={styles.line} />

            <span>↓</span>
            </div>
        </div>
        </section>
    );
    }