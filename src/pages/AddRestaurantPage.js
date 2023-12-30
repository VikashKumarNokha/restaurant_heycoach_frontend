import React,{useState, useEffect} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { baseurl } from '../utilities/BaseUrl'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SelectTag from '../components/SelectTag'


function AddRestaurantPage() {
  const navigate = useNavigate();
  //  here state for restaurant data nad user id
  const [user_id, setUser_id] = useState("");
  const [addRestaurant, setAddrestaurant] = useState({name : "", image_url : "", address : "", email : "", mobile : ""  })
  
  //  this function is for add new restaurant 
function addRestaurantfun(){ 
  if(addRestaurant.name == "" || addRestaurant.image_url == "" || addRestaurant.address == "" ||  addRestaurant.email == "" ||  addRestaurant.mobile == "" || user_id == "" ){
     alert("please fill all input boxes and select the user that is added by")
  }else{
   return  axios.post( baseurl + "restaurants", {...addRestaurant, added_by : user_id } ).then((res)=>{
           console.log("resssss", res.data)
           if(res.data){
             alert("added successfull");
              navigate("/")
           }     

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

            {/*here  restaurant add form   */}
             <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="center">
                Add New Resataurant
                </Typography>                      
                      <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                          <TextField
                            value={addRestaurant?.name}
                            onChange={(e)=>{setAddrestaurant( {...addRestaurant, name : e.target.value })}}
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
                           value={addRestaurant?.image_url}
                           onChange={(e)=>{setAddrestaurant( {...addRestaurant, image_url : e.target.value })}}
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
                          value={addRestaurant?.address}
                          onChange={(e)=>{setAddrestaurant( {...addRestaurant, address : e.target.value })}}
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
                          value={addRestaurant?.email}
                          onChange={(e)=>{setAddrestaurant( {...addRestaurant, email : e.target.value })}}
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
                          value={addRestaurant?.mobile}
                          onChange={(e)=>{setAddrestaurant( {...addRestaurant, mobile : e.target.value })}}
                              id="state"
                              name="state"
                              label="Enter Mobile Number"
                              fullWidth
                              variant="standard"
                          />
                          </Grid>

                      </Grid>
          
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={()=>{addRestaurantfun();}} sx={{ mt: 3, ml: 1 }}>
                          Submit
                        </Button>
                    </Box>
              </Paper> 
            </Container>
            {/* here end */}
            
        {/* here footer  */}
        <Footer/>
      </div>
  )
}

export default AddRestaurantPage