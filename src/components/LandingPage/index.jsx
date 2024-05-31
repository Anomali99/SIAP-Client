import React, { useState } from "react";
import styles from "./index.module.css";
import logo_pp from "/logo-pp.png";
import { Navigate } from "react-router-dom";

function LandingPage() {
  const [goAsatidz, setAsatidz] = useState(false);
  const [goSantri, setSantri] = useState(false);

  if (goAsatidz) return <Navigate to="/asatidz" />;
  if (goSantri) return <Navigate to="/santri" />;

  return (
    <div className={styles.container}>
      <div className={styles.menu_container}>
        <div className={styles.header}>
          <img className={styles.img} src={logo_pp} alt="" />
        </div>
        <div className={styles.submit_container}>
          <div
            className={styles.submit}
            onClick={() => {
              setSantri(true);
            }}
          >
            LOGIN SANTRI / WALI
          </div>
          <div
            className={styles.submit}
            onClick={() => {
              setAsatidz(true);
            }}
          >
            LOGIN ASATIDZ
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.text}>مرحباً بك أيها المستخدم</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
