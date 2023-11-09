import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({restaurantdata}) {

    console.log("dddd",restaurantdata)
     
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
        <Button size="small">Delete</Button>
        <Button size="small">Update</Button>
      </CardActions>
    </Card>
  );
}