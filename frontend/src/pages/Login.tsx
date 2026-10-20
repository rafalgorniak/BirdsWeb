import React, { useState, type CSSProperties } from "react";

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  function handleLogin(e: Parameters<NonNullable<React.ComponentProps<"form">["onSubmit"]>>[0]) {
    e.preventDefault();

    console.log(email, password)
  }

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleLogin}>
        <h1 style={styles.title}>Witaj ponownie</h1>

        <div style={styles.field}>
          <label htmlFor="email" style={styles.label}>Adres e-mail</label>
          <input id="email" type="email" placeholder="np. ptak@example.com" value={email}
            onChange={(e) => setEmail(e.target.value)} style={styles.input} required
          ></input>
        </div>

        <div style={styles.field}>
          <label htmlFor="password" style={styles.label}>Hasło</label>
          <input id="password" type="password" placeholder="wpisz hasło" value={password}
            onChange={(e) => setPassword(e.target.value)} style={styles.input} required
          ></input>
        </div>

        <button type="submit" style={styles.button}>Zaloguj się</button>

        <p style={styles.footer} >Nie masz konta?{" "}
          <a href="/register" style={styles.registerLink}>
            Zarejestruj się</a>
        </p>


      </form>
    </div>
  )
}

const styles: Record<string, CSSProperties> = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
    boxSizing: "border-box",
    backgroundColor: "#f5f7f2",
    fontFamily: "system-ui",
  },

  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "32px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.2)",
  },

  title: {
    margin: 0,
    textAlign: "center",
    fontSize: "25px",
    color: ""
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  label: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#26332a",
  },

  input: {
    padding: "12px",
    border: "1px solid #4e7c48",
    borderRadius: "7px",
    fontSize: "15px",
    outlineColor: "#4e7c48",
    boxSizing: "border-box",
    width: "100%",
  },

  button: {
    padding: "13px",
    border: "none",
    borderRadius: "7px",
    backgroundColor: "#4e7c48",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "4px",
  },

  footer: {
    margin: "0",
    textAlign: "center",
    fontSize: "14px",
    color: "#6b756b",
  },

  registerLink: {
    color: "#4e7c48",
    fontWeight: "bold",
    textDecoration: "none",
  },

}