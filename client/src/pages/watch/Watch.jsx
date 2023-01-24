import "./Watch.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useLocation ,NavLink } from "react-router-dom";
import {  useState } from "react";

const Watch = () => {
  const location=useLocation()
  const movie=location.state.movieList

  
  return (
    <div className="watch">
        <NavLink to='/' className="link">
        <div className="back">
          <KeyboardBackspaceIcon />
           Home
           </div>
        </NavLink>
      
      <video className='video' src={movie.video} type="video/mp4" autoPlay controls playsInline/>
    </div>
  );
};

export default Watch;
