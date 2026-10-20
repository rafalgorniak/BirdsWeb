import { useState, type CSSProperties } from "react";
import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {

  const navigate = useNavigate();
  const [logged, setLogged] = useState<boolean>();

  function logout() {

  }

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        🐦 Ptasie perypetie
      </Link>
      <div style={styles.links}>
        {!logged ?
          (<div style={styles.section}>
            <a style={styles.link} href="/trip">
              Dodaj wycieczkę
            </a>

            <a style={styles.link} href="/friends">
              Znajomi
            </a>
            <button style={{ ...styles.button, ...styles.logoutButton }} onClick={logout}>
              Wyloguj
            </button>
          </div>
          ) :
          (
            <div style={styles.section}>
              <button style={styles.button} onClick={() => navigate("/login")}>
                Zaloguj
              </button>
              <button style={{ ...styles.button, ...styles.registerButton }} onClick={() => navigate("/register")}>
                Rejestracja
              </button>
            </div>
          )

        }
      </div>
    </nav>
  );
}

const styles: Record<string, CSSProperties> = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    fontFamily: "system-ui",
    width: "100%",
    height: "70px",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: "0 20px",

    boxSizing: "border-box",

    color: "white",
    backgroundColor: "#7ba874",

    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",

    zIndex: 1000,
  },

  section: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  logo: {
    margin: 0,
    fontSize: "25px",
    textDecoration: "none",
    color: "white",
    cursor: "pointer",
  },

  links: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
  },

  button: {
    padding: "10px 18px",

    border: "none",
    borderRadius: "5px",

    backgroundColor: "#4e7c48",
    color: "white",

    cursor: "pointer",
    fontSize: "15px",
  },

  registerButton: {
    backgroundColor: "#4e7c48",
  },

  logoutButton: {
    backgroundColor: "#bd2c2c",
  },
};