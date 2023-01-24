/* eslint-disable */
import "./ProductList.css"
import { DataGrid} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {ProductRows} from "../../DummyData"
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


export default function ProductList() {
  const [data,setdata]=useState(ProductRows);
  const [movie,setNewMovie] = useState([]);
  
  useEffect(() => {
    const getMovie = async () => {
      try {
        await fetch("http://localhost:8000/api/movie/", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE5YWUxOTE0ZTVmYjcyOWRmNzNkYSIsImlhdCI6MTY3MzkzOTkwMCwiZXhwIjoxNjc0MzcxOTAwfQ.cbFmSTPjkOzxTmHcJ_7e-y_HVu1KcNwtR7K34HonZxE",
          },
        })
          .then((res) => res.json())
          .then((data) => setNewMovie(data));
          
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();

    
  },[movie]);
  
  const handleDelete=(id)=>{
   //setdata(movie.filter((item)=>item.id !== id))
   const deleteMovie = async () => {
    try {
      await fetch(`http://localhost:8000/api/movie/find/${id}`, {
        method:"DELETE",
        headers: {
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzE5YWUxOTE0ZTVmYjcyOWRmNzNkYSIsImlhdCI6MTY3NDUzMzQ3MiwiZXhwIjoxNjc0OTY1NDcyfQ.1OUJE0-jHZnZvChd78Z1Vqdb88z8sC8Mx-_5tTvvRmA",
        },
      })
        .then((res) => res.json())
        .then((data) => console(data));
        
    } catch (err) {
      console.log(err);
    }
  };
  deleteMovie(); 
  }

   const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    { field: 'movie', headerName: 'Movie Name', width: 200, renderCell:(parameter)=>{
      return(
        <div className='productListUser'>
          <img  className='productListImg' src={parameter.row.imgTital} alt=''/>
          {parameter.row.tital}
        </div>
      );
    }},
    { field: 'genre', headerName: 'Genre', width: 90 },
    { field: 'isSeries', headerName: 'isSeries', width: 90 },
    { field: 'year', headerName: 'Year', width: 90 },
    { field: 'limit', headerName: 'Limit', width: 90 },
    
    ,
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell:(parameter)=>{
           return(
            <>
            <NavLink to={{pathname:"/movie/"+parameter.row._id}} state={parameter.row}><button className='productListEdit'>Edit</button></NavLink>
            <DeleteOutlineIcon className='productListDelete' onClick={()=>handleDelete(parameter.row._id)} />
           </>
           );
      }
    }
        
  ];
  return (
    <div className='ProductList'>
      <DataGrid rows={movie} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection getRowId={(r)=>r._id}/>
    </div>
  )
}
