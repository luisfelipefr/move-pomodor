import React, { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import styles from "../styles/Components/CompletedChallengers.module.css";

export function CompletedChallengers() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengerContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
