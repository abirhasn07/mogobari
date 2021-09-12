import styled from 'styled-components'

export const Wrapper = styled.div`
width: 100%;


.section {
  width: 100%;
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 0 35px;
}

.section-center{
  margin: 0 auto;
  margin-top: 4rem;
  width: 100%;
  height: 450px;
  max-width: 650px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
  .features-img{
  width: 100%;
  height: auto;
  object-fit: cover;
  }

   article{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.3s linear;
   }

   article.active{
    opacity: 1;
    transform: translateX(0);
   }
   .article.lastSlide{
    
    transform: translateX(-100%);
   }
   .article.NextSlide{
    
    transform: translateX(100%);
   }

   .icon{
    position: absolute;
  top: 170px;
  transform: translateY(-50%);
  cursor: pointer;
 
  
  width:1rem;
  height: 2rem;
  opacity: 0.7;
 
  background-color: var(--green);

   }

   .left{
       left: 0;
   }
   .right{
       right: 0;
   }
}

@media (max-width:768px){

  .section{
    padding: 0;
  }

  .section-center{
    margin-top: 1rem;
  }

  .icon{
    top: 95px !important;
  }
}

`