import { faCartPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { Content, Wrapper } from './FeaturesProducts.styled';
const FeaturesProducts = (props) => {
    const data = props.data;
    const productData = data.slice(0, 8)

    // console.log(productData);


    return (
        <Wrapper>
            <h3>Featured Products</h3>
            <Content>
                {productData.map((data) => {
                    const { id, title, image, price, rating } = data

                    // console.log(rating.rate);
                    const firstExample = {
                        size: 20,
                        count: 5,
                        color: "grey",
                        activeColor: "#f9bc16",
                        value: (rating.rate),
                        a11y: true,
                        isHalf: true,
                        edit:false,
                        emptyIcon: <FontAwesomeIcon icon={faStar} />,
                        halfIcon: <FontAwesomeIcon icon={faStarHalf} />

                    };

                    return <div className="product-card" key={id}>
                        <img src={image} alt={title} width="80px" />
                        <Link  to={"/product/"+id}>
                        <p className="links">{title}</p>
                        </Link>
                        <div className="amount">
                            <strong>
            <ReactStars {...firstExample}/>
                            </strong>
                            <strong> ${price}</strong>
                        </div>
                        <FontAwesomeIcon icon={faCartPlus}
                        className="cart-icon"
                        onClick={()=>props.handleAddProduct(data)}
                        />
                    </div>
                })}

                
            </Content>
        </Wrapper>
    )
}

export default FeaturesProducts
