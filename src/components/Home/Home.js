import React from 'react';
import './Home.css';
import HomeIcon from '../../Images/homelogo.png';
import CaseStudy from '../CaseStudy/CaseStudy'
import PageProgress from 'react-page-progress'
import Achievement from '../Achievement/Achievement'
import Footer from '../Footer/Footer'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import UserReview from '../UserReview/UserReview'
import ContactUs from '../ContactUs/ContactUs'
import ServiceDetail from '../Services/ServiceDetail'



const Home = () => {



    return (
      <>
       <div className="home_container">
         <PageProgress color={'#FD2E52 '} height={6}/>
           <div className="flex_container">
           <div className="flex_title">
             <Slide left >
                    <h1>Digital Marketing <br/> Agency</h1> 
                    </Slide>
                    <Slide left>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem atque quam harum obcaecati in aliquid. Alias excepturi expedita tempore eos.</p>
                    </Slide>
                    <Bounce top>
                    <button className="home_btn">Boost Now</button>
                    </Bounce>
           </div>
           <div className="flex_image">
           <Slide top cascade>
 <img src={HomeIcon} alt="" width="600px" />
 </Slide>
           </div>
       </div>
       <Slide button>
       <Achievement/>
       </Slide>
       <CaseStudy/>
  <ServiceDetail/>
   <UserReview/>
<ContactUs/>
       <Footer/>
       </div>
      </>
    );
};

export default Home;