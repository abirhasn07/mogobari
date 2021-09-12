import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom"
import Cart from './components/Cart/Cart'
import FeaturesProducts from './components/FeaturesProducts/FeaturesProducts'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import SingleCart from './components/SingleCart/SingleCart'
import Topbar from './components/Topbar/Topbar'
import { GlobalStyle } from './GlobalStyled'
import { addToDatabaseCart } from './utilities/databaseManager'


const App = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(data=>data.json())
    .then(jsonData=>setData(jsonData))
  },[])


  
    // shoping cart data 
    const[cartValue,setCartValue]=useState([])
  
  
    // product added 
  const handleAddProduct=(product)=>{
    console.log("product added",product)
    const newCart=[...cartValue,product]
    setCartValue(newCart)
    
    const SameProduct=newCart.filter(pd=>pd.id===product.id)
    console.log(SameProduct);
    const Quantity=SameProduct.length
    addToDatabaseCart(product.id,Quantity)



    
  }

  // console.log(handleAddProduct);

  
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Switch>

 <Route path="/" exact>
    <Topbar/>
    <Navbar cartValue={cartValue}/>
    <Header data={data}/>
    <FeaturesProducts data={data} handleAddProduct={handleAddProduct}/>
 </Route>
  <Route path="/cart">
    <Cart data={data}/>
  </Route>
  
  <Route path="/product/:id">
    <SingleCart data={data}/>
  </Route>
  </Switch>
  </Router>
     
     
    </>
  )
}

export default App
