import { Link } from 'react-router-dom'
import '../css/navbar.css'
import { useState } from 'react'
const Navbar=()=>{
    var[dropdown,showDropDown]=useState(false);
   return(
    <header>
        <nav>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/About'>about</Link></li>
            <li><Link to='/Gallery'>galley</Link></li>
            <div>
                <li class ="dropdown"><a>Hooks</a>
                 <ul class="dropdown-menu">
                    <li><Link to='/use-State'>Use State</Link></li>
                    <li><Link to='/use-Effect'>Use Effect</Link></li>
                    <li><Link to='/useEffectApi'>Use Effect Api</Link></li>
                    <li><Link to='/UseRef'>Use Ref</Link></li>
                    <li><Link to='/UseMemo'>Use Memo</Link></li>
                    
                </ul>
                </li>
            </div>
            <li><Link to='/Contact'>conatct</Link></li>
            <li><Link to='/Signup' >signup</Link></li>  
        </nav>
    </header>
   )
}
export default Navbar