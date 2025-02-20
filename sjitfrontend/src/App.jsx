import Home from'./components/function_components/home.jsx'
import Navbar from './components/function_components/Navbar.jsx';
import ClassComEg from './components/class_components/classcomponenyEG.jsx';
import About from './components/function_components/about.jsx';
import Contact from './components/function_components/contact.jsx';
import Gallery from './components/function_components/gallery.jsx';
import Signup from './components/function_components/signup.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/function_components/Login.jsx';
import UseEffectApi from './components/function_components/useEffectApi.jsx';
import UseRef from './components/function_components/hooks/useRef.jsx';
import UseMemo from './components/function_components/hooks/UseMemo.jsx';
function Main(){
  return <main> 
    <BrowserRouter>
       <Navbar/>
           <Routes>
                <Route path="/Home" element= { <Home properties="dani" sjit="hello"/>}></Route>
                <Route path="/About" element={ <About></About>}></Route>
                <Route path="/Contact" element={ <Contact></Contact>}></Route>
                <Route path="/UseEffectApi" element={ <UseEffectApi></UseEffectApi>}></Route>
                <Route path="/Gallery" element={ <Gallery></Gallery>}></Route>
                <Route path="/Signup" element={ <Signup></Signup>}></Route>
                <Route path='/Login' element={<Login></Login>}></Route>
                <Route path='/UseRef' element={<UseRef></UseRef>}></Route>
                <Route path='/UseMemo' element={<UseMemo></UseMemo>}></Route>

           </Routes>
    </BrowserRouter>
  </main> 
}
export default Main;