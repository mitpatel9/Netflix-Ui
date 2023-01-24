import React from 'react'
import "./NewUser.css"

export default function NewUser() {
  return (
    <div className='Newuser'>
      <h1 className="newusertitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
            <label>User Name</label>
            <input type="text"  placeholder='Ankit'/>
        </div>
        <div className="newUserItem">
            <label>Full Name</label>
            <input type="text"  placeholder='Ankit Yadav'/>
        </div>
        <div className="newUserItem">
            <label>Email</label>
            <input type="email"  placeholder='abc@gmail.com'/>
        </div>
        <div className="newUserItem">
            <label>Password</label>
            <input type="password"  placeholder='Ankit'/>
        </div>
        <div className="newUserItem">
            <label>Mobile No</label>
            <input type="text"  placeholder='+91 9685741236'/>
        </div>
        <div className="newUserItem">
            <label>Address</label>
            <input type="text"  placeholder='Mumbai, india'/>
        </div>
        <div className="newUserItem">
            <label>Gender</label>
            <div className="newuserGender">
            <input type="radio"  id='Male' value="Male"/>
            <label For="male">Male</label>
            <input type="radio"  id='Female' value="Female"/>
            <label For="female">Female</label>
            </div>
        </div>
        <div className="newUserItem">
            <label>Active</label>
            <select className="newUserSelect" name="Active" id="Active">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
      </form>
      <button className="newuserbutton">Create</button>
    </div>
  )
}
