import TombolUbahTema from "./TombolUbahTema";
import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navheader(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const logoutHandler = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.post('http://localhost:8000/logout')
        .then(() => {
          localStorage.removeItem("token");
  
          navigate('/login');
      })
    }
  
  return (
     <Nav tabs>
          <NavItem>
              <NavLink href="/" active>Beranda</NavLink>
          </NavItem>
          <NavItem>
              <NavLink  href="/dokter">Dokter</NavLink>
          </NavItem>
          <NavItem>
              <NavLink  href="/ruangan">Ruangan</NavLink>
          </NavItem>
          <NavItem>
              <NavLink  href="/pasien">Pasien</NavLink>
          </NavItem>
          {token ? <NavItem><NavLink onClick={logoutHandler}>Logout</NavLink>
          </NavItem> :
          <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle nav caret>SignUp</DropdownToggle>
              
              <DropdownMenu>
                  <DropdownItem >
                      <NavLink  href="/login">Masuk</NavLink>
                  </DropdownItem>
                  <DropdownItem >
                      <NavLink  href="/register">Daftar</NavLink>
                  </DropdownItem>
              </DropdownMenu>
          </Dropdown>
          }
          <NavItem>
              <TombolUbahTema />
          </NavItem>
    </Nav>
  );
}

export default Navheader;
