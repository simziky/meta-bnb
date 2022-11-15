import hero_1 from "../../images/hero1.svg"
import hero_2 from "../../images/hero2.svg"
import hero_3 from "../../images/hero3.svg"
import hero_4 from "../../images/hero4.svg"
import mbtoken from "../../images/mbtoken.svg"
import metamask from "../../images/metamask.svg"
import opensea from "../../images/opensea.svg"
import cimg_1 from "../../images/card/homecard1.svg"
import cimg_2 from "../../images/card/hcard2.svg"
import cimg_3 from "../../images/card/hcard3.svg"
import cimg_4 from "../../images/card/hcard4.svg"
import cimg_5 from "../../images/card/hcard5.svg"
import cimg_6 from "../../images/card/hcard6.svg"
import cimg_7 from "../../images/card/hcard7.svg"
import cimg_8 from "../../images/card/hcard8.svg"
import nft_1 from "../../images/nft1.svg"
import nft_2 from "../../images/nft2.svg"
import nft_3 from "../../images/nft3.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./home.scss"
const Home = () => {

    const homeCards = [
        {id:1 , img:cimg_1 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:2 , img:cimg_2 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:3 , img:cimg_3 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:4 , img:cimg_4 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:5 , img:cimg_5 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:6 , img:cimg_6 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:7 , img: cimg_7, title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
        {id:8 , img:cimg_8 , title:"Desert king", cost:"1MBT per night", distance:"2345km away" , available: "available for 2weeks stay" },
    ]

    const cardDetails = homeCards.map((homeCards) =>

            
                <div className="home-card">
                    <div className="card-img">
                        <img src={homeCards.img} alt="" />
                    </div>

                    <div className="card-title1">
                        <span>{homeCards.title}</span>
                        <bold>{homeCards.cost}</bold>
                    </div>

                    <div className="card-title2">
                        <span>{homeCards.distance}</span>
                        <span>{homeCards.available}</span>
                    </div>

                    <div className="ratings">
                   <span> <FontAwesomeIcon icon="fa-star" /></span>
                   <span> <FontAwesomeIcon icon="fa-star" /></span>
                   <span> <FontAwesomeIcon icon="fa-star" /></span>
                   <span> <FontAwesomeIcon icon="fa-star" /></span>
                   <span> <FontAwesomeIcon icon="fa-star" /></span>
                   
      
                    </div>
                    </div>
            
    
    );
    return (
        <>
        <div className="home-hero-section">
{/****************************START OF HERO SECTION TEXT**************************/}
            <div className="hero-text">

                <div className="hero-text-1">
                    <p>
                    Rent a <bold>Place</bold> away from <bold>Home</bold> in the <bold>Metaverse</bold>
                    </p>
                   
                </div>

                <div className="hero-text-2">
                    <p>
                    we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                    </p>
                </div>

                <div className="hero-search">
                    <input type="text"  placeholder="Search for location"/>
                    <button>
                        search
                    </button>
                </div>

            </div>


{/***************************START OF HERO SECTION IMAGE**********************************/}
            <div className="home-hero-image-section">
                <div className="hero-image-section-1">
                    <img src={hero_1} alt="hero1" />

                    <img src={hero_3} alt="hero2" />
                </div>

                <div className="hero-image-section-2">
                <img src={hero_2} alt="hero3" />

                <img src={hero_4} alt="hero4" />
                </div>
            </div>
        </div>


{/**********************************START OF TOKEN SECTION********************* *********/}
        <div className="Token-type">
            <section>

                <img src={mbtoken} alt="mbtoken" />

                <img src={metamask} alt="metamask" />

                <img src={opensea} alt="opensea" />

            </section>
        </div>



{/***********************************START OF CARDS SECTION**********************************/}

            <div className="home-card-main">
                <div className="home-card-title-text">
                Inspiration for your next adventure
                </div>

                <div className="home-cards-inner">
                {cardDetails}
                </div>
            </div>


{/*******************************START OF METABNB NFT***********************************/}

        <section className="metabnb-nft-main">
            <div className="metabnb-nft">
                <div className="metabnb-nft-1">
                    <p>
                    Metabnb NFTs
                    </p>

                    <p>
                    Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                    </p>

                    <button>
                        learn more
                    </button>
                </div>

                <div className="metabnb-nft-2">
                    <img src={nft_1} alt="" />
                    <img src={nft_2} alt="" />
                    <img src={nft_3} alt="" />
                </div>
            </div>
        </section>


        </>
    )
}

export default Home