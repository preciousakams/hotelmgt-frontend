import Nav from "../components/nav";
import Footer from "../components/footer";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin  } from "react-icons/ti"
import Rooms from "./rooms";

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
        <div className="mainDiv col-11">
        <div className="writeup">
        <h5>
          Discover tranquility, wrapped in five-star grandeur
          </h5>
          <p>
          Let nature soothe your soul
          </p>
        </div>
        <Rooms />
        </div>
        <div className="row">
          <div className="col-1 sideFooter"></div>
          <div className="col-11">
            <Footer />
         
          </div>
        </div>
        </div>
      
    </div>
  )
}

export default Home;