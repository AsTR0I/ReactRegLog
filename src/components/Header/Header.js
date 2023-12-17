import React from 'react'

const Header = () => {
    
return(
    <div>
        <header>
            <nav>
                <ul>
                    <li> <Link to="/Login">Login</Link></li>
                </ul>
                <ul>
                    <li> <Link to="/Reg">Registration</Link></li>
                </ul>
            </nav>
        </header>
    </div>
    )
}

export default Header