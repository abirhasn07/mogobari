import React from 'react';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';

const SingleCart = ({data}) => {
    const { id } = useParams();

    // console.log(typeof(NewId));
    const myData= data.find((pd)=>pd.id===Number(id))
    console.log(myData);
  
   
    return (
        <>
            <Navbar/>
            <h1>Hello From Single Card {id}</h1>
        </>
    )
}

export default SingleCart
