import React, { useEffect, useState } from 'react'
import data from '../fakeData/features'
import RightButton from '../images/arrow-point-to-right.svg'
import LeftButton from '../images/left-arrow.svg'
import { Wrapper } from './Features.styled'

const Features = () => {
    const [featuresPicture, setFeaturesPictues] = useState(data)
    const [index, setIndex] = useState(0)
    useEffect(() => {

        const lastIndex = featuresPicture.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [featuresPicture.length, index])
    // Break 
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000)

        return () => {
            clearInterval(slider)
        }
    }, [index])


    return (
        <Wrapper>
           <section className="section">
               <div className="section-center">
                        {featuresPicture.map((image, imageIndex) => {
                    const { img, key } = image;
                    // console.log(img, key);
                    let position = "NextSlide"
                    if (imageIndex === index) {
                        position = "active"
                    }

                    if (imageIndex === index - 1 || (index === 0 && imageIndex === image.lenght - 1)) {
                        position = "lastSlide"
                    }
                    return <article className={position} key={key}>
                        <img src={img} alt="" className="features-img" />
                    </article>
                })}


               <img src={LeftButton} alt="" className="icon left" onClick={() => setIndex(index - 1)} />


                 <img src={RightButton} alt="" className="icon right" onClick={() => setIndex(index + 1)} />
               </div>
           </section>
        </Wrapper>
    )
}

export default Features
