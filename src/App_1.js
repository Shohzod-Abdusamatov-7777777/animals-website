import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFoundPage from "./pages/PageNotFound";
import "./styles.css";

export default function App() {
  return (
    <>
           <BrowserRouter>
          <Route
            render={({ location }) => {
              return (
                <PageTransition
                  preset="cubeToTop"
                  transitionKey={location.pathname}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route  path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route component={NotFoundPage} />
                  </Switch>
                </PageTransition>
              );
            }}
          />
        </BrowserRouter>

    </>
  );
}
