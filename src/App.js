import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import links from "./data/links";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Carousel2 from "./components/Carousel2";

function App() {
  const routeMaps = links.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));

  return (
    <BrowserRouter>
      <NavBar links={links} />
      <div className="container ">
        <div className="row">
          <div className="col-sm ">
            <Switch>{routeMaps}</Switch>
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
