import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Panel from "../Panel/index.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Davomat from "../../pages/Davomat";
import Guruh from "../../pages/Guruh";
import Oqtuvchilar from "../../pages/Oqtuvchilar";
import Oquvchilar from "../../pages/Oquvchilar";
import Tolovlar from "../../pages/Tolovlar";
import NoPage from "../../pages/404";
import { useEffect } from "react";
const index = () => {
  const [Day, setDay] = useState(false);
  let Dta = new Date();
  const [Dat, setDate] = useState(
    `${Dta.getFullYear()}-${Dta.getMonth() + 1}-${Dta.getDate()}`
  );
  const [body, setBody] = useState({});
  useEffect(() => {
    setBody(document.body.style.backgroundColor);
  }, [document.body.style.backgroundColor]);
  Day
    ? ((document.body.style.backgroundColor = "#c2c5c7"),
      (document.body.style.color = "#2F49D1"))
    : ((document.body.style.backgroundColor = "black"),
      (document.body.style.color = "white"));
  return (
    <>
      <nav class="d-flex g-0">
        <Panel />

        <div class="container-fluid p-0">
          <div
            className=" d-flex justify-content-between align-items-center mb-3 px-3 py-2"
            style={{
              backgroundColor: body === "rgb(194, 197, 199)" ? "white" : "#161624",
            }}
          >
            <h3>Salomlar</h3>
            <h5>{Dat}</h5>
            <div className="d-flex gap-3 align-items-center">
              <button className="btn" onClick={() => setDay(!Day)}>
                {Day ? (
                  <i class="fa-solid fa-sun"></i>
                ) : (
                  <i class="fa-solid fa-moon"></i>
                )}
              </button>

              <i class="fa-solid fa-bell"></i>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/davomat" element={<Davomat />} />
            <Route path="/guruh" element={<Guruh />} />
            <Route path="/oqtuvchi" element={<Oqtuvchilar />} />
            <Route path="/oquvchi" element={<Oquvchilar />} />
            <Route path="/tolov" element={<Tolovlar />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </nav>
    </>
  );
};

export default index;
