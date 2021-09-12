import React from 'react';
import Features from '../../Features/Features';
import Category from './Category/Category';
import { Content, Wrapper } from './Header.styled';

const Header = (props) => {
    const data=props.data
    // console.log(data);
    return (
<Wrapper>
    <Content> 
        <div className="category">
        <Category data={data}/>
        </div>
        <div className="features">
        <Features/>
        </div>
    </Content>
</Wrapper>
            
    )
}

export default Header