import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Offcanvas, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTruck,
  faHeart,
  faWallet,
  faQuestionCircle,
  faTag,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

type OffenciveBarProps = {};

type OffenciveBarRef = {
  handleOpen: () => void;
};

const OffenciveBar = (
  props: OffenciveBarProps,
  ref: React.Ref<OffenciveBarRef>
) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  useImperativeHandle(ref, () => ({
    handleOpen: handleOpen,
  }));

  return (
    <div>
      <Offcanvas style={{ maxWidth: "250px" }} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="m-auto">
            Yumee{" "}
            <span className="text-danger" style={{ fontWeight: "700" }}>
              Eats
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavLink
              to="/my-account"
              style={{ fontWeight: 600 }}
              onClick={handleClose}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "non-active"
              }
            >
              <div className="col-2">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="col-9">Account</div>
            </NavLink>
            <NavLink
              to="/delivery"
              style={{ fontWeight: 600 }}
              onClick={handleClose}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "non-active"
              }
            >
              <div className="col-2">
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <div className="col-9">Delivery</div>
            </NavLink>
            <NavLink
              to="/favorites"
              style={{ fontWeight: 600 }}
              onClick={handleClose}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "non-active"
              }
            >
              <div className="col-2">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="col-9">Favorites</div>
            </NavLink>
            <NavLink
              to="/wallet"
              style={{ fontWeight: 600 }}
              onClick={handleClose}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "non-active"
              }
            >
              <div className="col-2">
                <FontAwesomeIcon icon={faWallet} />
              </div>
              <div className="col-9">Wallet</div>
            </NavLink>
            <NavLink
              to="/help"
              style={{ fontWeight: 600 }}
              onClick={handleClose}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "non-active"
              }
            >
              <div className="col-2">
                <FontAwesomeIcon icon={faQuestionCircle} />
              </div>
              <div className="col-9">Help</div>
            </NavLink>
            <NavLink
              to="/promotions"
              style={{ fontWeight: 600 }}
              onClick={handleClose}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "non-active"
              }
            >
              <div className="col-2">
                <FontAwesomeIcon icon={faTag} />
              </div>
              <div className="col-9">Promotions</div>
            </NavLink>
            <NavLink
              to="/invite-friends"
              style={{ fontWeight: 600 }}
              onClick={handleClose}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "non-active"
              }
            >
              <div className="col-2">
                <FontAwesomeIcon icon={faUserFriends} />
              </div>
              <div className="col-9">Invite Friends</div>
            </NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default forwardRef(OffenciveBar);
