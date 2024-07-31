
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home'
import Resturant from './Components/Resturant'
import Contact from './Components/Contact'
import Foods from './Components/Foods'
import Quote from './Components/Quote'
import Navbar from './Components/Navbar'

function App() {
  return (

    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route  path="/quote" element={<Quote />} />
    <Route path="/resturant" element={<Resturant />} />
    <Route path="/Foods" element={<Foods />} />
    <Route path="/Contact" element={<Contact />} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
