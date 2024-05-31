import React from "react";
import styles from "./index.module.css";

const RoleCard = ({ icon, title, onClick }) => {
  return (
    <div className={styles.div} onClick={onClick}>
      <img src={icon} alt="" />
      <h4>{title}</h4>
    </div>
  );
};

export default RoleCard;
