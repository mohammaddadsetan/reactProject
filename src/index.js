import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>hello react</h1>
    <h4>hello react</h4>
    <label id='a'>name:</label>
    <input type="text" id='a' placeholder='inter your name' />
    <br />
    <br />

    <div>
      <strong>select:</strong>

      <input type="radio" />
      <input type="radio" />
      <input type="radio" />

      <form>
        <ul>
          <li>apple</li>
          <li>orange</li>
          <li>blue</li>
          <li>black</li>
        </ul>

      </form>

    </div>

    <button title='button'>
      first button
    </button>


    <section>

      <header>
        <p>this is a header</p>
      </header>

      <main>
        <nav><a href="https://www.digikala.com/">digikala</a></nav>
      </main>

      <footer>
        <span>this is a footer</span>
        <span>this a new footer </span>
        <p>this is a <b> footer2</b></p>
      </footer>
    </section>

    <button type='submit'>submit

      <i>4</i>
    </button>
    <input type="submit" />
    {/* <img src="logo512.png" alt="" /> */}

    <select>
      <option value="ali" key="">ali</option>
      <option value="hossein" key="">hossein</option>
      <option value="kaveh" key="">kaveh</option>
      <option value="hassan" key="">hassan</option>
    </select>

    <input type="number" />

<input type="range" min={10} max={1000}/>

  </div>

);


reportWebVitals();
