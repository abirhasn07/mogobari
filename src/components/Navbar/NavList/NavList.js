import React from 'react'
import { Link } from 'react-router-dom'
import { Content, Wrapper } from './NavList.styled'

const NavList = () => {
    return (
        <Wrapper>
            <Content>
                <ul className="nav-links row">
                    <Link to="/">
                    <li className="nav-item">Home</li>
                    </Link>
                    <li className="nav-item">All Category</li>  
                    <li className="nav-item">All Shop</li>
                    <li className="nav-item">All Brand</li>
                    <li className="nav-item">Offer</li>
                </ul>
            </Content>
        </Wrapper>
    )
}

export default NavList
