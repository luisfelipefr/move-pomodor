import React from "react";
import styles from "../styles/Components/CompletedChallengers.module.css";

export function CompletedChallengers() {
  return (
    <div className={styles.completedChallengerContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}
