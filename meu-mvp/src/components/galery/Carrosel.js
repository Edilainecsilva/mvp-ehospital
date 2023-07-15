import React from 'react';
import { MDBCarousel, MDBCarouselItem, } from 'mdb-react-ui-kit';
import banner_1 from '../../assets/banner_1.png'
import banner_2 from '../../assets/banner_2.png'
import banner_3 from '../../assets/banner_3.png'


export default function Carousel() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={banner_1} alt="Banner1"
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={banner_2} alt="Banner2"
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={banner_3} alt="Banner3"
      >
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
