import React, { memo } from "react";
import styles from "./MainBtn.module.scss";
import ArrowAnimation from "../../layout/ArrowAnimation/ArrowAnimation";

const MainBtn = memo(({ className, children, secondaryBg, ...attributes }) => {
  return (
    <button
      className={`
        ${styles.mainBtn} 
        ${secondaryBg ? styles.mainBtn_secondaryBg : ""} 
      `}
      {...attributes}
    >
      <span className={styles.mainBtn__btnText}>{children}</span>
      <ArrowAnimation
        circleClass={
          secondaryBg
            ? styles.mainBtn_circlePrimary
            : styles.mainBtn_circleSecondary
        }
        arrowClass={
          secondaryBg
            ? styles.mainBtn_arrowPrimary
            : styles.mainBtn_arrowSecondary
        }
      />
    </button>
  );
});

export default MainBtn;
