import React from "react";
import Chart from "../../component/chart/Chart";
import FeaturedInfo from "../../component/FeaturedInfo/FeaturedInfo";
import WidgetLg from "../../component/widgetLg/Widgetlg";
import WidgetSm from "../../component/widgetSm/WidgetSm";
import { useState, useEffect } from "react";
import "./Home.css";
import { useMemo } from "react";

export default function Home() {
  const MONTH = useMemo(()=>[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],[]);
  const [useStats, setStats] = useState([]);
  useEffect(() => {
    const getStats = async () => {
      try {
        await fetch("http://localhost:8000/api/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE5YWUxOTE0ZTVmYjcyOWRmNzNkYSIsImlhdCI6MTY3NDUzMzQ3MiwiZXhwIjoxNjc0OTY1NDcyfQ.1OUJE0-jHZnZvChd78Z1Vqdb88z8sC8Mx-_5tTvvRmA",
          },
        })
          .then((res) => res.json())
          .then((data) => data.sort((a,b)=>{return a._id - b._id }).map((item)=>setStats(prev=>[...prev,{name:MONTH[item._id-1],"New User":item.total}])));
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTH]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={useStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
