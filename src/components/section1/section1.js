import React from 'react'
import { NavLink } from "react-router-dom";
import heroimg from '../../media/heroimg.webp'
import './/section1.css'
import Typewriter from 'typewriter-effect';
// import { CiSquareChevDown } from "react-icons/ci";

export default function section1() {
    return (
        <>

            <div className='Outer-div'>

                <div className='inner-div'>

                    <div className='text-div'>
                        <p><span className='ccet-brand' >ccet</span> <br />
                            {/* <span className='Assignments'>ASSIGNMENTS</span><br /><br /> */}
                            <span className='Assignments'>   <Typewriter
                                options={{
                                    strings: ['ASSIGNMENTS', 'Practical Files', 'PYQ', 'Student clubs'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></span>

                            <span className='made-by'>For all your academic needs 😎</span>
                        </p>
                        <div >
                            <button><NavLink to="/register">Explore All Resources ✍️</NavLink></button>
                        </div>

                    </div>


                    <div className='image-div'>
                        <img src={heroimg} alt="" />
                    </div>


                </div>
                {/* <div class="arrow-container animated fadeInDown">
                    <div class="arrow-2">
                    <FontAwesomeIcon icon="fa-thin fa-arrow-down" />
                    </div>
                    <div class="arrow-1 animated hinge infinite zoomIn"></div>
                </div> */}
            </div>
        </>
    )
}
