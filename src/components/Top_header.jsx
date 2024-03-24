import React from "react";
import Airbnb_logo from "../../public/favicon.ico";

function Top_header() {
    return (
        <>
            <div className="top-header h-[80px] flex items-center justify-between">
                <div className="left_elements h-[100%] flex items-center">
                    <div className="logo flex items-center">
                        <img className="h-8" src={Airbnb_logo} alt="Airbnb logo" />
                        <span className="ml-3 text-2xl">airbnb</span>
                    </div>
                </div>

                <div className="center_items flex gap-4">
                    <div className="p-2">Stays</div>
                    <div className="p-2">Experiences</div>
                    <div className="p-2">Online Experiences</div>
                </div>

                <div className="right_elements flex">
                    <div>Airbnb your home</div>
                    <div>
                        
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Top_header;
