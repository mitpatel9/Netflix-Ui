import "./Home.css";
import { useEffect, useState } from "react";
import List from "../../componant/list/List";
import Feature from "../../componant/featured/Feature";
import Navbar from "../../componant/navbar/Navbar";


const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        await fetch(`http://localhost:8000/api/list${type ? "?type=":""}${genre ? "&genre=" :""}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE5YWUxOTE0ZTVmYjcyOWRmNzNkYSIsImlhdCI6MTY3Mzg0NTMxNSwiZXhwIjoxNjc0Mjc3MzE1fQ.WUgI3y4juKIHC90ppIqfciZc5nrVobXkTC5HtUsaKAs",
          },
        })
          .then((res) => res.json())
          .then((data) => setLists(data));
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Feature type={type} />
      {lists.map((list) => (
        <List list={list}/>
      ))}
    </div>
  );
};

export default Home;
