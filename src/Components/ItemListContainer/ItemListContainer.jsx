import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import PacmanLoader from "react-spinners/PacmanLoader";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);


// here we use a function in order to call firebase to replace productsMock for onlinebase
// db use is called from firebase.js//
  useEffect(() => {
    const itemsCollection = collection(db, "products");

    let consulta = undefined;

    //here we separate the categorys in order to have each products in the correct TAB//

    if (categoryName) {
      const qry = query(itemsCollection, where("category", "==", categoryName));
      consulta = getDocs(qry);
    } else {
      consulta = getDocs(itemsCollection);
    }

    consulta.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),  //express operator to call all the items products //
          id: product.id,
        };
      });

      setItems(products);
    });
  }, [categoryName]);

  // here is the condicitonal render/
  //if (items.length === 0){
  //return <h1>Cargando....</h1>
  //


  // here we added the loandig from react-spinner //
  return (
    <div>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <PacmanLoader
          color={"black"}
          //loading={loading}//
           cssOverride={override}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
};

export default ItemListContainer;
