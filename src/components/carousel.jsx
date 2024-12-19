import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselDiv = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (

    <Carousel
    responsive={responsive}
    infinite
    autoPlay
    autoPlaySpeed={3000}
    keyBoardControl
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container ms-2 me-2 pt-2 pb-2"
    deviceType={responsive.deviceType}
    partialVisible
    swipeable
    showDots
    dotListClass="custom-dot-list-style carousel-dots"
    renderDotsOutside
    itemClass="carousel-item-padding-40-px rounded-5"
    slidesToSlide={1}
    

  >
    <div className="card h-100 border-0 bg-transparent p-3">
    <img src="https://res.cloudinary.com/wonderwoman/image/upload/v1733604781/myportfolio/wonderHotels/single.jpg" className="card-img-top rounded-4 img-fluid" alt="room slide" />
    </div>
    <div className="card h-100 border-0 bg-transparent p-3">
    <img src="https://res.cloudinary.com/wonderwoman/image/upload/v1733604788/myportfolio/wonderHotels/suite.jpg" className="card-img-top rounded-4 img-fluid" alt="room slide" />
    </div>
    <div className="card h-100 border-0 bg-transparent p-3">
    <img src="https://res.cloudinary.com/wonderwoman/image/upload/v1733604781/myportfolio/wonderHotels/deluxe-suite.jpg" className="card-img-top rounded-4 img-fluid" alt="room slide" />
    </div>
    <div className="card h-100 border-0 bg-transparent p-3">
    <img src="https://res.cloudinary.com/wonderwoman/image/upload/v1733604777/myportfolio/wonderHotels/double1.jpg" className="card-img-top rounded-4 img-fluid" alt="room slide" />
    </div>
    
</Carousel>

  )


}
export default CarouselDiv
