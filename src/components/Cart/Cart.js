import React, { useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { Content, Wrapper } from './Cart.styled';

const Cart = ({data}) => {
// console.log(data);
    useEffect(()=>{
        const saveData=getDatabaseCart()
        const productKeys=Object.keys(saveData)
        // const ProductQuantity=Object.values(saveData)
        
       const Count=productKeys.map((key=>{
           const product=data.find(pd=>pd.id=== Number(key))
           product.quantity=saveData[key]
           
           return product
        }))
        console.log(Count);
    },[data])
    return (
        <Wrapper>
            <Content> 
               
          <h1>Welcome Your Cart</h1>  

            </Content>
        </Wrapper>
    )
}

export default Cart
