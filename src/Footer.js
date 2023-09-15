import React from "react";
import facebook from './image/324_facebookicon.jpg';
import instagram from './image/739244.png';
import twitter from './image/logo-black.png.twimg.1920.png';
 import youtube from './image/717426.png';

const Footer = () => {
    return (
        <div className="footerDiv">
            <div className="div1">
                <a>
                <img src={facebook} alt="fb" style={{width:'20px', height:'30px'}}/>
                </a>
                <a>
                    <img src={instagram} alt="instagram" style={{width:'15px', height:'4S0px'}} />
                </a>

                <a>
                    <img src={twitter} alt="twitter" style={{width:'20px', height:'15px'}} />
                </a>

                <a>
                    <img src={youtube} alt="youtube" style={{width:'30px', height:'30px'}} />
                </a>
            </div>

            <div className="div2">
                <a>
                    Condition of use
                </a>

                <a>
                    Privacy & policy
                </a>
                <a>
                    Press Room
                </a>
            </div>
        </div>
    )
}

export default Footer