import React from "react";
import {Navbar} from 'react-bootstrap'

const Nav = () => {
  return (
    <div>
      <Navbar variant="dark" className="justify-content-center bg-mycolor" style={{ flex: 1}}>
        <Navbar.Brand href="#home">
          To do App
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Nav;
