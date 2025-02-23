import Home from'./components/function_components/home.jsx'
import Navbar from './components/function_components/navbar.jsx';
import About from './components/function_components/about.jsx';
import Contact from './components/function_components/contact.jsx';
import Gallery from './components/function_components/gallery.jsx';
import Signup from './components/function_components/signup.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/function_components/Login.jsx';
import UseEffectApi from './components/function_components/useEffectApi.jsx';
import UseRef from './components/function_components/hooks/useRef.jsx';
import UseMemo from './components/function_components/hooks/UseMemo.jsx';
import UseCallback from './components/function_components/hooks/UseCallback.jsx';
import Hoc from './components/function_components/Hoc/Hoc.jsx';
import Parent from './components/memoization/parent.jsx';
import Child1 from './components/memoization/child1.jsx';
import Child2 from './components/memoization/child2.jsx';
import LazyLoading from './components/memoization/lazyLoading.jsx';
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
                <Route path='/UseCallback' element={<UseCallback/>}></Route>
                <Route path='/Hoc' element={<Hoc/>}></Route>
                <Route path='/Parent' element={<Parent/>}/>
                <Route path='/Child1' element={<Child1/>}/>
                <Route path='/Child2' element={<Child2/>}/>
                <Route path='/LazyLoading' element={<LazyLoading/>}/>

           </Routes>
    </BrowserRouter>
  </main> 
}
export default Main;