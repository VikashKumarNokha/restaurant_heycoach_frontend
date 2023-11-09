import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import axios from 'axios';
import { baseurl } from '../utilities/BaseUrl';

export default function SelectTag({setUser_id, user_id}) {

  const [users, setUsers] = React.useState([]);


  useEffect(()=>{
    getUserlist();
    },[ ])

function getUserlist(){  
   return  axios.get( baseurl + "users").then((res)=>{
          setUsers( res?.data)
   }).catch((err)=>{
      console.log("err", err);
   })
}

  const handleChange = (event) => {

    setUser_id(event.target.value);
     
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Users</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={user_id}
        label="User"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
            users.length > 0 && users.map((e)=>{
                 return  <MenuItem  key={e.id} value={e?.id}>{e?.fullName}</MenuItem>
            })
        }
      </Select>
    </FormControl>
  );
}