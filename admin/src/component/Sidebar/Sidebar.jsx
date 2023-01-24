import React from "react";
import "./Sidebar.css";

import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import MovieIcon from "@mui/icons-material/Movie";
import ListIcon from '@mui/icons-material/List';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/" className="linkdecoration">
              <li className="sidebarListItem active">
                <LineStyleIcon className="SidebarIcon" />
                Home
              </li>
            </NavLink>

            <li className="sidebarListItem">
              <PersonIcon className="SidebarIcon" />
              All User
            </li>
            <li className="sidebarListItem">
              <PersonAddIcon className="SidebarIcon" />
              Create User
            </li>
            <li className="sidebarListItem">
              <PersonIcon className="SidebarIcon" />
              Update User
            </li>
            <li className="sidebarListItem">
              <PersonRemoveIcon className="SidebarIcon" />
              Delete User
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Movies</h3>
          <ul className="sidebarList">
            <NavLink to="/movies" className="linkdecoration">
              <li className="sidebarListItem">
                <MovieIcon className="SidebarIcon" />
                Movie
              </li>
            </NavLink>
            <NavLink to="/newmovie" className="linkdecoration">
              <li className="sidebarListItem">
                <MovieIcon className="SidebarIcon" />
                Create Movie
              </li>
            </NavLink>
            <NavLink to="/movie/:productId" className="linkdecoration">
              <li className="sidebarListItem">
                <MovieIcon className="SidebarIcon" />
                Upadte Movie
              </li>
            </NavLink>
            <NavLink to="/movies" className="linkdecoration">
              <li className="sidebarListItem">
                <MovieIcon className="SidebarIcon" />
                Delete Movie
              </li>
            </NavLink>
          
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Movie List</h3>
          <ul className="sidebarList">
          <NavLink to="/lists" className="linkdecoration">
            <li className="sidebarListItem">
              <ListIcon className="SidebarIcon" />
              Lists
            </li>
          </NavLink>
          <NavLink to="/lists" className="linkdecoration">
            <li className="sidebarListItem">
              <PlaylistAddIcon className="SidebarIcon" />
               Create Lists
            </li>
          </NavLink>
          <NavLink to="/lists" className="linkdecoration">
            <li className="sidebarListItem">
              <PlaylistAddCheckIcon className="SidebarIcon" />
              Update Lists
            </li>
          </NavLink>
          <NavLink to="/lists" className="linkdecoration">
            <li className="sidebarListItem">
              <PlaylistRemoveIcon className="SidebarIcon" />
              Delete List
            </li>
          </NavLink>
           
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutlineIcon className="SidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon className="SidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="SidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutlineIcon className="SidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="SidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="SidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
