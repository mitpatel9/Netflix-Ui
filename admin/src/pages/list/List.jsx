import React from 'react'
import "./List.css"
import Chart from "../../component/chart/Chart"
import {ProductData} from "../../DummyData"
import PublishIcon from '@mui/icons-material/Publish';
import { NavLink, useLocation } from 'react-router-dom';


export default function List() {
    const location=useLocation();
    const movieList=location.state;
 
    return (
        <div className='product'>
            <div className="prodcutTitleContainer">
                <h1 className="productTitle">Movie List</h1>
                <NavLink to="/newList"><button className="productAddButton">Create</button></NavLink>
            </div>
            <div className="producttop">
                <div className="producttopright">
                    <div className="productInfoTop">
                        {/* <img src={movie?.imgTital} alt="" className="productInfoImg" /> */}
                        <span className="productName">{movieList.tital}</span>
                    </div>
                    <div className="productInfobottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{movieList._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfKey">Genre:</span>
                            <span className="productInfoValue">{movieList.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Type:</span>
                            <span className="productInfoValue">{movieList.type}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productbuttom">
                <from className="productform">
                    <div className="productformleft">
                        <label>Movie List Name</label>
                        <input type="text" name="" id=""  placeholder={movieList.tital}/>
                        <label>List Genre</label>
                        <input type="text" name="" id=""  placeholder={movieList.genre}/>
                        <label>List Type</label>
                        <input type="text" name="" id=""  placeholder={"movie or series"}/>
                        <label>Movie Trailer</label>
                        <input type="file" name="" id=""  />
                        <label>Movie Video</label>
                        <input type="file" name="" id=""  />
                    </div>
                    <div className="productformRight">
                        <button className="productbutton">Update</button>
                    </div>
                </from>
            </div>

        </div>
    )
}
