import "./Listitem.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Listitem = ({ index ,item }) => {
  const [isHover, setIsHover] = useState(false);
  const [movieList,setmovielist]=useState(null);
  useEffect(()=>{
  const getmovielist= async()=>{
    try{
      await fetch("http://localhost:8000/api/movie/find/"+item, {
        headers: {
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE5YWUxOTE0ZTVmYjcyOWRmNzNkYSIsImlhdCI6MTY3NDUzMzQ3MiwiZXhwIjoxNjc0OTY1NDcyfQ.1OUJE0-jHZnZvChd78Z1Vqdb88z8sC8Mx-_5tTvvRmA",
        },
      })
        .then((res) => res.json())
        .then((data) => setmovielist(data));
    }catch(err){
      console.log(err)
    }
  }
  getmovielist();
  },[item])
  return (
    <NavLink to={{pathname:"/watch"}} state={{movieList}}>
    <div
      className="listitem"
      style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <img
        src={movieList?.imgTital}
        alt=""
        className="mainimg"
      />
      {isHover &&(
        <>
        <video src={movieList.trailer} type="video/mp4" autoPlay loop/>
      <div className="iteminfo">
        <div className="icons">
          <PlayArrowIcon className="iconbtn"/>
          <AddIcon className="iconbtn"/>
          <ThumbUpOffAltIcon className="iconbtn"/>
          <ThumbDownOffAltIcon className="iconbtn"/>
          </div>
          <div className="iteminfotop">
            <span>{movieList.createdAt}</span>
            <span className="limit">+{movieList.limit}</span>
            <span>{movieList.year}</span>
          </div>
          <div className="desc">
          {movieList.desc} 
          </div>
          <div className="genre">{movieList.genre}</div>
      </div>
        </>
      )}
    </div>
    </NavLink>
  );
};

export default Listitem;
