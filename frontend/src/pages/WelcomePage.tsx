
import type { CSSProperties } from "react";



export default function WelcomePage() {
    return (
        <main style={styles.container}>
            <section style={styles.hero}>
                <span style={styles.eyebrow}>
                    Miejsce dla miłośników ptaków
                </span>

                <h1 style={styles.title}>
                    Świat ptaków.
                    <br />
                    <span style={styles.highlight}>
                        Twoje historie.
                    </span>
                </h1>

                <p style={styles.description}>
                    Odkrywaj niezwykły świat ptaków, dziel się swoimi
                    zdjęciami i obserwacjami oraz poznawaj osoby,
                    które tak jak Ty kochają naturę.
                </p>
            </section>

            <section style={styles.cards}>
                <article style={styles.card}>
                    <span style={styles.icon}>📷</span>
                    <h2 style={styles.cardTitle}>Dziel się zdjęciami</h2>
                    <p style={styles.cardDescription}>
                        Publikuj fotografie swoich obserwacji i pokazuj
                        innym piękno otaczającej Cię przyrody.
                    </p>
                </article>

                <article style={styles.card}>
                    <span style={styles.icon}>🦉</span>
                    <h2 style={styles.cardTitle}>Poznawaj gatunki</h2>
                    <p style={styles.cardDescription}>
                        Odkrywaj różnorodność ptaków i poznawaj historie
                        związane z ich codziennym życiem.
                    </p>
                </article>

                <article style={styles.card}>
                    <span style={styles.icon}>🌿</span>
                    <h2 style={styles.cardTitle}>Odkrywaj razem</h2>
                    <p style={styles.cardDescription}>
                        Przeglądaj posty innych miłośników ptaków
                        i inspiruj się ich obserwacjami.
                    </p>
                </article>
            </section>

            <footer style={styles.footer}>
                ODKRYWAJ · OBSERWUJ · DZIEL SIĘ
            </footer>
        </main>
    );
}

const styles: Record<string, CSSProperties> = {
    container: {
        minHeight: "calc(100vh - 70px)",
        padding: "60px 24px",
        backgroundColor: "#f8f7f1",
        color: "#244634",
        fontFamily: "Arial, sans-serif",
    },

    hero: {
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "60px 20px",
        textAlign: "center",
    },

    eyebrow: {
        color: "#52785a",
        fontSize: "13px",
        fontWeight: "bold",
        letterSpacing: "2px",
        textTransform: "uppercase",
    },

    title: {
        margin: "24px 0",
        fontFamily: "Georgia, serif",
        fontSize: "clamp(38px, 6vw, 64px)",
        fontWeight: "normal",
        lineHeight: 1.15,
    },

    highlight: {
        color: "#71916a",
        fontStyle: "italic",
    },

    description: {
        maxWidth: "620px",
        margin: "0 auto",
        color: "#70786d",
        fontSize: "17px",
        lineHeight: 1.8,
    },

    cards: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "30px",
        maxWidth: "1000px",
        margin: "30px auto 0",

    },

    card: {
        flex: "1 1 240px",
        maxWidth: "310px",
        padding: "28px",
        backgroundColor: "#fffefa",
        border: "1px solid #e5e7dc",
        borderRadius: "5px",
        textAlign: "left",
        boxSizing: "border-box",
        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.2)",
    },

    icon: {
        fontSize: "30px",
    },

    cardTitle: {
        margin: "18px 0 10px",
        fontFamily: "Georgia, serif",
        fontSize: "21px",
        fontWeight: "normal",
    },

    cardDescription: {
        color: "#70786d",
        fontSize: "14px",
        lineHeight: 1.8,
    },

    footer: {
        marginTop: "55px",
        color: "#52785a",
        fontSize: "12px",
        letterSpacing: "2px",
        textAlign: "center",
    },
};