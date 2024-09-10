import React from 'react';
import arrowimg from "./img/arrowimg.png";
import logo from "./img/logo.png";
import ReactDOM from 'react-dom/client';
import bannerpic from './img/michelangelodavid.jpg';
import michel from './img/michelangelo.png';
import searchIcon from './img/search-icon.png'
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import MyTitleBox from './mytitlebox';
// import MyButton from './mybutton';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Wbutton(props) {
  return (
    <a href="#" className='w-button'>{props.buttonName.bname}</a>
  )
}

function Button(props) {
  return (
    <div className='a-button'><a href="#">{props.buttonName.bname}</a></div>
  )
}

function Arrowbutton(props) {
  return (
    <div className='a-button'><a href="#"><span>{props.buttonName.bname}</span><img src={arrowimg} alt="" /></a></div>
  )
}


root.render(
  <div>
    <header>
      <div className='header-logo'><img src={logo} alt="" /></div>
      <div className='header-options'>
        <Arrowbutton buttonName={{ bname: 'PRODUCTS' }} />
        <Button buttonName={{ bname: 'TEMPLATES' }} />
        <Arrowbutton buttonName={{ bname: 'RESORCES' }} />
      </div>
      <div className='header-login'>
        <Button buttonName={{ bname: 'LOGIN' }} />
        <Wbutton buttonName={{ bname: 'SHOP' }} />
      </div>
    </header>
    <main>
      <section className='banner'>
        <img src={bannerpic} alt="" />
        <div className='banner-text'>
          <h1>Designed to sell</h1>
          <div className='banner-subtext'>
            <Wbutton buttonName={{ bname: 'SHOP' }} />
            <p>Get your free website trial today.
              No credit card required.</p>
          </div>
        </div>
      </section>
      <section className='search padding'>
        <div className='search-text'>
          <span>Find a domain name for your website</span>
        </div>
        <div className='search-container'>
          <div className='search-box'>
            <img src={searchIcon} alt="" />
            <input type="text" placeholder='search for a domain' />
            <button className='search-button'>SEARCH</button>
          </div>
          <a href="">Learn more about Domains</a>
        </div>
      </section>
      <section className='padding description'>
      <div className='des-pic'><img src={michel} alt="" /></div>
        <div className='descript-detail'>
          <div>
            <h1>Create a website</h1>
            <p>Choose from any of our industry-leading website templates, designer fonts, and color palettes.</p>
          </div>
          <div>
            <h1>Sell your products and services</h1>
            <p>Set up an ecommerce store, book appointments, or sell your skills—all on a single platform built just for you.</p>
          </div>
          <div>
            <h1>Market your business</h1>
            <p>On-brand email campaigns and social tools make it easy to retain customers and grow your base.</p>
          </div>

        </div>



      </section>




    </main>








    {/* <MyTitleBox xyz={{cname:'kazem'}}>
      <MyButton/>
    </MyTitleBox>
    <MyTitleBox xyz={{cname:'kazem'}}>
      <MyButton/>
    </MyTitleBox> */}
  </div>



);


reportWebVitals();
