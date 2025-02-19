import Home from'./components/function_components/home.jsx'
import Navbar from './components/function_components/Navbar.jsx';
import ClassComEg from './components/class_components/classcomponenyEG.jsx';
import About from './components/function_components/about.jsx';
import Contact from './components/function_components/contact.jsx';
import Gallery from './components/function_components/gallery.jsx';
import Signup from './components/function_components/signup.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function Main(){
  return <main> 
    <BrowserRouter>
       <Navbar/>
           <Routes>
                <Route path="/Home" element= { <Home properties="dani" sjit="hello"/>}></Route>
                <Route path="/About" element={ <About></About>}></Route>
                <Route path="/Contact" element={ <Contact></Contact>}></Route>
                <Route path="/Gallery" element={ <Gallery></Gallery>}></Route>
                <Route path="/Signup" element={ <Signup></Signup>}></Route>
           </Routes>
    </BrowserRouter>
  </main> 
}
export default Main;