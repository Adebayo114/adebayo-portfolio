    "use client";

    import { useState } from "react";
    import Link from "next/link";
    import styles from "./Navbar.module.css";

    export default function Navbar() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <header className={styles.navbar}>
        <div className={`container ${styles.inner}`}>
            <Link href="/" className={styles.brand} onClick={closeMenu}>
            A/
            </Link>

            <nav className={styles.desktopLinks}>
            <a href="#work">WORK</a>
            <a href="#about">ABOUT</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#contact">CONTACT</a>

            <a
                href="/resume/Adebayo-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resume}
            >
                RESUME ↗
            </a>
            </nav>

            <button
            type="button"
            className={styles.menuButton}
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            >
            {open ? "CLOSE" : "MENU"}
            </button>
        </div>

        <div
            className={`${styles.mobileMenu} ${
            open ? styles.mobileMenuOpen : ""
            }`}
        >
            <nav className="container">
            <a href="#work" onClick={closeMenu}>
                <span>01</span>
                WORK
            </a>

            <a href="#about" onClick={closeMenu}>
                <span>02</span>
                ABOUT
            </a>

            <a href="#experience" onClick={closeMenu}>
                <span>03</span>
                EXPERIENCE
            </a>

            <a href="#contact" onClick={closeMenu}>
                <span>04</span>
                CONTACT
            </a>

            <a
                href="/resume/Adebayo-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
            >
                <span>05</span>
                RESUME ↗
            </a>
            </nav>
        </div>
        </header>
    );
    }