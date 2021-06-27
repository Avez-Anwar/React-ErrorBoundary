import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Hero from "./Hero";

function App() {
  return (
    <h1>
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </h1>
  );
}

export default App;
