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
            <p className="cube-text"> 3D cube model with the pictures </p>
            <div
                style={{
                    width: 350,
                    height: 350
                }}
            >
                <Cube size={350} index="front">
                    <img src={img1} alt="wedding_picture_nr1"    />
                    <img src={img2} alt="wedding_picture_nr2"  />
                    <img src={img3} alt="wedding_picture_nr3"/>
                    <img src={img4} alt="wedding_picture_nr4"/>
                    <img src={img5} alt="wedding_picture_nr5"/>
                    <img src={img6} alt="wedding_picture_nr6"/>
                </Cube>
            </div>



        </div>
    );
}
export default CubeWithPictures;