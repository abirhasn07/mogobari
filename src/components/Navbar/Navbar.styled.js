import styled from "styled-components";
export const Wrapper =styled.div`
max-width: var(--maxWidth);
width: 100%;
margin: 0 auto;
height: 100px;
`
export const Content =styled.div`
padding: 10px 35px;

.logo{
    width: 20%;
    img{
        width: 150px;
    }
}

form{
    width: 50%;
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
        height: 40px;
        /* background: var(--green); */
        border:0.5px solid var(--green);
        width: 90%;
        ::placeholder{
            font-size: var(--fontMed);
            padding-left: 10px;
            
        }
    }
    input:focus{
        outline: none;
    }
    .icon{
        margin-left: -2px;
        width: 8%;
        background:var(--green);
        height:35px;
        padding:2.5px 5px;
        border: 0.5px solid var(--green) ;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        color: white;
       cursor: pointer;
       transition:var(--transition);
        
    }
    .icon:hover{
        background:var(--red);
        border: 0.5px solid var(--red) ;
    }
}

.login{
    width: 20%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: var(--green);
    cursor: pointer;
    text-align:left;
    
    span{
        transition:var(--transition)
    }
    span:hover{
    color: var(--red);
                }
}


.cart{
    width: 5%;
    color: var(--green);
    font-size: 24px;
    position: relative;
    span{
        position: absolute;
        font-size: 18px;
        top: -5px;
    }
}

@media (max-width:768px){
    padding: 0 5px;
    .logo{
        width: 15%;
        img{
            width: 100px;
        }
    }
    form{
        height: 30px;
        width: 65%;
        input{
            height: 25px;
        }
        .icon{
            height: 25px;
            padding: 0 3px;
        }
    }

    .login{
display: none;
    }
    
    .cart{
        display: none;
    }
}

`