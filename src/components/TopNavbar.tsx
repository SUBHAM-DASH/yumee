import React, { useState, useRef } from "react";
import { Navbar } from "react-bootstrap";
import OffenciveBar from "./OffenciveBar";
import { faSearch,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopNavbar = () => {
  const offenciveBarRef = useRef<{ handleOpen: () => void } | null>(null);

  const openOffcanvas = () => {
    if (offenciveBarRef.current) {
      offenciveBarRef.current.handleOpen();
    }
  };

  return (
    <div>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#fff" }}
        className="shadow-sm"
      >
        <div className="mx-3">
          <i
            className="bi bi-list"
            style={{ fontSize: "23px", cursor: "pointer" }}
            onClick={openOffcanvas}
          ></i>
        </div>
        <Navbar.Brand style={{ fontWeight: 700 }}>
          Yumee <span style={{ color: "#b11b1b" }}>EATS</span>
        </Navbar.Brand>
        <div className="m-auto input-group" style={{ width: "40%" }}>
          <span className="input-group-text" id="basic-addon1">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-describedby="basic-addon1"
            style={{ outline: "none", boxShadow: "none", fontWeight: 600 }}
          />
        </div>
        <div className="text-end mx-4">
          <button className="btn text-light rounded-pill" style={{ background: "#b11b1b" }}>
            <FontAwesomeIcon icon={faShoppingCart} className="mx-2"/>
            Cart
          </button>
        </div>
      </Navbar>

      <OffenciveBar ref={offenciveBarRef} />
    </div>
  );
};

export default TopNavbar;
