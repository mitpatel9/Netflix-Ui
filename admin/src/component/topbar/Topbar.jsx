import React from 'react'
import "./Topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topbarLeft">
                <span className="logo">Netflix Dashboard</span>
            </div>
            <div className="topbarRight">
                <div className="topbarIconsContainer">
                <NotificationsNoneIcon/>
                <div className="topIconBadge">2</div>
                </div>
                <div className="topbarIconsContainer">
                <LanguageIcon/>
                <div className="topIconBadge">2</div>
                </div>
                <div className="topbarIconsContainer">
                <SettingsIcon/>
                </div>
                <img src="https://picsum.photos/id/237/200/300" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
