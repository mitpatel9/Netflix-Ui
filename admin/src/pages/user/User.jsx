import React from 'react'
import "./User.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import UploadFileIcon from '@mui/icons-material/UploadFile';

export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="UserTitle">Edit User</h1>
                <button className="userAddButton">Create</button>
            </div>
            <div className="usercontainer">
                <div className="userShow">
                    <div className="usershowTop">
                        <img src="https://picsum.photos/200/300?grayscale" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="usershowUsername">AnkitYa78</span>
                            <span className="usershowUserTitle">Softwer Engineer</span>
                        </div>
                    </div>
                    <div className="usershowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentityIcon className='userShowIcon' />
                            <span className="userShowIconTitle">Ankit Yadav</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarMonthIcon className='userShowIcon' />
                            <span className="userShowIconTitle">17/04/1997</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroidIcon className='userShowIcon' />
                            <span className="userShowIconTitle">+91 9865324152</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutlineIcon className='userShowIcon' />
                            <span className="userShowIconTitle">aabc@gamil.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationOnIcon className='userShowIcon' />
                            <span className="userShowIconTitle">Mumbai, india</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateform">
                        <div className="userUpdateleft">
                            <div className="userupdateitem">
                                <label>User Name</label>
                                <input type="text" className="userupdateinput" placeholder='AnkitYa78' />
                            </div>
                            <div className="userupdateitem">
                                <label>Full Name</label>
                                <input type="text" className="userupdateinput" placeholder='Ankit Yadav' />
                            </div>
                            <div className="userupdateitem">
                                <label>Birth Date</label>
                                <input type="date" className="userupdateinput" placeholder='aabc@gamil.com' />
                            </div>
                            <div className="userupdateitem">
                                <label>Email</label>
                                <input type="text" className="userupdateinput" placeholder='aabc@gamil.com' />
                            </div>
                            <div className="userupdateitem">
                                <label>Mobile No</label>
                                <input type="text" className="userupdateinput" placeholder='Ankit Yadav' />
                            </div>
                            <div className="userupdateitem">
                                <label>Address</label>
                                <input type="text" className="userupdateinput" placeholder='Mumbai, india' />
                            </div>
                        </div>
                        <div className="userupadteright">
                            <div className="userupdateupload">
                                <img src="https://picsum.photos/200/300?grayscale" alt="" className="userupadateimg" />
                                <label htmlFor="file"><UploadFileIcon className='userupdateicon' /></label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userupdatebutton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
