import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Friends from "./pages/Friends";
import Login from "./pages/Login"
import Moderation from "./pages/Moderation";
import Feed from "./pages/Feed";
import Trips from "./pages/Trips";

export default function App() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/friends" element={<Friends />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/trips" element={<Trips />}></Route>
          <Route path="/moderation" element={<Moderation />}></Route>
        </Routes>
      </main>
    </>
  );
}

const styles = {
  main: {
    paddingTop: "0px",
  },
};