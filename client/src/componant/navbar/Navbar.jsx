import "./Navbar.css";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

const Navbar = () => {
  //all state
  const [isScrolled, setIsScrolled] = useState(false);
  const [removelass, setRemoveClass] = useState("option");

  // all Function
  const opensetting = () => {
    if (removelass === "option") {
      setRemoveClass("option1");
    } else {
      setRemoveClass("option");
    }
  };
  //windo scroll function
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? 'navbar scrolled': 'navbar'}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
            className="logoImg"
          />
          <NavLink to="/"><span>Home</span></NavLink>
          <NavLink to="/movie"><span>Movies</span></NavLink>
          <NavLink to="/series"><span>Series</span></NavLink>
          <span>New And Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>Kid</span>
          <NotificationsIcon className="icon" />
          <img
            src="https://images.unsplash.com/photo-1673279495269-bc0d925c0612?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
            alt=""
            className="UserImg"
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" onClick={opensetting} />
            <div className={removelass}>
              <span className="setting">Settings</span>
              <span className="setting">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
