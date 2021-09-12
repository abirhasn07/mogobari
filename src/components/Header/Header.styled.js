import styled from "styled-components";


export const Wrapper = styled.div`
max-width: var(--maxWidth);
width: 100%;
margin: 0 auto;

`

export const Content=styled.div`
padding: 0 35px;

display: flex;
justify-content: center;
align-items: flex-start;

.category{
    width: 25%;
  
}

.features{
    width: 65%;
    /* background-color: royalblue; */
}


@media (max-width:768px){
    padding: 0 15px;
    .category{
    display: none;
    
}

.features{
    width: 100%;
}
}
`