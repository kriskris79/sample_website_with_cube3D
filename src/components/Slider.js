import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel } from 'react-bootstrap';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
function Slider() {

    return (
        <>
            <div className='p-5'>
                <Carousel interval={null}>
                    <Carousel.Item>
                        <img style={{maxHeight:"100vh"}}
                             className="d-block w-100"
                             src={img1}
                             alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First Slider Image Title</h3>
                            <p>First Slide decription.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{maxHeight:"100vh"}}
                            className="d-block w-100"
                             src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide Image </h3>
                            <p>Second slide description</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{maxHeight:"100vh"}}
                            className="d-block w-100"
                             src="https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third Slide Image</h3>
                            <p>Third Slide Description.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img style={{maxHeight:"100vh"}}
                             className="d-block w-100"
                             src="https://images.pexels.com/photos/288008/pexels-photo-288008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third Slide Image</h3>
                            <p>Third Slide Description.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img style={{maxHeight:"100vh"}}
                             className="d-block w-100"
                             src="https://images.pexels.com/photos/1345574/pexels-photo-1345574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third Slide Image</h3>
                            <p>Third Slide Description.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img style={{maxHeight:"100vh"}}
                             className="d-block w-100"
                             src="https://images.pexels.com/photos/1024968/pexels-photo-1024968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third Slide Image</h3>
                            <p>Third Slide Description.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img style={{maxHeight:"100vh"}}
                             className="d-block w-100"
                             src="https://images.pexels.com/photos/1024968/pexels-photo-1024968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third Slide Image</h3>
                            <p>Third Slide Description.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        </>
    );
}

export default Slider;







//
//
// import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
// const Slider = () => {
//     return (
//
//
//
//             <Carousel>
//             <Carousel.Item interval={10000}>
//             <img
//             className="d-block w-100"
//             src ="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             alt="First slide"
//             />
//             <Carousel.Caption>
//             <h3>The first slide </h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item interval={10000}>
//             <img
//             className="d-block w-100"
//             src="https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             alt="Second slide"
//             />
//             <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//             </Carousel.Item >
//                 <Carousel.Item interval={10000}>
//                     <img
//                         className="d-block w-100"
//                         src="https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                         alt="Third slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>Third slide label</h3>
//                         <p>
//                             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                         </p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             <Carousel.Item interval={10000}>
//             <img
//             className="d-block w-100"
//             src="https://images.pexels.com/photos/288008/pexels-photo-288008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             alt="Third slide"
//             />
//             <Carousel.Caption>
//             <h3>Fourth slide label</h3>
//             <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//             </Carousel.Caption>
//             </Carousel.Item>
//                 <Carousel.Item interval={10000}>
//                     <img
//                         className="d-block w-100"
//                         src="https://images.pexels.com/photos/1345574/pexels-photo-1345574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                         alt="Third slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>Fifth  slide label</h3>
//                         <p>
//                             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                         </p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item interval={10000}>
//                     <img
//                         className="d-block w-100"
//                         src="https://images.pexels.com/photos/1024968/pexels-photo-1024968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                         alt="Third slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>Sixth   slide label</h3>
//                         <p>
//                             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                         </p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item interval={10000}>
//                     <img
//                         className="d-block w-100"
//                         src="https://images.pexels.com/photos/1024968/pexels-photo-1024968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                         alt="Third slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>Seventh    slide label</h3>
//                         <p>
//                             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                         </p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>
//             );
//         }
//
//
//
//
//
//
// export default Slider;