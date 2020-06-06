import React from "react";
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import AboutPage from "./pages/About";
import DiscoverPage from "./pages/Discover";
import SearchPage from "./pages/Search";

function NavBar() {
    return (
    <Router>
      <div>
        <nav className="nav">
            <Link to="/" className="nav-link active">About Us
            </Link>  
            <Link to="/discover" className="nav-link">Discover Dogs
            </Link>  
            <Link to="/search" className="nav-link">Search Dogs
            </Link>  
        </nav>
        <Switch>
          <Route path="/discover">
            <DiscoverPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <AboutPage />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}

export default NavBar;
