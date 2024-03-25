import React from "react";
import Airbnb_logo from "/assets/icons/airbnb_main.svg";
import earth_logo from "/assets/icons/earth.svg";
import user_logo from "/assets/icons/user.svg";
import menu_logo from "/assets/icons/menu.svg";

import './top_header.css';
function Top_header() {
    return (
        <>
            <div className="top-header h-[80px] flex items-center ">
                <div className="container flex items-center justify-between ml-20 mr-20">
                    <div className="left_elements h-[100%] flex items-center">
                        <div className="logo flex items-center">
                            <img className="h-8" src={Airbnb_logo} alt="Airbnb logo" />
                        </div>
                    </div>

                    <div className="center_items flex gap-5 ml-40">
                        <div className="text-base p-3 center_items_stays light_color">Stays</div>
                        <div className="text-base p-3 font-extralight light_color">Experiences</div>
                        <div className="text-base p-3 font-extralight light_color">Online Experiences</div>
                    </div>

                    <div className="right_elements flex items-center ">
                        <div className=" text-sm airbnb_your_home">Airbnb your home</div>
                        <div>
                            <img className="earth_logo" src={earth_logo} alt="earth_logo" />
                        </div>
                        <div className=" user_info flex rounded-full border gap-3 p-2 items-center">
                            <div>
                                <img className="h-4 ml-[3px]" src={menu_logo} alt="menu_logo" />
                            </div>
                            <div>
                                <img className="mr-[3px]" src={user_logo} alt="user_logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Top_header;
