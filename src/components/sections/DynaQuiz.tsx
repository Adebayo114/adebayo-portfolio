    import Link from "next/link";
    import ProjectReaction from "@/components/ui/ProjectReaction";
    import styles from "./DynaQuiz.module.css";

    export default function DynaQuiz() {
    return (
        <section className={styles.section}>
        <div className={`container ${styles.inner}`}>

            <div className={styles.topRow}>
            <span>02 / SELECTED WORK</span>
            <span>INTERACTIVE EXPERIENCE</span>
            </div>

            <div className={styles.intro}>
            <div>
                <h2>DYNA QUIZ</h2>

                <p className={styles.tagline}>
                Learn. Test yourself. Level up.
                </p>
            </div>

            <p className={styles.description}>
                An interactive web development quiz built around progressive
                difficulty levels, challenging users across HTML, CSS and
                JavaScript.
            </p>
            </div>

            <div className={styles.stack}>
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            </div>

            {/* QUIZ VISUAL */}
            <div className={styles.visual}>
            <div className={styles.visualTop}>
                <span>DYNA QUIZ / CHALLENGE</span>
                <span>QUESTION 08 / 15</span>
            </div>

            <div className={styles.levels}>
                <span>BRONZE</span>
                <span className={styles.activeLevel}>SILVER</span>
                <span>GOLD</span>
            </div>

            <div className={styles.quizCard}>
                <span className={styles.questionLabel}>JAVASCRIPT</span>

                <h3>
                Which method creates a new array containing elements that pass
                a given condition?
                </h3>

                <div className={styles.answers}>
                <button>.map()</button>
                <button className={styles.selected}>.filter()</button>
                <button>.reduce()</button>
                <button>.forEach()</button>
                </div>
            </div>

            <div className={styles.visualBottom}>
                <span>LEVEL 02</span>

                <div className={styles.progress}>
                <span />
                </div>

                <span>53%</span>
            </div>
            </div>

            <div className={styles.actions}>
            <a
                href="https://dyna-quiz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
            >
                PLAY LIVE ↗
            </a>

            <Link href="/work/dynaquiz">
                CASE STUDY →
            </Link>
            </div>

            <ProjectReaction projectId="invitewave" />
        </div>
        </section>
    );
    }