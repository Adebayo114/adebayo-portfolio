    import Link from "next/link";
    import styles from "./DynaQuizCaseStudy.module.css";

    export default function DynaQuizCaseStudy() {
    return (
        <main className={styles.caseStudy}>
        <nav className={`container ${styles.nav}`}>
            <Link href="/">← BACK TO PORTFOLIO</Link>
            <span>CASE STUDY / 02</span>
        </nav>

        <section className={`container ${styles.hero}`}>
            <span className={styles.label}>INTERACTIVE EXPERIENCE / 2026</span>

            <h1>DYNA QUIZ</h1>

            <p className={styles.intro}>
            An interactive web development quiz designed around progressive
            difficulty, instant scoring and learning through challenge.
            </p>

            <div className={styles.projectInfo}>
            <div>
                <span>ROLE</span>
                <p>Frontend Developer</p>
            </div>

            <div>
                <span>TYPE</span>
                <p>Interactive Web App</p>
            </div>

            <div>
                <span>STACK</span>
                <p>React · JavaScript · CSS</p>
            </div>

            <div>
                <span>LEVELS</span>
                <p>Bronze · Silver · Gold</p>
            </div>
            </div>
        </section>

        <section className={`container ${styles.storySection}`}>
            <span className={styles.sectionNumber}>01</span>

            <div>
            <span className={styles.label}>THE IDEA</span>

            <h2>
                Learning feels better when it feels like a challenge.
            </h2>

            <p>
                I built Dyna Quiz as a way to make web development practice more
                interactive. Instead of simply reading questions, users move
                through difficulty levels and test themselves across HTML, CSS
                and JavaScript.
            </p>
            </div>
        </section>

        <section className={`container ${styles.levelSection}`}>
            <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>02</span>

            <div>
                <span className={styles.label}>PROGRESSION</span>

                <h2>Three levels. Increasing difficulty.</h2>
            </div>
            </div>

            <div className={styles.levelGrid}>
            <article>
                <span>01</span>
                <h3>BRONZE</h3>
                <p>Foundational questions for building confidence.</p>
            </article>

            <article>
                <span>02</span>
                <h3>SILVER</h3>
                <p>More challenging questions that test deeper understanding.</p>
            </article>

            <article>
                <span>03</span>
                <h3>GOLD</h3>
                <p>The most difficult level for users ready to push further.</p>
            </article>
            </div>
        </section>

        <section className={`container ${styles.storySection}`}>
            <span className={styles.sectionNumber}>03</span>

            <div>
            <span className={styles.label}>HOW IT WORKS</span>

            <h2>
                Question logic, level progression and scoring all work together.
            </h2>

            <p>
                Each level contains its own question set. The application tracks
                the current question, selected answers and final score, then
                presents the result once the user completes the challenge.
            </p>
            </div>
        </section>

        <section className={`container ${styles.storySection}`}>
            <span className={styles.sectionNumber}>04</span>

            <div>
            <span className={styles.label}>WHAT I LEARNED</span>

            <h2>
                Small applications can still teach a lot about state and logic.
            </h2>

            <p>
                Dyna Quiz helped me think more carefully about component state,
                question flow, reusable data structures and how interface feedback
                affects the user experience.
            </p>
            </div>
        </section>

        <section className={`container ${styles.finalSection}`}>
            <span className={styles.label}>THE RESULT</span>

            <h2>Think you know web development?</h2>

            <div className={styles.links}>
            <a href="https://dyna-quiz.vercel.app/" target="_blank" rel="noopener noreferrer">
                PLAY DYNA QUIZ ↗
            </a>

            <a href="https://github.com/Adebayo114/Dyna-Quiz" target="_blank" rel="noopener noreferrer">
                VIEW SOURCE ↗
            </a>
            </div>
        </section>

        <section className={styles.nextProject}>
            <div className="container">
            <span>NEXT</span>

            <Link href="/">
                BACK TO SELECTED WORK →
            </Link>
            </div>
        </section>
        </main>
    );
    }