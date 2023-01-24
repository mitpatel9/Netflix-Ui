/* eslint-disable */
import { useState } from "react";
import "./NewProduct.css";
import storage from "../../Firebase";
import {  getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";

export default function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTital, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [upload, setUpload] = useState(0);

  const handlechange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };
  const uploadfirebase = (items) => {
    items.forEach((item) => {
      //const storage = getStorage();
      const storageRef = ref(storage, `/item/${item.file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      //const uploadTask = storage.ref().put(item);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMovie((prev) => {
                    return { ...prev, [item.label]: downloadURL };
                  });
              setUpload((prev) => prev + 1);
          });
        //   uploadTask.snapshot.ref.getDownloadURL().then((url) => {
        //     setMovie((prev) => {
        //       return { ...prev, [item.label]: url };
        //     });
        //     setUpload((prev) => prev + 1);
        //   });
         }
      );
    });
  };
 
  const handaleUplode = (e) => {
    e.preventDefault();
    uploadfirebase([
      { file: img, label: "img" },
      { file: imgTital, label: "imgTital" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };
  const createNewMovie = async () => {
    try {
      await axios.post("http://localhost:8000/api/movie", movie, {
  
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
    createNewMovie();
  }
  return (
    <div className="newproduct">
      <h1 className="addproducttitle">New Movie</h1>
      <form className="addproductform">
        <div className="addproductitem">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="addproductitem">
          <label>Tital Image</label>
          <input
            type="file"
            id="imgTital"
            name="imgTital"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="addproductitem">
          <label>Thumnail Image</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="addproductitem">
          <label>Movie Title</label>
          <input
            type="text"
            id="tital"
            placeholder="spiderman"
            name="tital"
            onChange={handlechange}
          />
        </div>
        <div className="addproductitem">
          <label>Description</label>
          <input
            type="text"
            id="desc"
            placeholder="Description"
            name="desc"
            onChange={handlechange}
          />
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
          <label>Year</label>
          <input
            type="text"
            id="year"
            placeholder="2023"
            name="year"
            onChange={handlechange}
          />
        </div>
        <div className="addproductitem">
          <label>Limit</label>
          <input
            type="text"
            id="limit"
            placeholder="16"
            name="limit"
            onChange={handlechange}
          />
        </div>
        <div className="addproductitem">
          <label>Duration</label>
          <input
            type="text"
            id="duretion"
            placeholder="Duration"
            name="duretion"
            onChange={handlechange}
          />
        </div>
        <div className="addproductitem">
          <label>Is Series</label>
          <select id="isSeries" name="isSeries" onChange={handlechange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addproductitem">
          <label>Video</label>
          <input
            type="file"
            id="video"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        <div className="addproductitem">
          <label>trailer</label>
          <input
            type="file"
            id="trailer"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        {upload === 5 ? (
          <button className="addproductbutton" onClick={handaleSubmit}>Create</button>
        ) : (
          <button className="addproductbutton" onClick={handaleUplode}>
            upload
          </button>
        )}
      </form>
    </div>
  );
}
