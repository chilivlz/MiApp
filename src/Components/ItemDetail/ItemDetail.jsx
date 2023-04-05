import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <div className={"containerItemDetail"}>
      <div className={"containerImage"}>
        <img src={productSelected.img} alt="" />
      </div>

      <div className={"containerDetail"}>
        <h2 style={{ fontFamily: "Trebuchet MS" }}>
          <span style={{ fontSize: "21px" }}>Nombre:</span>{" "}
          {productSelected.title}
        </h2>
        <h2 style={{ fontFamily: "Trebuchet MS" }}>
          <span style={{ fontSize: "21px" }}>Descripcion:</span>{" "}
          {productSelected.description}
        </h2>
        <h2 style={{ fontFamily: "Trebuchet MS" }}>
          <span style={{ fontSize: "21px" }}>Precio:</span> $
          {productSelected.price}.-
        </h2>

        <ItemCount
          onAdd={onAdd}
          stock={productSelected.stock}
          initial={quantity}
        />
      </div>
    </div>
  );
};

export default ItemDetail;