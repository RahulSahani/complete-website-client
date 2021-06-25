import React from 'react';
import './Achievement.css';
import Icon1 from './icons/icon1.png';
import Icon2 from './icons/Saly-42.png';
import Zoom from 'react-reveal/Zoom';

const Achievement = () => {
    return (
        <div className='achieve_bar'>
             <Zoom>
            <div className=" bar">
                <div className="flex-icon">
                     <img src={Icon1} alt="" width="100px" /> 
                 <h2>Icon1</h2>

                </div>
                <div className=" flex-icon">
                <img src={Icon2} alt="" width="150px" /> 
                 <h2>Icon1</h2>
                </div>
                <div className="flex-icon">
                <img src={Icon1} alt="" width="100px" /> 
                <h2>Icon1</h2>

                </div>
                <div className="flex-icon">
                <img src={Icon1} alt="" width="100px" /> 
                <h2>Icon1</h2>
    

                </div>
            </div>
            </Zoom>
        </div>
    );
};

export default Achievement;