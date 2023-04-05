import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


const Item = ({ element }) => {
  return (
    <Card
      sx={{
        width: 345,
        height: 500,
        backgroundColor: "#F5F2C6",
        color: "black",
        borderRadius: "10px",
       
      }}
    >
      <CardMedia
        sx={{ height: 300, backgroundColor: "whitesmoke" }}
        image={element.img}
        title="green iguana"
      />
      <CardContent sx={{ height: 130 }}>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {element.title}
        </Typography>
        <Typography variant="body2">{element.description}</Typography>
        <Typography variant="body">${element.price}.-</Typography>
      </CardContent>
      <CardActions>
      <Link to={`/itemDetail/${element.id}`}>
      <Button sx={{ 
            backgroundColor: "#B8B591", 
            color: "black", 
            fontWeight: "bold", 
            textTransform: "none", 
            textDecoration: "none !important",
      
    }}>
            Ver detalle
        </Button>
     
        </Link>
      </CardActions>
    </Card>
  );
};



export default Item;