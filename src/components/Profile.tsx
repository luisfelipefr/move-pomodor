import React from "react";
import styles from "../styles/Components/Profile.module.css";
export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <picture>
        <img src="https://github.com/luisfelipefr.png" alt="Image Profile" />
      </picture>
      <div>
        <strong>Luis Felipe</strong>
        <p>
          <picture>
            <img src="icons/level.svg" alt="level" />
          </picture>
          level 1
        </p>
      </div>
    </div>
  );
}
