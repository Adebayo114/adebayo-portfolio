    import styles from "./Contact.module.css";

    export default function Contact() {
    return (
        <footer id="contact" className={styles.contact}>
        <div className={`container ${styles.inner}`}>
            <div className={styles.topRow}>
            <span>07 / CONTACT</span>
            <span>LET&apos;S BUILD SOMETHING</span>
            </div>

            <div className={styles.main}>
            <span className={styles.eyebrow}>
                HAVE AN IDEA, OPPORTUNITY OR JUST WANT TO TALK?
            </span>

            <h2>
                LET&apos;S MAKE
                <br />
                SOMETHING
                <br />
                <span>WORTH USING.</span>
            </h2>

                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=matthewadebayo392@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.email}
                    >
                    START A CONVERSATION
                    <span>↗</span>
                </a>
            </div>

            <div className={styles.footer}>
            <div className={styles.socials}>
                <a
                href="https://github.com/Adebayo114"
                target="_blank"
                rel="noopener noreferrer"
                >
                GITHUB ↗
                </a>

                <a
                href="https://www.linkedin.com/in/adebayo-oladayo/"
                target="_blank"
                rel="noopener noreferrer"
                >
                LINKEDIN ↗
                </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=matthewadebayo392@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        EMAIL ↗
                    </a>
            </div>

            <div className={styles.meta}>
                <span>INDIANAPOLIS, IN</span>
                <span>© 2026 ADEBAYO</span>
            </div>
            </div>
        </div>
        </footer>
    );
    }