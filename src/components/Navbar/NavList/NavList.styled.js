import styled from "styled-components";
export const Wrapper =styled.div`
max-width: var(--maxWidth);
width: 100%;
margin: 0 auto;
height: 40px;
background:var(--green)
`
export const Content=styled.div`

padding: 0 35px;

width: 60%;
margin: 0 auto;
height: 100%;
font-size:var(--fontSmall);
color:var(--shade);

.nav-item{
    transition: var(--transition);
  cursor: pointer;
    opacity: 0.6;
}
.nav-item:hover{
    color: var(--white);
    opacity:1;
}

@media (max-width:768px){
    padding:0 10px;
    width: 90%;
    font-size: 0.8rem;
    justify-content: space-around;
}

`