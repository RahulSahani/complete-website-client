import React from 'react';

import img1 from './images/01.jpg'
import Fade from 'react-reveal/Fade';


const CaseStudy = (props) => {

    console.log(props.data, 'data')

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center mt-5  flex-column">
                <Fade bottom>
                    <h4 className="text-white"> Success Stories</h4>
                    </Fade>
                    <Fade  bottom>
                    <h1 className="mt-3 text-white">Our Case Study</h1>
                    </Fade>
                    <Fade  bottom>
                    <p className="text-center mt-3 text-white mb-5">Deos et accusamus et iusto odio dignissimos qui<br /> blanditiis praesentium voluptatum dele corrupti quos<br /> dolores et quas molestias.</p>
                </Fade>
                </div>

                <div className="row">
                    <Fade left>
                    <div className="col-md-4 mb-5">
                 
                        <div className="card">
                            <img className="card-img-top" src={img1} alt="casestudy" width='200px' />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button  class="btn btn-primary">Go somewhere</button>
                            </div>
                        </div>
                   
                    </div>
</Fade>
<Fade left>
                    
                    <div className="col-md-4 mb-5">
        
                        <div className="card">
                            <img className="card-img-top" src={img1} alt="casestudy" width="200px" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button  class="btn btn-primary">Go somewhere</button>
                            </div>
                        </div>
                       
                    </div>

             
                    </Fade>
                    <Fade left>
                    <div className="col-md-4 mb-5">
                    
                  
                 
                        <div className="card">
                            <img className="card-img-top" src={img1} alt="casestudy" width='200px' />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button  class="btn btn-primary">Go somewhere</button>
                            </div>
                        </div>
                
                    </div>
                    </Fade>
                
                </div>
              
            </div>

        </>
    );
};

export default CaseStudy;



/*
import img1 from '../images/01.jpg';
import img2 from '../images/02.jpg';
import img3 from '../images/03.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/05.jpg';
import img6 from '../images/06.jpg';
import CaseStudy from '../CaseStudy'

const studyData = [
    {
    CaseStudyName:'Digital Marketing',
    category:'Digital',
    studyImage:img1,
},
{
    CaseStudyName:'Web & Mobile Apps',
    category:'Digital',
    studyImage:img2,
},
{
    CaseStudyName:'Traffic Management',
    category:'Digital',
    studyImage:img3,
},
{
    CaseStudyName:'Seo Optimization',
    category:'Digital',
    studyImage:img4,
},
{
    CaseStudyName:'Marketing Financing',
    category:'Digital',
    studyImage:img5,
},
{
    CaseStudyName:'SEO Analiysis',
    category:'Digital',
    studyImage:img6,
},



]*/