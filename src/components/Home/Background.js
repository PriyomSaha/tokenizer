import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
function Background() {
    
    return (
        <Carousel  
        autoPlay={true}
        interval={3000}
        controls={false}
        indicators={false}
        pause={false}
        >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption className="caption h-50">
                    <h3>We Aim Towards <br/><span style={{color:'#edbb00',fontSize:'5vh'}}>Covid Free World</span></h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                />
                <Carousel.Caption className="caption h-50">
                    <h3>We Provide <br/><span style={{color:'#edbb00',fontSize:'5vh'}}>Hassle Free Buying</span></h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />
                <Carousel.Caption className="caption h-50">
                    <h3>Register Your Shop & Get <br/><span style={{color:'#edbb00',fontSize:'5vh'}}>Free Boost Credit</span></h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Background
