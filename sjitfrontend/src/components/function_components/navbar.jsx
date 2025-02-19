import { Link } from 'react-router-dom'
import '../css/navbar.css'
const Navbar=()=>{
   return(
    <header>
        <nav>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/About'>about</Link></li>
            <li><Link to='/Gallery'>galley</Link></li>
            <li><Link to='/Contact'>conatct</Link></li>
            <li><Link to='/Signup' >signup</Link></li>  
        </nav>
    </header>
   )
}
export default Navbar