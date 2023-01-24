/* eslint-disable */
import { useState } from "react";
import "./Newlist.css";
import storage from "../../Firebase";
import {  getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";

export default function Newlist() {
  const [list, setList] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTital, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  

  const handlechange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };
 
  const createNewList = async () => {
    try {
      await axios.post("http://localhost:8000/api/movie", list, {
  
        headers: {
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE5YWUxOTE0ZTVmYjcyOWRmNzNkYSIsImlhdCI6MTY3NDUzMzQ3MiwiZXhwIjoxNjc0OTY1NDcyfQ.1OUJE0-jHZnZvChd78Z1Vqdb88z8sC8Mx-_5tTvvRmA",
        },
       
      })
        
    } catch (err) {
      console.log(err);
    }
  }
  const handaleSubmit=(e)=>{
    e.preventDefault();
    createNewList();
  }
  const handleSelect=(e)=>{
    e.target.selectOptions;
  }
  return (
    <div className="newproduct">
      <h1 className="addproducttitle">New List</h1>
      <form className="addproductform">
        <div className="addproductitem">
          <label>List Title</label>
          <input
            type="text"
            id="tital"
            placeholder="spiderman"
            name="tital"
            onChange={handlechange}
          />
        </div>
        <div className="addproductitem">
          <label>List Type</label>
          <select id="isSeries" name="isSeries" onChange={handlechange}>
            <option value="Movie">Movie</option>
            <option value="Series">Series</option>
          </select>
        </div>
        <div className="addproductitem">
          <label>Genre</label>
          <input
            type="text"
            id="genre"
            placeholder="comedy"
            name="genre"
            onChange={handlechange}
          />
        </div>
        <div className="addproductitem">
          <label>content</label>
          <select multiple id="content" name="content" onChange={handleSelect}>
            <option value="Movie">Movie</option>
            <option value="Series">Series</option>
          </select>
        </div>
        
          <button className="addproductbutton" onClick={handaleSubmit}>Create</button>
      </form>
    </div>
  );
}
