import "./placeToStay.scss"
import cimg_1 from "../../images/card/homecard1.svg"
import cimg_2 from "../../images/card/hcard2.svg"
import cimg_3 from "../../images/card/hcard3.svg"
import cimg_4 from "../../images/card/hcard4.svg"
import cimg_5 from "../../images/card/hcard5.svg"
import cimg_6 from "../../images/card/hcard6.svg"
import cimg_7 from "../../images/card/hcard7.svg"
import cimg_8 from "../../images/card/hcard8.svg"
import frame_1 from "../../images/card/Frame1.svg"
import frame_2 from "../../images/card/Frame2.svg"
import frame_3 from "../../images/card/Frame3.svg"
import frame_4 from "../../images/card/Frame4.svg"
import frame_5 from "../../images/card/Frame5.svg"
import frame_6 from "../../images/card/Frame6.svg"
import frame_7 from "../../images/card/Frame7.svg"
import frame_8 from "../../images/card/Frame8.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";

const PlaceToStay = () => {

    const [isNavLocation, setIsNavLocation] = useState(false)

    const placesToStay = [
        {id:1 , img: cimg_5, title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:2 , img: cimg_6, title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:3 , img: cimg_7, title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:4 , img: cimg_8, title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:5 , img:cimg_1, title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:6 , img:cimg_2 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:7 , img: cimg_3, title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:8 , img:cimg_4 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:9 , img:frame_8 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:10 , img:frame_7 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:11 , img:frame_6 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:12 , img:frame_5 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:13 , img:frame_4 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:14 , img:frame_3 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:15 , img: frame_2, title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:16 , img:frame_1 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" }
    ]

    const PlaceToStayDetails = placesToStay.map((placesToStay) => 

                    <div className="place-to-stay-card">
                    <div className="card-img">
                        <img src={placesToStay.img} alt="" />
                    </div>

                    <div className="card-title1">
                        <span>{placesToStay.title}</span>
                        <bold>{placesToStay.cost}</bold>
                    </div>

                    <div className="card-title2">
                        <span>{placesToStay.distance}</span>
                        <span>{placesToStay.available}</span>
                    </div>

                    <div className="ratings">
                <span> <FontAwesomeIcon icon="fa-star" /></span>
                <span> <FontAwesomeIcon icon="fa-star" /></span>
                <span> <FontAwesomeIcon icon="fa-star" /></span>
                <span> <FontAwesomeIcon icon="fa-star" /></span>
                <span> <FontAwesomeIcon icon="fa-star" /></span>
                

                    </div>
                    </div>
    
    )


    return (
        <>
        <section className="place">
            <div className="filter">
                <nav>
                    <ul className={isNavLocation ? "locationexpanded" : "locationnav"}>
                        <li>Resturant</li>

                        <li>Cottage</li>

                        <li>Castle</li>

                        <li>fantast city</li>

                        <li>beach</li>

                        <li>Carbins</li>

                        <li>Off-grid</li>

                        <li>Farm</li>
                    </ul>

                    <button className="filter-btn" onClick={() => {setIsNavLocation(!isNavLocation);}}>
                        <span>Location</span>
                    <FontAwesomeIcon icon="fa-sliders" />
                    </button>
                </nav>

            </div>

            <div className="place-to-stay">
                <div className="place-to-stay-inner">
                    {PlaceToStayDetails}
                </div>
            </div>
        </section>
        </>
    )
}

export default PlaceToStay