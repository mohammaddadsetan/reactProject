import React from 'react';
import arrowimg from "./img/arrowimg.png";
import logo from "./img/logo.png";
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import MyTitleBox from './mytitlebox';
// import MyButton from './mybutton';
const root = ReactDOM.createRoot(document.getElementById('root'));


const hedstyl = {
  display: "flex",
  height: "3.5em",
  position: "stiky",
  backgroundColor: "black",
  padding: "1em 2em"

}

function Wbutton(props) {
  return (
    <a href="#" className='w-button'>{props.buttonName.bname}</a>
  )
}

function Button(props) {
  return (
    <div  className='a-button'><a href="#">{props.buttonName.bname}</a></div>
  )
}

function Arrowbutton(props) {
  return (
    <div className='a-button'><a href="#"><span>{props.buttonName.bname}</span><img src={arrowimg} alt="" /></a></div>
  )
}


root.render(
  <div>
    <header style={hedstyl}>
      <div className='header-logo'><img src={logo} alt="" /></div>
      <div className='header-options'>
      <Arrowbutton buttonName={{bname:'PRODUCTS'}}/>
      <Button buttonName={{bname:'TEMPLATES'}}/>
      <Arrowbutton buttonName={{bname:'RESORCES'}}/>
      </div>
      <div className='header-login'>
        <Button buttonName={{bname:'LOGIN'}}/>
        <Wbutton buttonName={{bname:'SHOP'}}/>
      </div>
    </header>









    {/* <MyTitleBox xyz={{cname:'kazem'}}>
      <MyButton/>
    </MyTitleBox>
    <MyTitleBox xyz={{cname:'kazem'}}>
      <MyButton/>
    </MyTitleBox> */}
  </div>



);


reportWebVitals();
