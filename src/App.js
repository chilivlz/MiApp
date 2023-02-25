
import Footer from "./Components/Footer/footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar>
        <Footer>
          <ItemListContainer greeting={"Bienvenido"} />
          {/*<ProductCard title={"Producto uno"} price={200} isRed={false} />*/}
        </Footer>
      </Navbar>
    </div>
  );
}

export default App;