    "use client";

    import { useEffect, useState } from "react";
    import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    } from "firebase/firestore";

    import { db } from "@/lib/firebase";
    import styles from "./ProjectReaction.module.css";

    type Reaction = "like" | "impressive" | "love";

    type Props = {
    projectId: string;
    };

    type Counts = {
    like: number;
    impressive: number;
    love: number;
    };

    export default function ProjectReaction({ projectId }: Props) {
    const [reaction, setReaction] = useState<Reaction | null>(null);
    const [counts, setCounts] = useState<Counts>({
        like: 0,
        impressive: 0,
        love: 0,
    });

    useEffect(() => {
        async function loadReactions() {
        const ref = doc(db, "projectReactions", projectId);
        const snapshot = await getDoc(ref);

        if (snapshot.exists()) {
            const data = snapshot.data() as Partial<Counts>;

            setCounts({
            like: data.like ?? 0,
            impressive: data.impressive ?? 0,
            love: data.love ?? 0,
            });
        }

        const saved = localStorage.getItem(
            `portfolio-reaction-${projectId}`
        ) as Reaction | null;

        if (saved) {
            setReaction(saved);
        }
        }

        loadReactions();
    }, [projectId]);

async function handleReaction(nextReaction: Reaction) {
  try {
    const ref = doc(db, "projectReactions", projectId);

    const previousReaction = reaction;

    if (previousReaction === nextReaction) {
      return;
    }

    const snapshot = await getDoc(ref);

    let currentCounts: Counts = {
      like: 0,
      impressive: 0,
      love: 0,
    };

    if (snapshot.exists()) {
      const data = snapshot.data() as Partial<Counts>;

      currentCounts = {
        like: data.like ?? 0,
        impressive: data.impressive ?? 0,
        love: data.love ?? 0,
      };
    } else {
      await setDoc(ref, currentCounts);
    }

    const updatedCounts = { ...currentCounts };

    // only subtract if that reaction is actually above 0
    if (
      previousReaction &&
      updatedCounts[previousReaction] > 0
    ) {
      updatedCounts[previousReaction] -= 1;
    }

    updatedCounts[nextReaction] += 1;

    await updateDoc(ref, updatedCounts);

    setCounts(updatedCounts);
    setReaction(nextReaction);

    localStorage.setItem(
      `portfolio-reaction-${projectId}`,
      nextReaction
    );
  } catch (error) {
    console.error("Firebase reaction error:", error);
  }
}

    const total =
        counts.like +
        counts.impressive +
        counts.love;

    return (
        <div className={styles.wrapper}>
        <div className={styles.heading}>
            <span>YOU&apos;VE SEEN THE BUILD.</span>
            <h3>WHAT DO YOU THINK?</h3>
        </div>

        <div className={styles.reactions}>
            <button
            className={reaction === "like" ? styles.active : ""}
            onClick={() => handleReaction("like")}
            >
            <span className={styles.icon}>♡</span>
            LIKE IT
            <span>{counts.like}</span>
            </button>

            <button
            className={
                reaction === "impressive"
                ? styles.active
                : ""
            }
            onClick={() => handleReaction("impressive")}
            >
            <span className={styles.icon}>✦</span>
            IMPRESSIVE
            <span>{counts.impressive}</span>
            </button>

            <button
            className={reaction === "love" ? styles.active : ""}
            onClick={() => handleReaction("love")}
            >
            <span className={styles.icon}>♥</span>
            LOVE IT
            <span>{counts.love}</span>
            </button>
        </div>

        <span className={styles.count}>
            {total} {total === 1 ? "REACTION" : "REACTIONS"}
        </span>
        </div>
    );
    }