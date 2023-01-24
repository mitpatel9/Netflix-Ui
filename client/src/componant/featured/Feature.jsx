import "./Feature.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useEffect, useState } from "react";

const Feature = ({type}) => {
  const [content,setContent]=useState({});
  useEffect(()=>{
    const getRandomContent=async() =>{
      try{
        await fetch(`http://localhost:8000/api/movie/random?${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE5YWUxOTE0ZTVmYjcyOWRmNzNkYSIsImlhdCI6MTY3NDUzMzQ3MiwiZXhwIjoxNjc0OTY1NDcyfQ.1OUJE0-jHZnZvChd78Z1Vqdb88z8sC8Mx-_5tTvvRmA",
          },
        })
          .then((res) => res.json())
          .then((data) => setContent(data[0]));

      }catch(err){
        console.log(err)
      }
    }
    getRandomContent();
  },[type])
  return (
    <div className="feature">
        {type && (
            <div className="category">
                <span className="typetitle">{type === 'movie' ? 'movies' :'series'}</span>
                <select name="genre" id="genre">
                    <option>genre</option>
                    <option value="Advantue">Advanture</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documenty">Documenty</option>
                </select>
            </div>
        )}
      <img
        src={content?.imgTital}
        alt=""
        className="bgimg"
      />
      <div className="info">
        <img src={content?.imgSm} alt="" className="bgimg2"/>
        <span className="desc">
          {content.desc}
        </span>
        <div className="btn">
          <button className="play">
            <PlayArrowIcon />
            <span>play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon/>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
