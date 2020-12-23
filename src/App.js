import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/About/AboutPage";
import WeatherPage from "./Pages/Weather/WeatherPage";
import ImagesPage from "./Pages/Images/ImagesPage";
import { Navbar } from "./components/Navbar";

import "./styles.css";

export default function App() {
  return (
    <main className="App">
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  <AboutPage />
                </React.Fragment>
              )}
            />

            <Route exact path="/weather" component={WeatherPage} />
            <Route exact path="/images" component={ImagesPage} />
          </Switch>
        </div>
      </Router>
    </main>
  );
}
