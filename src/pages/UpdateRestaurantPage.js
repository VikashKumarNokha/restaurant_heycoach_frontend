import React,{useState, useEffect} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SelectTag from '../components/SelectTag';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseurl } from '../utilities/BaseUrl';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

function UpdateRestaurantPage() {

  const [user_id, setUser_id] = useState("");
  const [editdata, setEditdata] = useState({});

  const {id} = useParams();
  const navigate = useNavigate();

   useEffect(()=>{
      if(id){
        getRestaurantbyid(id);
      }
      
   },[])

  //  this function is get restaurant by Id
  function getRestaurantbyid(id){    
    return axios.get(`${baseurl}restaurants/${id}` ).then((res)=>{
         console.log("resss", res.data)
           setEditdata(res?.data)  
           setUser_id(res?.data?.added_by) 
    }).catch((err)=>{
        console.log("err", err);
    })
  }
    
  //  this function is for edit the restaurant
  function editRestaurant(){      
    if(editdata.name == "" || editdata.image_url == "" || editdata.address == "" ||  editdata.email == "" ||  editdata.phone == "" || user_id == "" ){
      alert("please fill all input boxes")
   }else{
    return axios.put(`${baseurl}restaurants/${editdata?.id}`, editdata ).then((res)=>{
          alert("Restaurant Data Edited successfull") 
           navigate("/")
    }).catch((err)=>{
        console.log("err", err);
    })
  }
  }

  return (
      <div>
       <Navbar/> 
         {/*  here select tag */}
         <SelectTag setUser_id={setUser_id} user_id={user_id} />  

           {/*  here edit restaurant form  */}
         <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="center">
                  Edit Restaurant
                </Typography>                      
                      <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                          <TextField
                            value={editdata?.name}
                            onChange={(e)=>{setEditdata( {...editdata, name : e.target.value })}}
                              required
                              id="firstName"
                              name="firstName"
                              label="Enter Restaurant Name"
                              fullWidth
                              //autoComplete="given-name"
                              variant="standard"
                          />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                          <TextField
                           value={editdata?.image_url}
                           onChange={(e)=>{setEditdata( {...editdata, image_url : e.target.value })}}
                              required
                              id="lastName"
                              name="lastName"
                              label="Enter Restaurant Image url"
                              fullWidth
                              autoComplete="family-name"
                              variant="standard"
                          />
                          </Grid>
                          <Grid item xs={12}>
                          <TextField
                          value={editdata?.address}
                          onChange={(e)=>{setEditdata( {...editdata, address : e.target.value })}}
                              required
                              id="address1"
                              name="address1"
                              label="Enter Address"
                              fullWidth
                              autoComplete="shipping address-line1"
                              variant="standard"
                          />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                          <TextField
                          value={editdata?.email}
                          onChange={(e)=>{setEditdata( {...editdata, email : e.target.value })}}
                              required
                              id="city"
                              name="city"
                              label="Enter Email Id"
                              fullWidth
                              autoComplete="shipping address-level2"
                              variant="standard"
                          />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                          <TextField
                          value={editdata?.mobile}
                          onChange={(e)=>{setEditdata( {...editdata, mobile : e.target.value })}}
                              id="state"
                              name="state"
                              label="Enter Mobile Number"
                              fullWidth
                              variant="standard"
                          />
                          </Grid>

                      </Grid>
          
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={()=>{editRestaurant(); }} sx={{ mt: 3, ml: 1 }}>
                          Submit
                        </Button>
                    </Box>
              </Paper> 
            </Container>
            {/* here end */}

       <Footer/>
      </div>
  )
}

export default UpdateRestaurantPage