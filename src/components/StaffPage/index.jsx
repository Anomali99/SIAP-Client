import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Session from "../../session";
import PageTemplate from "../assets/PageTemplate";
import styles from "./index.module.css";
import DataSantri from "../assets/DataSantri";
import Dashboard from "../assets/Dashboard";
import {
  asatidz_menu,
  class_menu,
  dashboard_menu,
  finance_menu,
  santri_menu,
} from "../../assets";

const StaffPage = () => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isStaff, setIsStaff] = useState(true);
  useEffect(() => {
    if (Session.getItem("login") == null) {
      setIsLoggedIn(false);
    } else if (Session.getItem("job") == "") {
      setIsStaff(false);
    }
  }, []);
  if (!isLoggedIn) return <Navigate to="/asatidz" />;
  if (!isStaff) return <Navigate to="/asatidz/dashboard" />;

  const menu = [
    { image: dashboard_menu, title: "Dashboard" },
    { image: santri_menu, title: "Data Santri" },
    { image: asatidz_menu, title: "Data Asatidz" },
    { image: class_menu, title: "Data Kelas" },
    { image: finance_menu, title: "Keuangan" },
  ];

  const getContent = () => {
    switch (selectedMenuIndex) {
      case 0:
        return <Dashboard />;
      case 1:
        return <DataSantri />;
      case 2:
        return <div className={styles.div}>Data Asatidz Content</div>;
      case 3:
        return <div className={styles.div}>Data Kelas Content</div>;
      case 4:
        return <div className={styles.div}>Keuangan Content</div>;
      default:
        return (
          <div className={styles.div}>
            Welcome to the Staff Page. Please select a menu item.
          </div>
        );
    }
  };

  return (
    <PageTemplate
      menu={menu}
      content={getContent()}
      setFocusedIndex={setSelectedMenuIndex}
    />
  );
};

export default StaffPage;
