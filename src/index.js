import React from 'react';
import arrowimg from "./img/arrowimg.png";
import logo from "./img/logo.png";
import ReactDOM from 'react-dom/client';
import bannerpic from './img/michelangelodavid.jpg';
import michel from './img/michelangelo.png';
import searchIcon from './img/search-icon.png';
import rightArrow from "./img/right-arrow.png";
import itemCover from "./img/basketball.png";
import checkedImg from "./img/checked-arrow.png";
import Linkedbutton from "./components/linkedbutton";
import Header from "./components/Header/header";
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Header/>
    <main>
      <section className='banner'>
        <img className='WH100' src={bannerpic} alt="" />
        <div className='banner-text'>
          <h1>Designed to sell</h1>
          <div className='banner-subtext'>
            <Linkedbutton value={'SHOP'} background={'white'} width={'9.5em'} height={'4em'} />
            <p>Get your free website trial today.
              No credit card required.</p>
          </div>
        </div>
      </section>
      <section className='search padding display-grid'>
        <div className='search-text'>
          <span>Find a domain name for your website</span>
        </div>
        <div className='search-container'>
          <div className='search-box'>
            <img src={searchIcon} alt="" />
            <input className='WH100' type="text" placeholder='search for a domain' />
            <button className='search-button'>SEARCH</button>
          </div>
          <a href="./">Learn more about Domains</a>
        </div>
      </section>
      <section className='padding description display-grid'>
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
      <section className='temp display-grid padding'>
        <div className='temp-text'>
          <span>Website templates for every purpose</span>
        </div>
        <div className='temp-explore'>
          <p>Start with a flexible designer template or build your own, then customize to fit your style and professional needs using our drag-and-drop website builder.</p>
          <a href="">EXPLORE ALL TEMPLATES <img src={rightArrow} alt="" /></a>

        </div>




      </section>
      <section className='items-and-options padding'>
        <div className='item-bar'>
          <a href="">Online Store</a>
          <a href="">Local Business</a>
          <a href="">Portfolio</a>
          <a href="">Restaurant</a>
          <a href="">Services</a>
          <a href="">Personal & CV</a>
          <a href="">Courses</a>
          <a href="">Memberships</a>
        </div>
        <div className='slider'>
          <div><img className='WH100' src={itemCover} alt="" /></div>

        </div>
      </section>
    </main>
    <footer className='padding'>

      <div className='footer-exchaing flex-col'>
        <div className='footer-logo'><a href=""><img className='WH100' src={logo} alt="" /></a></div>
        <button>$ USD<img className='WH100' src={arrowimg} alt="" /></button>
        <button>ENGLISH <img src={arrowimg} alt="" /></button>
        <div className='verfied'><img src={checkedImg} alt="" /> We are an ICANN accredited registrar.</div>
      </div>
      <div className='footer-items'>
        <div className='flex-col tags'>
          <span>PRODUCTS</span>
          <a href="">WEBSITE TEMPLATES</a>
          <a href="">WEBSITES</a>
          <a href="">DOMAINS</a>
          <a href="">ONLINE STORES</a>
          <a href="">SCHEDULING</a>
          <a href="">MARKETING TOOLS</a>
          <a href="">EMAIL MARKETING</a>
          <a href="">EXTENSIONS</a>
          <a href="">PROFESSIONAL EMAIL</a>
          <a href="">LOGO MAKER</a>
          <a href="">BUSINESS NAME GENARATOR</a>
          <a href="">COURSES</a>
          <a href="">MEMBERSHIPS</a>
          <a href="">PRICING</a>
          <a href="">FEATURE LIST</a>
        </div>
        <div className='flex-col tags'>
          <span>CUSTOMERS</span>
          <a href="">BEAUTY</a>
          <a href="">CREATORS</a>
          <a href="">RESTAURANTS</a>
          <a href="">ARTISTS</a>
          <a href="">BLOGGERS</a>
          <a href="">PHOTOGRAPHERS</a>
          <a href="">WEDDING</a>
          <a href="">ENTERPRISE</a>
        </div>
        <div className='flex-col tags'>
          <span>COMPANY</span>
          <a href="">ABOUT</a>
          <a href="">CAREERS</a>
          <a href="">INVESTOR RELATION</a>
          <a href="">OUR BRAND</a>
          <a href="">OUR HISTORY</a>
          <a href="">ACCESSSIBILITY</a>
          <a href="">AFFILIATES</a>
          <a href="">PRESS & MEDIA</a>
          <a href="">TERMS OG SERVICE</a>
          <a href="">PRIVACY POLICY</a>
          <a href="">SECURITY MEASURES</a>
          <a href="">CONTACT US</a>
        </div>
        <div className='flex-col tags'>
          <span>COMMUNITY</span>
          <a href="">HELP CENTER</a>
          <a href="">HIRE AN EXPORT</a>
          <a href="">FORUM</a>
          <a href="">WEBINARS</a>
          <a href="">DEVELOPER PLATFORM</a>
          <a href="">PREFESSIONALS</a>
        </div>
        <div className='flex-col tags'>
          <span>FOLLOW</span>
          <a href="">NEWSROOM</a>
          <a href="">SQUARESPACE BLOG</a>
          <a href="">CIRCLE BLOG</a>
          <a href="">ENGINEERING BLOG</a>
          <a href="">ENTERPRISE BLOG</a>
          <a href="">SERVICE BLOG</a>
          <a href="">INSTAGRAM</a>
          <a href="">TOUTUBE</a>
          <a href="">LINKEDIN</a>
          <a href="">FACEBOOK</a>
          <a href="">TWITTER</a>
        </div>
      </div>
    </footer>







    {/* <MyTitleBox xyz={{cname:'kazem'}}>
      <MyButton/>
    </MyTitleBox>
    <MyTitleBox xyz={{cname:'kazem'}}>
      <MyButton/>
    </MyTitleBox> */}
  </div>



);


reportWebVitals();
