import styled from "styled-components";

export const Wrapper=styled.div`

max-width: var(--maxWidth);
width: 100%;
margin: 0 auto;
background-color: var(--blueWhite);

h3{
    text-align: center;
    padding: 25px 0;
}

`
export const Content=styled.div`

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
padding: 0 35px;


.product-card{
    width: 24%;
    background-color: var(--white);
    height: 220px;
    margin: 15px 0;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    color: var(--black);
    img{
        margin-top: 25px;
        height: 100px;
        object-fit: cover;
    }

    .links{
        color: var(--black);
        
        p{
            width: 70%;
            margin: 0 auto;
            word-wrap: break-word;
            word-break: break-all;
            font-size: 0.7rem;
        }
    }

    .links:hover{
        color: var(--red);
        cursor: pointer;
    }

    .amount{
        width: 100%;
        display: flex;
        padding: 15px 5px;
        justify-content: space-around;
    }
}
.product-card:hover{
    box-shadow: 0px 10px 5px 0px rgba(11, 11, 11, 0.1);
}


.cart-icon{
    position: absolute;
    top: 5px;
    right: 10px;
    background-color: var(--blueWhite);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: rgba(11, 11, 11, 0.8);
    transition: 400ms;
}

@media (max-width:768px){
    flex-direction: column;
    .product-card{
        width: 90%;
    }
}
`