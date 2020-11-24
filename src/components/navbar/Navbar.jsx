
import {useState} from "react";
import Modal from "../modal/Modal";
import "./Navbar.css";


const Navbar = () => {

  //variavel show penampung nilai  dan setshow adalah fungsion
  // state show
  const[show , setShow] = useState(false);

  return (
    <>

    {/* ini isinya state show */}
    {/* TERNARY OPERATON */}

    {show === true ? <Modal /> : null}

    <nav className="navbar">
      <h3 className="brand">JVALLEY</h3>
    </nav>

    </>
  );
};

export default Navbar;
