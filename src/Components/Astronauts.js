import React from "react";

import "../styles/astronauts.css";


export default function Astronauts() {
    return (
        <div id="Astronauts">
            <div id="astronaut">
                <img
                    className="Astronaut1"
                    src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
                    alt="Astronaut"
                    width={250}
                //height={100}
                />
            </div>
            <div id="astronaut2">
                <img
                    className="Astronaut2"
                    src="https://images.vexels.com/media/users/3/152641/isolated/preview/2b3d63661f0d7fe62c36168604985f26-space-cosmonaut-cartoon-by-vexels.png"
                    alt="Astronaut"
                    width={250}
                //height={100}
                />
            </div>
        </div>
    );
}