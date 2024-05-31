import { useState } from "react";
import styles from "./index.module.css";
import { logo_pp, login_bg } from "../../assets/index";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function LoginPage({ asatidz, value }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = () => {
    value({ phone, password });
    setIsLoggedIn(true);
  };

  if (isLoggedIn)
    return <Navigate to={`/${asatidz ? "asatidz" : "santri"}/dashboard`} />;

  return (
    <div className={styles.container}>
      <img className={styles.bg_img} src={login_bg} alt="" />
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
