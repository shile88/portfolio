import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Contact from "./pages/Contact";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import MyFooter from "./components/Footer/MyFooter";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./pages/ProjectsPage";
import React from "react";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
    <MyFooter />
    </Router>
  );
}

export default App;
