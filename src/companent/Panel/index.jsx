import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const index = () => {
  
  const [body, setBody] = useState({});
  useEffect(() => {
    setBody(document.body.style.backgroundColor);
  }, [document.body.style.backgroundColor]);
  return (
    <>
      <div
        class="offcanvas-start"
        style={{ backgroundColor: body === "rgb(194, 197, 199)" ? "#2F49D1" : "#161624" }}
      >
        <div class="offcanvas-body">
          <div className="d-flex justify-content-between align-items-center gap-3 px-3">
            <i class="fa-solid fa-address-book"></i>
            <h2>crm panel</h2>
            <button
              type="button"
              class="btn text-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <img src="/public/menu-toggle.png" />
            </button>
          </div>
          <hr />
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <Link
                class="nav-link active d-flex align-items-center gap-3"
                aria-current="page"
                to="/"
              >
                <i class="fa-solid fa-house"></i> Xisobot
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active d-flex align-items-center gap-3"
                aria-current="page"
                to="/oqtuvchi"
              >
                <i class="fa-solid fa-graduation-cap"></i> O’quvchilar
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active d-flex align-items-center gap-3"
                aria-current="page"
                to="/guruh"
              >
                <i class="fa-solid fa-users"></i> Guruhlar
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active d-flex align-items-center gap-3"
                aria-current="page"
                to="/tolov"
              >
                <i class="fa-solid fa-credit-card"></i> To’lovlar
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active d-flex align-items-center gap-3"
                aria-current="page"
                to="/davomat"
              >
                <i class="fa-solid fa-address-card"></i> Davomat
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;
