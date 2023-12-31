import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function MediaCard({restaurantdata, deleteRestaurant}) {

    const navigate = useNavigate()
     
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={restaurantdata?.image_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {restaurantdata?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Addresss :  {restaurantdata?.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email Id :  {restaurantdata?.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mobile :  {restaurantdata?.mobile}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Added By :  {restaurantdata?.User?.fullName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>deleteRestaurant(restaurantdata?.id)} size="small">Delete</Button>
        <Button onClick={()=>{ navigate(`/updaterestarant/${restaurantdata?.id}`);  }} size="small">Update</Button>
      </CardActions>
    </Card>
  );
}

