import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactPageImg from "../../../static/assets/images/auth/login.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="content-page-left-column">
                <div className="page-headline">
                    Let's get to work
                </div>

                <div className="page-content">
                    <br/>
                    If you're interested in hiring me for a project, feel free 
                    <br/> to send me a message!
                    <br/>
                    <br/>
                    <br/>
                </div>

                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon-mobile">
                            <FontAwesomeIcon icon="mobile-alt" />
                        </div>

                        <div className="text-mobile">
                            555-555-5555
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>

                        <div className="text">
                            newGmail@gmail.com
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>

                        <div className="text">
                            Denver, CO
                        </div>
                    </div>
                </div>
            </div>

            <div 
                className="content-page-right-column" 
                style={{
                    background: "url(" + contactPageImg + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
        </div>
    );
}