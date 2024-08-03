import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Nav from './Components/Nav' ;
import LandingPage from './Components/LandingPage';
import ContactPage from './Components/ContactPage';
import AboutPage from './Components/AboutPage';
import ErrorPage from './Components/ErrorPage';

export default function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/'>
          <Route index element={<LandingPage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/contact-us' element={<ContactPage />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
