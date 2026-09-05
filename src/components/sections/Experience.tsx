    import styles from "./Experience.module.css";

    const experiences = [
    {
        period: "AUG 2023 — NOV 2024",
        title: "NIIT",
        role: "WEB DEVELOPMENT TRAINING",
        location: "Lagos, Nigeria",
        description:
        "Formal training across HTML, CSS, JavaScript, React, responsive design and modern web development fundamentals.",
        tags: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
        period: "OCT 2024 — DEC 2024",
        title: "VENTURE TRIBE",
        role: "FRONTEND DEVELOPER INTERN",
        location: "Lagos, Nigeria",
        description:
        "Worked on responsive web interfaces, website improvements and frontend development while collaborating within a team environment.",
        tags: ["React", "JavaScript", "CSS", "Git"],
    },
    {
        period: "2024 — NOW",
        title: "INDEPENDENT DEVELOPMENT",
        role: "FRONTEND / PRODUCT DEVELOPMENT",
        location: "Independent",
        description:
        "Building and shipping web products from idea to deployment, including event platforms, interactive applications and client-facing experiences.",
        tags: ["Next.js", "React", "TypeScript", "Firebase"],
    },
    ];

    export default function Experience() {
    return (
        <section id="experience" className={styles.experience}>
        <div className={`container ${styles.inner}`}>
            <div className={styles.topRow}>
            <span>04 / EXPERIENCE</span>
            <span>WHERE I&apos;VE BUILT</span>
            </div>

            <div className={styles.heading}>
            <h2>
                EXPERIENCE IS
                <br />
                WHAT YOU&apos;VE HAD
                <br />
                TO <span>FIGURE OUT.</span>
            </h2>

            <p>
                My path has been a mix of structured learning, team experience and
                independent product development.
            </p>
            </div>

            <div className={styles.timeline}>
            {experiences.map((experience) => (
                <article className={styles.row} key={experience.title}>
                <div className={styles.period}>
                    <span>{experience.period}</span>
                </div>

                <div className={styles.identity}>
                    <h3>{experience.title}</h3>

                    <span>{experience.location}</span>
                </div>

                <div className={styles.content}>
                    <span className={styles.role}>{experience.role}</span>

                    <p>{experience.description}</p>

                    <div className={styles.tags}>
                    {experience.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                    </div>
                </div>
                </article>
            ))}
            </div>

            <div className={styles.current}>
            <div>
                <span className={styles.currentLabel}>CURRENTLY EXPLORING</span>

                <h3>WHAT&apos;S NEXT →</h3>
            </div>

            <div className={styles.currentList}>
                <span>Next.js</span>
                <span>Backend Development</span>
                <span>Python</span>
                <span>AI / Machine Learning</span>
            </div>
            </div>
        </div>
        </section>
    );
    }