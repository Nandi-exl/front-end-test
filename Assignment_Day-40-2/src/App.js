import React from "react";
import "./App.css";
import GetSection from "./components/GetSection/view";
import PostSection from "./components/PostSection/view";
import Api from "./components/api/api";


function App() {
  return (
    <div data-testid="text" id="app" className="container my-3">
      <h3>React Axios example - netlify</h3>
      <GetSection />
      <PostSection />
      <Api />
    </div>
  );
}

export default App;
