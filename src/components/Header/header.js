import Linkedbutton from "../linkedbutton";
import BasicMenu from "../MenuButton";
import logo from "../../img/logo.png";
// import arrowimg from "../../img/arrowimg.png";
import MenuItem from '@mui/material/MenuItem';

import "./Header.css"

export default function Header() {
  return (
    <header>
      <div className='header-logo'><a href="./"><img className='WH100' src={logo} alt="" /></a></div>
      <div className='header-options'>
        <BasicMenu value={"products"}>
          <MenuItem >Profile</MenuItem>
          <MenuItem >My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </BasicMenu>
        <Linkedbutton variant={"text"} sx={{ color: "white" }}>LOGIN</Linkedbutton>
        <BasicMenu value={"resorces"}>
          <MenuItem >Profile</MenuItem>
          <MenuItem >My account</MenuItem>
          <MenuItem>Logout</MenuItem>
          <MenuItem>Logout</MenuItem>
          <MenuItem>Logout</MenuItem>
          <MenuItem>Logout</MenuItem>
        </BasicMenu>
      </div>
      <div className='header-login'>
        {/* <Secondarybutton background={'transparent'} width={'8em'} height={''}><a href="./">LOGIN</a></Secondarybutton> */}
        <Linkedbutton variant={"text"} sx={{ color: "white", backgroundColor: "transparent" }}>LOGIN</Linkedbutton>
        <Linkedbutton variant={"contained"} sx={{ color: "black", backgroundColor: "white" }}>SHOP</Linkedbutton>
      </div>
    </header>


  )


}