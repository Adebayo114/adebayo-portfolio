    import styles from "./Skills.module.css";

    const capabilities = [
    {
        number: "01",
        title: "FRONTEND ENGINEERING",
        description:
        "Building responsive, interactive interfaces with reusable components, clean structure and strong attention to user experience.",
        tools: ["React", "Next.js", "TypeScript", "JavaScript"],
    },
    {
        number: "02",
        title: "PRODUCT DEVELOPMENT",
        description:
        "Taking ideas from concept to usable product — thinking through flows, features, structure, implementation and deployment.",
        tools: ["React", "Firebase", "Firestore", "Vercel"],
    },
    {
        number: "03",
        title: "AUTHENTICATION & DATA",
        description:
        "Working with user authentication, persistent application data and frontend-to-backend product flows.",
        tools: ["Firebase Auth", "Firestore", "MongoDB", "Express"],
    },
    {
        number: "04",
        title: "RESPONSIVE UI",
        description:
        "Creating interfaces that remain intentional across desktop, tablet and mobile instead of simply shrinking layouts.",
        tools: ["CSS", "Bootstrap", "CSS Modules", "Responsive Design"],
    },
    {
        number: "05",
        title: "SHIPPING",
        description:
        "Taking projects from local development to production with version control, deployment and real-world debugging.",
        tools: ["Git", "GitHub", "Vercel", "Firebase Hosting"],
    },
    ];

    export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
        <div className={`container ${styles.inner}`}>
            <div className={styles.topRow}>
            <span>05 / CAPABILITIES</span>
            <span>WHAT I BUILD WITH</span>
            </div>

            <div className={styles.heading}>
            <h2>
                TOOLS ARE USEFUL.
                <br />
                WHAT MATTERS IS
                <br />
                <span>WHAT YOU DO WITH THEM.</span>
            </h2>

            <p>
                I care less about collecting technologies and more about using the
                right tools to build something that works well, feels good and can
                actually ship.
            </p>
            </div>

            <div className={styles.list}>
            {capabilities.map((capability) => (
                <article className={styles.capability} key={capability.title}>
                <span className={styles.number}>{capability.number}</span>

                <div className={styles.title}>
                    <h3>{capability.title}</h3>
                </div>

                <div className={styles.content}>
                    <p>{capability.description}</p>

                    <div className={styles.tools}>
                    {capability.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                    ))}
                    </div>
                </div>

                <span className={styles.arrow}>↗</span>
                </article>
            ))}
            </div>
        </div>
        </section>
    );
    }