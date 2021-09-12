import styled from "styled-components";
export const Wrapper =styled.div`
max-width: var(--maxWidth);
width: 100%;
margin:0 auto;
text-align: left;
margin-right: auto;
padding-top: 65px;



`
export const Content =styled.div`


width: 100%;
background: var(--blueWhite);
height: 338px;

h2{
   
    background:var(--green);
    text-align: left;
    padding: 10px 5px;
   
}

.category{
    width: 100%;
    
    a{
        text-transform: capitalize;
        font-size: 0.8rem;
        line-height: var(--fontBig);
        color: black;
        padding-left: 10px;
        font-weight: 400;
        width: 100%;
     
    }
    a:hover{
        color: var(--red);
    }
}

@media (max-width:768px){
display: none;
}

`