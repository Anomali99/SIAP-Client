import { useState } from "react";
import styles from "./index.module.css";
import logo_pp from "/logo-pp.png";
import { Link } from "react-router-dom";

function LoginPage({ asatidz, value }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    value({ phone, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.bg_img}></div>
      <div className={styles.menu_container}>
        <div className={styles.text}>
          التطبيق الفائق للمدرسة الداخلية الإسلامية
        </div>
        <div className={styles.header}>
          <img className={styles.pp_img} src={logo_pp} alt="" />
          <div className={styles.title}>Login to Islamic Boarding School</div>
        </div>
        <div className={styles.inputs}>
          <label className={styles.label} htmlFor="no">
            {asatidz ? "Asatidz " : "Santri "}Phone
          </label>
          <input
            className={styles.input}
            type="text"
            id="no"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label className={styles.label} htmlFor="pass">
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.submit_container}>
          <div className={styles.submit} onClick={handleSubmit}>
            LOGIN
          </div>
        </div>
        <Link className={styles.cancel} to="/">
          -Cancel-
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
