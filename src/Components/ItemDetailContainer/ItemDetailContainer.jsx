import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



import { useParams } from "react-router-dom";

import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad)=>{
    console.log(`se agrego al carrito ${cantidad} productos `)
  }

  return (

    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image={productSelected.img}
        alt=""
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h1  style={{ color: "black", textDecoration: "none", textAlign:"center" }}>{productSelected.title } </h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
   
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="secondary">
      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
      </Button>
    </CardActions>
  </Card>
);
}
    <div>
   
   

    </div>


export default ItemDetailContainer;

