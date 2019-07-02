import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components'
import tw from 'tailwind.macro'

const CarouselWrapper = styled.div` 
  ${tw`flex object-cover overflow-hidden h-auto w-full p-0`};
`


class KrisCarousel extends Component {
    render() {
        return (
            <CarouselWrapper>
                <Carousel stopOnHover={false} showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true} verticalSwipe={'natural'} width='100%' autoPlay={true} interval={3500} transitionTime={380} swipeable={true} dynamicHeight={false} centerMode={false}>
                    <div><img src="images/portfolio/DSC02944.jpg" /></div>
                    <div><img src="images/portfolio/DSC02821.jpg" /></div>
                    <div><img src="images/portfolio/DSC02817-Enhanced.jpg" /></div>
                    <div><img src="images/portfolio/DSC01888.jpg" /></div>
                    <div><img src="images/portfolio/DSC01815.jpg" /></div>
                    <div><img src="images/portfolio/DSC01859.jpg" /></div>
                    <div><img src="images/portfolio/DSC03313.jpg" /></div>
                    <div><img src="images/portfolio/DSC03419.jpg" /></div>
                    <div><img src="images/portfolio/DSC00030.jpg" /></div>
                    <div><img src="images/portfolio/_MG_5147-small.jpg" /></div>
                    <div><img src="images/portfolio/DSC00017-small.jpg" /></div>
                    <div><img src="images/portfolio/_MG_1520-small.jpg" /></div>
                    <div><img src="images/portfolio/_MG_1853-small.jpg" /></div>
                    <div><img src="images/portfolio/DSC01294-small.jpg" /></div>

                </Carousel>
            </CarouselWrapper>
        );
    }
}

export default KrisCarousel
