import "./List.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Listitem from "./../listitem/Listitem";
import { useRef, useState } from "react";

const List = ({list}) => {
  const [isMoved, setMoved]=useState(false)
  const [slideNumber, setSlideNumber]=useState(0)
  const listRef = useRef();
  const handalarrow = (direction) => {
    setMoved(true)
    let distance=listRef.current.getBoundingClientRect().x-50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber-1);
      listRef.current.style.transform=`translateX(${230+distance}px)`
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber+1);
      listRef.current.style.transform=`translateX(${-230+distance}px)`
    }
  };

  return (
    <div className="list">
      <span className="listtital">{list.tital}</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon
          className="sliderArrow left"
          onClick={() => handalarrow("left")}
          style={{display:!isMoved && 'none'}}
        />
        <div className="listcontainer" ref={listRef}>
          {list.content.map((item,i)=>(
            <Listitem index={i} item={item}/>
          ))}  
        </div>
        <ArrowForwardIosOutlinedIcon
          className="sliderArrow right"
          onClick={() => handalarrow("right")}
        />
      </div>
    </div>
  );
};

export default List;
