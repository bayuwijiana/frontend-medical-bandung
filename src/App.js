import { createContext, useState } from "react";
import Header from "./components/Header";
import "./style.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dokter from "./pages/Dokter";
import Home from "./pages/Home";
import Ruangan from "./pages/Ruangan";
import Pasien from "./pages/Pasien";


export const TemaContext = createContext();

function App() {
  const [tema, setTema] = useState(localStorage.getItem("tema"));
  function ubahTema() {
    setTema(tema === "terang" ? "gelap" : "terang");
    localStorage.setItem("tema", tema === "terang" ? "gelap" : "terang");
  }


  return (
    <TemaContext.Provider value={[tema, ubahTema]}>
     

      <div
        style={{
          background: tema === "terang" ? "#fff" : "#000",
          color: tema === "terang" ? "#000" : "#fff",
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dokter" element={<Dokter />} />
          <Route path="ruangan" element={<Ruangan />} />
          <Route path="pasien" element={<Pasien />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Footer />
      </div>



    </TemaContext.Provider>
  );
}
export default App;
