
import Tokenomics from "../components/Tokenomics";
import ImageSlider from "./../components/ImageSlider"
import VideoPlayer from "../components/VideoPlayer";
import YouTubeEmbed from "../components/YoutubeEmbed";

function Home({ isMobile }) {
    return (
        <>

            <div className={`relative`} >
                <div className="relative bg-black top-0 text-center w-full text-xs text-gray-400 border-b border-gray-400">
                    <p className="text-center leading-tight">
                        THIS IS NOT AN OFFICIAL WEBSITE OF THE UNITED STATES GOVERNMENT
                    </p>
                </div>
                <img className={`w-full ${isMobile ? 'auto' : 'h-screen'} mb-5`} src={`./VITALIN.jpg`} />
                {/* Content */}
                <div className={`bg-black opacity-50 px-8 py-8 ${isMobile ? 'relative' : 'absolute w-full bottom-0 top-3'}`}>

                    <h1 className=" ext-3xl text-center text-white sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                        The Ethereum act
                    </h1>
                    {/* Paragraph Text */}
                    <p className="  text-white">
                        In the corridors of the legislative intrigue, whispers of an enigmatic proposal known as the “Ethereum Act” have begun to stir the air. This elusive framework, cloaked in the promise of blockchain innovation, seeks to redefine the world’s relationship with Ethereum, the world’s second-largest cryptocurrency by market cap. The Act teases a bold vision: integrating Ethereum’s decentralized might into the nation’s financial arsenal. Ethereum’s native token, Ether (ETH), commands a market cap exceeding $400 billion as of 2025, and its smart contract prowess fuels a sprawling ecosystem of decentralized finance (DeFi) and beyond. Will it unlock Ethereum’s potential as a strategic reserve, or bind it in bureaucratic chains? The Ethereum Act looms, a cryptic force on the horizon, poised to reshape the digital frontier.
                    </p>

                    {isMobile ?? <><Tokenomics /></>}

                </div>

            </div>
            <Tokenomics />
            {/* <ImageSlider /> */}
            <div className="bg-white px-2 py-2">
                <div className="md:col-span-2 p-6">
                    <h1 className="  px-4 py-1 text-4xl font-bold uppercase">News</h1>
                    <hr className="border-t-2 border-dotted border-gray-400 my-6" />
                    <div className="flex flex-col items-center">
                        <img className="mb-5 mt-8" src="./1.jpg" />
                        <img className="mb-5 mt-8" src="./2.jpg" />
                        <img className="mb-5 mt-8" src="./3.jpg" />
                        <img className="mb-5 mt-8" src="./4.jpg" />
                    </div>



                    {/* <YouTubeEmbed id="ddzlVzc_ypE?si=vCKa226aXTM5ccov" />  */}

                </div>
            </div>

        </>

    );
}


export default Home;