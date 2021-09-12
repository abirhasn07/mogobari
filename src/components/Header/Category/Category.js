import React from 'react';
import { Content, Wrapper } from './Category.styled';

const Category = (props) => {
    const categoryData=props.data
    const categoryList=[...new Set(categoryData.map(item=> item.category) )]
    // console.log(categoryList);
    // const s=categoryList.map((data)=>console.log(data))

   
    return (
        <Wrapper>
            <Content>
            <h2>Categories</h2> 
            {categoryList.map((d,index)=>{
                // const {category}=d
                // console.log(category);
                return <div key={index} className="category">
                    
                    <a href={d}>{d}</a>
                </div>
            })}
            </Content>
        </Wrapper>
    )
}

export default Category
