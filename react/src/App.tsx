import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import TheHeader from "./components/TheHeader";
import CounterCTA from "./components/CounterCTA";

const Home = lazy(() => import("./views/Home"));
const About = lazy(() => import("./views/About"));

function App() {
  return (
    <>
      <TheHeader>
        <CounterCTA />
      </TheHeader>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
