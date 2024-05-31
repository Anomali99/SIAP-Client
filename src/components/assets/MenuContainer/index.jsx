import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const MenuContainer = ({ image, title, isFocus, onClick }) => {
  const [focus, setFocus] = useState(isFocus);

  useEffect(() => {
    setFocus(isFocus);
  }, [isFocus]);

  return (
    <div
      className={`${styles.menuContainer} ${focus ? styles.focus : ""}`}
      onClick={onClick}
    >
      <img src={image} alt={title} />
      <h5>{title}</h5>
    </div>
  );
};

export default MenuContainer;
