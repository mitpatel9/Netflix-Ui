import React, { useState } from 'react'
import "./UserList.css"
import { DataGrid} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {UseRows} from "../../DummyData"

export default function UserList() {
 const [data,setdata]=useState(UseRows);

 const handleDelete=(id)=>{
  setdata(data.filter((item)=>item.id !== id))
 }
 
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 200, renderCell:(parameter)=>{
      return(
        <div className='userListUser'>
          <img  className='userListImg' src={parameter.row.avtar} alt=''/>
          {parameter.row.userName}
        </div>
      );
    }},
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell:(parameter)=>{
           return(
            <>
            <button className='userListEdit'>Edit</button>
            <DeleteOutlineIcon className='userListDelete' onClick={()=>handleDelete(parameter.row.id)} />
           </>
           );
      }
    }
        
  ];
  
  return (
    <div className='userlist'>
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection/>
    </div>
  );
}
