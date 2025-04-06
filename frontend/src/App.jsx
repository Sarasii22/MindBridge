import Header from "./Components/Heaader/Header";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
const Home = () => {
  return <div>Home Page</div>;
}
const Community = () => {
  return <div>Community Page</div>;
}
const About = () => {
  return <div>About Page</div>;
}
export default App;