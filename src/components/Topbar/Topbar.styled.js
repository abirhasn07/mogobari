import styled from "styled-components";

export const Wrapper =styled.div`
max-width: var(--maxWidth);
margin: 0 auto;
width: 100%;
background: var(--shade);

@media (max-width:768px){
    display: none;
}
`
export const Content =styled.div`
padding: 0 35px;



.topbar-list{
    height: 40px;
    width: 80%;
    margin-left: auto;

    li{
        font-size: var(--fontSmall);
        color: var(--green);
        cursor: pointer;
        transition: var(--transition);

        span{font-size:var(--fontSmall);
            margin-left: 4px;
            font-size: 16px;
        }
    }

    li:hover{
        color: var(--red);
    }
}
`