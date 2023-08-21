import React from "react";
import Home from "./home";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}



function About(){
  return (
    <div id="about">
    <h2>About</h2>
    </div>
  )
}


function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
    </div>
  );
}

export default App;
