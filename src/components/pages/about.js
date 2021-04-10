import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="content-page-left-column">
                <div className="page-headline">
                    I’m Brooke Barker, and I'm a Denver‑based graphic designer 
                    and full-stack web developer, looking for new surroundings 
                    and new challenges. 
                </div>

                <div className="page-content">
                    <br/>
                    I graduated from Purdue University with a major in Visual Communications 
                    Design, and in the Spring of 2021 I completed my full-stack 
                    web development certification from Bottega University. 
                    I've accumulated almost a decade of hard‑working experience in the 
                    field of graphic design across all mediums, and I also have extensive 
                    experience with photo editing, photo manipulation, and video work. 
                    I’m passionate about great design and  I love to challenge myself 
                    with new things. I believe that I could be an asset to any creative 
                    environment, and I know that I can rise to any occasion.
                    <br/>
                    <br/>
                    If you're interested in finding out more about me, don't hesitate to reach out!
                </div>
            </div>

            <div 
                className="content-page-right-column" 
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
        </div>
    );
}