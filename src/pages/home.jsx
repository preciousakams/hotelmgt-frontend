
import Nav from "../components/nav";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin  } from "react-icons/ti"
import CarouselDiv from '../components/carousel';


const Home = () => {

  return (
    <div className="App">
      <Nav />
      <div className="row mainCon">
        <div className="col-1 sideFooter"> 
            <p className="mail"> support@wonderhotels.com</p>
            <div className="socials">
            <TiSocialLinkedin />
            <TiSocialFacebook />
            <TiSocialInstagram />
            </div>
        </div>
        <div className="mainDiv col-10">
        <div className="writeup">
        <h5>
          Discover tranquility, wrapped in <br/> five-star grandeur
          </h5> 
          <br />
          <p>
          Let nature soothe your soul
          </p>
        </div>
        
        </div>
   
        <div className="row carouselRow">
          <div className="col-1 sideFooter"></div>
          <div className="col-10">
            <CarouselDiv />
          </div>
        </div>
        </div>
      
    </div>
  )
}

export default Home;