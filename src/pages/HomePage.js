import React,{useState, useEffect} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MediaCard from '../components/Card'
import { baseurl } from '../utilities/BaseUrl'
import axios from 'axios'

function HomePage() {
    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(()=>{
        getRestaurantlist();
   },[ ])

  function getRestaurantlist(){  
       return  axios.get( baseurl + "restaurants").then((res)=>{
             console.log("resss",res)
             setRestaurantData( res?.data)
       }).catch((err)=>{
          console.log("err", err);
       })
  }

  function deleteRestaurant(id){
    
    return axios.delete(`${baseurl}restaurants/${id}`).then((res)=>{
         console.log("resss", res.data)
          if(res.data){
            alert(" Restaurant Deleted Successfull");
            getRestaurantlist();
          }
    }).catch((err)=>{
        console.log("err", err);
    })
  }
     


  return (
    <div>
        {/* Navbar componenet for home page  */}
        <Navbar/>
        {/*navber end here  */}
       
        <div style={{display : "flex", justifyContent : "space-evenly", flexWrap :"wrap", margin : "10px"}}>
        {
            restaurantData.length > 0 && restaurantData.map((e)=>{
                 return   <div key={e?.id} style={{margin : "10px"}}  >
                            <MediaCard restaurantdata={e} deleteRestaurant={deleteRestaurant} />
                          </div>
            })
        }
        </div>

        <Footer/>
    </div>
  )
}

export default HomePage