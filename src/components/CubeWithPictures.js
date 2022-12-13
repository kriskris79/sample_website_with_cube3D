import React from "react";
import Cube from 'react-3d-cube';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.gif';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';

const CubeWithPictures = () => {

    return (

        <div  className="cube-container">
            {/*<h1>react-3d-cube</h1>*/}
            <div
                style={{
                    width: 400,
                    height: 400
                }}
            >
                <Cube size={400} index="front">
                    <img src={img1} alt="picturenr1"/>
                    <img src={img2} alt="picturenr2"/>
                    <img src={img3} alt="picturenr3"/>
                    <img src={img4} alt="picturenr4"/>
                    <img src={img5} alt="picturenr5"/>
                    <img src={img6} alt="picturenr6"/>
                </Cube>
            </div>
        </div>
    );
}
export default CubeWithPictures;