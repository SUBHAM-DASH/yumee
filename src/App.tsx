import React from "react";
import TopNavbar from "./components/TopNavbar";
import Layout from "./components/Layout";
import MyAccount from "./pages/MyAccount";
import Delivery from "./pages/Delivery";
import { Routes, Route, Navigate } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Wallet from "./pages/Wallet";
import Help from "./pages/Help";
import Promotions from "./pages/Promotions";
import InviteFriends from "./pages/InviteFriends";
import CkEditot from "./pages/CkEditot";

function App() {
  return (
    <div className="App">
      <Layout>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Navigate to="/my-account" />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/help" element={<Help />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/invite-friends" element={<InviteFriends />} />
          <Route path="/ckeditor" element={<CkEditot />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
