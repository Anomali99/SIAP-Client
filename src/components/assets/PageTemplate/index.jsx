import React, { useState } from "react";
import styles from "./index.module.css";
import MenuContainer from "../MenuContainer";
import { logout_menu } from "../../../assets";

const PageTemplate = ({ menu, content, setFocusedIndex }) => {
  const [focusedIndex, setFocusedIndexState] = useState(0);

  const handleMenuClick = (index) => {
    setFocusedIndexState(index);
    setFocusedIndex(index);
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>مرحباً بك أيها المعلم سبحان الله</h1>
      <div className={styles.mainContainer}>
        <div className={styles.menuContainer}>
          <h3>Admin Page</h3>
          <h4>Discover</h4>
          <div className={styles.menuItem}>
            {menu.map((item, index) => (
              <MenuContainer
                key={index}
                image={item.image}
                title={item.title}
                isFocus={focusedIndex === index}
                onClick={() => handleMenuClick(index)}
              />
            ))}
          </div>
          <div className={styles.menuLogout}>
            <MenuContainer image={logout_menu} title={"Log Out"} />
          </div>
        </div>
        <div className={styles.contentContainer}>{content}</div>
      </div>
    </div>
  );
};

export default PageTemplate;
