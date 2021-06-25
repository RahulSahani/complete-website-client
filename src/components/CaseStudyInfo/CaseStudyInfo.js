import React from 'react';
import img1 from '../CaseStudy/images/01.jpg';
import img2 from '../CaseStudy/images/02.jpg';
import img3 from '../CaseStudy/images/03.jpg';
import img4 from '../CaseStudy/images/4.jpg';
import img5 from '../CaseStudy/images/05.jpg';
import img6 from '../CaseStudy/images/06.jpg';
import CaseStudy from '../CaseStudy/CaseStudy'
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
}];

// import React from 'react';

const CaseStudyInfo = () => {
    return (
        <div className='row'>
            {
              studyData.map(data => <CaseStudy data={data}></CaseStudy>)
            }
        </div>
    );
};

export default CaseStudyInfo;
// export default studyData;