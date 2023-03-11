

import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  let numero = 12;
  return (
    <div>
    <div className={styles.containerNavbar}>
      <Link to="/" style={{ color: "black", textDecoration: "none", textAlign:"center" }}>
       ChiliArt
      </Link>


        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>
            Todas
          </Link>
          <Link to="/category/animales" className={styles.navbarItem}>
            Animales
          </Link>
          <Link to="/category/ilustraciones" className={styles.navbarItem}>
            Ilustraciones
          </Link>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;