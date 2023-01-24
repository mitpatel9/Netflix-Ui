import React from 'react'
import "./FeaturedInfo.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="feturedTital"> Total Movie Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredmoney">$2,415</span>
                <span className="featuredmoneyRate">-11.4<ArrowDownwardIcon className='featuredIcon negative'/></span>
            </div>
            <span className="featuredsub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="feturedTital">Total Movie Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredmoney">$4,415</span>
                <span className="featuredmoneyRate">-1.4<ArrowDownwardIcon className='featuredIcon negative'/></span>
            </div>
            <span className="featuredsub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="feturedTital">Movie Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredmoney">$2,225</span>
                <span className="featuredmoneyRate">+2.4<ArrowUpwardIcon className='featuredIcon'/></span>
            </div>
            <span className="featuredsub">Compared to last month</span>
        </div>
      
    </div>
  )
}
