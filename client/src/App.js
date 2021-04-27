import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Container>
    </Router>
  );
}

export default App;
