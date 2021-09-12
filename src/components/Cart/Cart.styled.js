import styled from "styled-components";

export const Wrapper=styled.div`

max-width: var(--maxWidth);
margin: 0 auto;
width: 100%;

`
export const Content=styled.div`
padding:  70px 35px;



.container{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 10px auto;
    height: 40px;
    background-color: transparent;
    border-bottom: 1px solid var(--green);
    padding: 0 15px;

    .item{
        width: 38%;
    }

    .price{
        width: 10%;
        /* background-color: red; */
    }
    .quantity{
        width: 10%;
    }
    .subtotal{
        width: 12%;
        p{
            margin-left: -30px;
        }
    }
    .remove{
        width: 5%;
    }
}




.product{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 10px auto;
    height: 70px;
    background-color: transparent;
    border-bottom: 1px solid var(--green);
    padding: 0 15px;

.product-details{
    width: 40%;
    display: flex;
    height:100% ;
    align-items: center;
    
    p{
        font-size: 0.8rem;
        margin-left: 10px;
    }
    img{
        width: 35px;
    }
}

.amount{
   
    width: 10%;
    /* background-color: red; */
    padding: 0 3px;
    height: 100%;
    display: flex;
    align-items: center;
}
.total-quantity{
    width: 10%;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
}
.total{
    width: 5%;
    height: 100%;
    display: flex;
    align-items: center;
}

.remove{
    width: 2%;
    display: flex;
    align-items: center;
    height: 100%;

}

}



`