import React from "react";
import "../styles/global.css";

import { ChallengersProvider } from "../context/ChallengesContext";

import "./_document";
function MyApp({ Component, pageProps }) {
  return (
    <ChallengersProvider>
        <Component {...pageProps} />
    </ChallengersProvider>
  );
}

export default MyApp;
