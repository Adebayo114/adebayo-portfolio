    import styles from "./InviteWaveCaseStudy.module.css";
    import Link from "next/link";
    import NextImage from "next/image";
    export default function InviteWaveCaseStudy() {
    return (
        <main className={styles.caseStudy}>
        {/* Back to portfolio */}
        <nav className={`container ${styles.nav}`}>
            <Link href="/">← BACK TO PORTFOLIO</Link>

            <span>CASE STUDY / 01</span>
        </nav>

        {/* HERO */}
        <section className={`container ${styles.hero}`}>
            <span className={styles.label}>SELECTED WORK / 2026</span>

            <h1>INVITEWAVE</h1>

            <p className={styles.intro}>
            A modern event platform for creating, discovering, managing and
            sharing events — with RSVP experiences designed for both guests
            and hosts.
            </p>

            <div className={styles.projectInfo}>
            <div>
                <span>ROLE</span>
                <p>Frontend Developer</p>
            </div>

            <div>
                <span>TYPE</span>
                <p>Personal Product</p>
            </div>

            <div>
                <span>STACK</span>
                <p>React · Firebase · Firestore · Vite</p>
            </div>

            <div>
                <span>YEAR</span>
                <p>2026</p>
            </div>
            </div>
        </section>

        {/* PROJECT IMAGE */}
                    <section className={`container ${styles.projectVisual}`}>
        <div className={styles.browserFrame}>
            <div className={styles.browserBar}>
            <div className={styles.browserDots}>
                <span />
                <span />
                <span />
            </div>

            <span className={styles.browserUrl}>invitewave.events</span>
            </div>

            <div className={styles.imageWrapper}>
            <NextImage
                src="/images/projects/invitewave/hero.png"
                alt="InviteWave event discovery homepage"
                width={1768}
                height={832}
                className={styles.projectImage}
                priority
            />
            </div>
        </div>
        </section>

        {/* THE PROBLEM */}
        <section className={`container ${styles.storySection}`}>
            <span className={styles.sectionNumber}>01</span>

            <div>
            <span className={styles.label}>THE PROBLEM</span>

            <h2>
                Event experiences can become complicated before they need to.
            </h2>

            <p>
                I wanted InviteWave to make creating, discovering, sharing and
                responding to events feel straightforward for both hosts and
                guests.
            </p>
            </div>
        </section>

        {/* THE IDEA */}
        <section className={`container ${styles.storySection}`}>
            <span className={styles.sectionNumber}>02</span>

            <div>
            <span className={styles.label}>THE IDEA</span>

            <h2>
                One place to create an event and everything needed around it.
            </h2>

            <p>
                InviteWave brings event creation, discovery, RSVP responses,
                private events, sharing and host management into one experience.
            </p>
            </div>
        </section>

        {/* FEATURES */}
        <section className={`container ${styles.features}`}>
            <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>03</span>

            <div>
                <span className={styles.label}>KEY FEATURES</span>
                <h2>Built around the entire event experience.</h2>
            </div>
            </div>

            <div className={styles.featureGrid}>
            <article>
                <span>01</span>
                <h3>Event Creation</h3>
                <p>Create and manage events through a simple workflow.</p>
            </article>

            <article>
                <span>02</span>
                <h3>Guest RSVP</h3>
                <p>
                Guests can respond to events without being forced to create
                an account.
                </p>
            </article>

            <article>
                <span>03</span>
                <h3>Private Events</h3>
                <p>
                Invite-code access allows hosts to restrict private events.
                </p>
            </article>

            <article>
                <span>04</span>
                <h3>Host Controls</h3>
                <p>
                Hosts can manage their events and access attendee information.
                </p>
            </article>

            <article>
                <span>05</span>
                <h3>Maps & Sharing</h3>
                <p>
                Event locations and sharing tools make events easier to find
                and distribute.
                </p>
            </article>

            <article>
                <span>06</span>
                <h3>Featured Events</h3>
                <p>
                Events can be highlighted to give important experiences more
                visibility.
                </p>
            </article>
            </div>
        </section>

        {/* TECHNICAL */}
        <section className={`container ${styles.storySection}`}>
            <span className={styles.sectionNumber}>04</span>

            <div>
            <span className={styles.label}>TECHNICAL DECISIONS</span>

            <h2>The product needed more than a polished interface.</h2>

            <p>
                Firebase Authentication handles user accounts while Firestore
                stores events and RSVP information. RSVP responses are associated
                with individual events, allowing InviteWave to keep guest and
                event data organized as the product grows.
            </p>
            </div>
        </section>

        {/* CHALLENGES */}
        <section className={`container ${styles.challenges}`}>
            <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>05</span>

            <div>
                <span className={styles.label}>CHALLENGES & SOLUTIONS</span>
                <h2>The interesting parts weren&apos;t always the easy parts.</h2>
            </div>
            </div>

            <div className={styles.challengeList}>
            <article>
                <span>01</span>

                <div>
                <h3>Reducing RSVP friction</h3>
                <p>
                    Requiring authentication made a simple RSVP unnecessarily
                    difficult. I changed the flow so guests could respond without
                    creating an account while preserving host controls.
                </p>
                </div>
            </article>

            <article>
                <span>02</span>

                <div>
                <h3>Firestore permissions</h3>
                <p>
                    Firebase security rules required careful handling as the
                    application moved from local behavior to persistent event and
                    RSVP data.
                </p>
                </div>
            </article>

            <article>
                <span>03</span>

                <div>
                <h3>Deployment routing</h3>
                <p>
                    Direct navigation to application routes initially caused
                    deployment 404s. I adjusted the deployment configuration so
                    client-side routes worked correctly when opened directly.
                </p>
                </div>
            </article>
            </div>
        </section>

        {/* LESSON */}
        <section className={`container ${styles.lesson}`}>
            <span className={styles.label}>WHAT I LEARNED</span>

            <blockquote>
            “Building a product isn&apos;t always about adding more. Sometimes
            the biggest improvement is removing friction.”
            </blockquote>
        </section>

        {/* FINAL CTA */}
        <section className={`container ${styles.finalSection}`}>
            <span className={styles.label}>THE RESULT</span>

            <h2>See InviteWave for yourself.</h2>

            <div className={styles.links}>
            <a
                href="https://invitewave.events"
                target="_blank"
                rel="noopener noreferrer"
            >
                VISIT LIVE ↗
            </a>

            {/* Add your GitHub URL here later */}
            <a href="https://github.com/Adebayo114/InviteWave">VIEW SOURCE ↗</a>
            </div>
        </section>

        {/* NEXT PROJECT */}
        <section className={styles.nextProject}>
            <div className="container">
            <span>NEXT PROJECT</span>

            <Link href="/work/dynaquiz">
                DYNA QUIZ →
            </Link>
            </div>
        </section>
        </main>
    );
    }