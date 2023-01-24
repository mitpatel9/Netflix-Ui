import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./WidgetSm.css"
import { useState, useEffect } from "react";

export default function WidgetSm() {
    const [newUser, setnewUser] = useState([]);
    useEffect(() => {
      const getNewuser = async () => {
        try {
          await fetch("http://localhost:8000/api/users?new=true", {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE5YWUxOTE0ZTVmYjcyOWRmNzNkYSIsImlhdCI6MTY3NDUzMzQ3MiwiZXhwIjoxNjc0OTY1NDcyfQ.1OUJE0-jHZnZvChd78Z1Vqdb88z8sC8Mx-_5tTvvRmA",
            },
          })
            .then((res) => res.json())
            .then((data) => setnewUser(data));
        } catch (err) {
          console.log(err);
        }
      };
      getNewuser();
    }, []);



    return (
        <div className='widgetsm'>
            <span className="widgetSmTitle">New Join Member</span>
            <ul className="widgetSmList">
                {newUser.map((user)=>(
                    <li className="widgetSmListItem">
                    <img className='widgetSmImg' src={user.profilePhoto || "https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"} alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">{user.username}</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}
