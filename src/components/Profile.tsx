import React, { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import styles from "../styles/Components/Profile.module.css";
export function Profile() {
  const { level } = useContext(ChallengesContext);
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
          Level { level }
        </p>
      </div>
    </div>
  );
}
