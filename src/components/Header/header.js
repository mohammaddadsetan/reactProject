import Linkedbutton from "../linkedbutton";
import Secondarybutton from "../secondarybutton";
import logo from "../../img/logo.png";
import arrowimg from "../../img/arrowimg.png";

import "./Header.css"

export default function Header() {
    return(
<header>
      <div className='header-logo'><a href="./"><img className='WH100' src={logo} alt="" /></a></div>
      <div className='header-options'>
        <Secondarybutton background={'transparent'} width={'8em'} height={''}><a className='arrow-btn felx-row' href="./">PRODUCTS<img src={arrowimg} alt="" /></a></Secondarybutton>
        <Secondarybutton background={'transparent'} width={'8em'} height={''}><a className='arrow-btn' href="./">TEMPLATES</a></Secondarybutton>
        <Secondarybutton background={'transparent'} width={'8em'} height={''}><a className='arrow-btn flex-row' href="./">RESROCES<img src={arrowimg} alt="" /></a></Secondarybutton>

      </div>
      <div className='header-login'>
        <Secondarybutton background={'transparent'} width={'8em'} height={''}><a href="./">LOGIN</a></Secondarybutton>
        <Linkedbutton value={'SHOP'} background={'white'} width={'8em'} height={''} />
      </div>
    </header>


    )


}