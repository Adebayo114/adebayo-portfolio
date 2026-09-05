    import styles from "./ProjectArchive.module.css";

        const projects = [
        {
            year: "2026",
            name: "Dyna Bootcamp",
            type: "Education Platform",
            stack: "React · Bootstrap",
            link: "https://dyna-hubster-boot-camp.vercel.app/",
        },
        {
            year: "2026",
            name: "Dyna Wishes",
            type: "Creative Web Experience",
            stack: "React · CSS",
            link: "https://dyna-wishes.vercel.app/",
        },
        {
            year: "2026",
            name: "Barber Pro",
            type: "Business Website",
            stack: "React · Vite · CSS",
            link: "https://barber-pro-template.vercel.app/",
        },
        {
            year: "2024",
            name: "Flames Game",
            type: "Interactive Game",
            stack: "React · TypeScript",
            link: "https://adebayo114.github.io/Flame-game/",
        },
        ];

    export default function ProjectArchive() {
    return (
        <section id="archive" className={styles.archive}>
        <div className={`container ${styles.inner}`}>
            <div className={styles.topRow}>
            <span>06 / ARCHIVE</span>
            <span>MORE THINGS I&apos;VE BUILT</span>
            </div>

            <div className={styles.heading}>
            <h2>
                THE
                <br />
                <span>ARCHIVE.</span>
            </h2>

            <p>
                Smaller builds, experiments, client work and ideas I made because
                I wanted to see if I could.
            </p>
            </div>

            <div className={styles.table}>
            <div className={styles.tableHead}>
                <span>YEAR</span>
                <span>PROJECT</span>
                <span>TYPE</span>
                <span>BUILT WITH</span>
                <span />
            </div>

            {projects.map((project) => (
                <a
                href={project.link}
                className={styles.row}
                key={project.name}
                target="_blank"
                rel="noopener noreferrer"
                >
                <span>{project.year}</span>

                <strong>{project.name}</strong>

                <span>{project.type}</span>

                <span>{project.stack}</span>

                <span className={styles.arrow}>↗</span>
                </a>
            ))}
            </div>
        </div>
        </section>
    );
    }