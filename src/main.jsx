import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


// #Essentials
// npm i -D react-router-dom@latest
// npm i sass
// npm i bootstrap@latest
// npm i axios
// npm i recoil

// #Fontawesome
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest

// #Optional
// npm i sweetalert2
// npm i swiper
// npm i wowjs
// npm i animate.css --save

// #How to use
// # wow js
// import { WOW } from "wowjs";
// useEffect(() => {
//   const wow = new WOW({ live: false });
//   wow.init();
// });