import React, { memo } from "react";
import styles from "./MainBtn.module.scss";

const MainBtn = memo(({ whiteBg, children, ...attributes }) => {
  return (
    <button
      className={`
        ${styles.mainBtn} 
        ${whiteBg ? styles.mainBtn_whiteBg : ""} 
      `}
      {...attributes}
    >
      <span>{children}</span>
    </button>
  );
});

export default MainBtn;
