import React from 'react'
import "./Product.css"
import Chart from "../../component/chart/Chart"
import {ProductData} from "../../DummyData"
import PublishIcon from '@mui/icons-material/Publish';
import { NavLink, useLocation } from 'react-router-dom';


export default function Product() {
    const location=useLocation();
    const movie=location.state;
 
    return (
        <div className='product'>
            <div className="prodcutTitleContainer">
                <h1 className="productTitle">Movie</h1>
                <NavLink to="/newmovie"><button className="productAddButton">Create</button></NavLink>
            </div>
            <div className="producttop">
                <div className="producttopright">
                    <div className="productInfoTop">
                        <img src={movie?.imgTital} alt="" className="productInfoImg" />
                        <span className="productName">{movie.tital}</span>
                    </div>
                    <div className="productInfobottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{movie._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfKey">Genre:</span>
                            <span className="productInfoValue">{movie.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Year:</span>
                            <span className="productInfoValue">{movie.year}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Limit:</span>
                            <span className="productInfoValue">{movie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productbuttom">
                <from className="productform">
                    <div className="productformleft">
                        <label>Movie Name</label>
                        <input type="text" name="" id=""  placeholder={movie.tital}/>
                        <label>Movie Genre</label>
                        <input type="text" name="" id=""  placeholder={movie.genre}/>
                        <label>Movie Year</label>
                        <input type="text" name="" id=""  placeholder={movie.year}/>
                        <label>Movie Limit</label>
                        <input type="text" name="" id=""  placeholder={movie.limit}/>
                        <label>Movie Trailer</label>
                        <input type="file" name="" id=""  />
                        <label>Movie Video</label>
                        <input type="file" name="" id=""  />
                        
                    </div>
                    <div className="productformRight">
                        <div className="productUpload">
                        <img src={movie.imgTital} alt="" className="productUploadImg" />
                        <label ><PublishIcon/></label>
                        <input type="file" id='file' style={{display:"none"}} />
                        </div>
                        <button className="productbutton">Update</button>
                    </div>
                </from>
            </div>

        </div>
    )
}
