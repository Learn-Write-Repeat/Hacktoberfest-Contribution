import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar style={{backgroundColor: '#f5d442'}}>
        <NavbarBrand className="text-dark font-weight-bold mx-auto ">
          <h4>SawoWeather</h4>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
