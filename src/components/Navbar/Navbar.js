import { faCartPlus, faSearch, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/Logo.png'
import { Content, Wrapper } from './Navbar.styled'
import NavList from './NavList/NavList'


const Navbar = (props) => {

    console.log(props);

    // const initial=0
    const value=(props.cartValue?.length);
    return (
        <Wrapper>
            <Content>
                <div className="row">

                <div className="logo">
                    <img src={Logo} alt="Mogobari Online Shopping & Service in Bangladesh" />
                </div>
                <form action="" method="get">
                    <input type="text" name="search" id="search-id" placeholder="I'm Shopping for..." />
                    <FontAwesomeIcon icon={faSearch} className="icon"/>
                </form>
                <div className="login">
                    <span><FontAwesomeIcon icon={faSignInAlt}/> Login</span>
                    <span><FontAwesomeIcon icon={faUser}/> Registration</span>
                </div>

                <div className="cart">
                    <Link to="/cart">  
                    <FontAwesomeIcon icon={faCartPlus}/>
                    <span>{value}</span>
                    </Link>
                </div>
                </div>
            </Content>
            <NavList/>
        </Wrapper>
    )
}

export default Navbar
