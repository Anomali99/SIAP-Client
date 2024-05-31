import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Session from "../../session";
import { dashboard_bg, logo_pp } from "../../assets";
import styles from "./index.module.css";
import RoleCard from "../assets/RoleCard";
import { staff_icon, asatidz_icon, logout_icon } from "../../assets";

const DashboardPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isStaff, setIsStaff] = useState(false);
  useEffect(() => {
    if (Session.getItem("login") == null) {
      setIsLoggedIn(false);
    }
  }, []);

  if (!isLoggedIn) return <Navigate to="/asatidz" />;
  if (isStaff) return <Navigate to="/asatidz/staff" />;

  return (
    <div className={styles.container}>
      <img className={styles.bg} src={dashboard_bg} alt="" />
      <img
        className={styles.logout}
        src={logout_icon}
        alt=""
        onClick={() => {
          setIsLoggedIn(false);
        }}
      />
      <img className={styles.logo} src={logo_pp} alt="" />
      <h1 className={styles.title}>اختار مستوى</h1>
      <div className={styles.card}>
        <RoleCard
          icon={staff_icon}
          title={"Satff"}
          onClick={() => {
            setIsStaff(true);
          }}
        />
        <RoleCard icon={asatidz_icon} title={"Asatidz"} />
      </div>
    </div>
  );
};

export default DashboardPage;
