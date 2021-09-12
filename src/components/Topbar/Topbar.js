import { faExclamationTriangle, faHouseUser, faQuestionCircle, faTabletAlt, faTruckMoving, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Content, Wrapper } from './Topbar.styled'

const Topbar = () => {
    return (
        <Wrapper>
           <Content>
               <ul className="topbar-list row">
        <li><FontAwesomeIcon icon={faExclamationTriangle}/><span>Notice</span></li>
        <li><FontAwesomeIcon icon={faQuestionCircle}/><span>Help</span></li>
                   <li> <FontAwesomeIcon icon={faTabletAlt}/><span>Apps</span></li>
                   <li> <FontAwesomeIcon icon={faHouseUser}/><span>My Oder</span></li>
                   <li><FontAwesomeIcon icon={faTruckMoving}/><span>Track Oder</span></li>
                   <li><span>Wishlist</span></li>
                   <li><FontAwesomeIcon icon={faUserPlus}/><span>Merchant Account</span></li>
               </ul>
           </Content>
        </Wrapper>
    )
}

export default Topbar
