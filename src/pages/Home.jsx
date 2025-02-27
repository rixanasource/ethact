
import { useEffect, useRef } from "react";
import Tokenomics from "./Tokenomics";
import ImageSlider from "./../components/ImageSlider"
import VideoPlayer from "../components/VideoPlayer";

function Home({ isMobile }) {
    return (
        <>
            <div className="bg-black top-0 text-center w-full text-xs text-gray-400 border-b border-gray-400 p-2">
                THIS IS NOT AN OFFICIAL WEBSITE OF THE UNITED STATES GOVERNMENT
            </div>

            <div
                className={`relative`}
            >
                <img className={`w-full ${isMobile ? 'auto' : 'h-screen'} mb-5`} src={`./ELON1.jpg`} />


                {/* Content */}
                <div className={`bg-black opacity-50 px-8 py-8 ${isMobile ? 'relative' : 'absolute bottom-0'}`}>
                    {/* Small Highlighted Text */}
                    <span className="text-white text-xs sm:text-sm md:text-base font-bold uppercase">
                        “FAFO” stands for “F*** Around and Find Out”
                    </span>

                    <p className="mt-4 text-white text-xs sm:text-sm md:text-base font-bold">THE IDEA OF</p>
                    {/* Main Heading */}
                    <h1 className=" ext-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                        Federal Agency for Financial Oversight
                    </h1>

                    <p className=" mt-4 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-white">
                        Fafo stands for….<br />
                        The D.O.G.E. Alt
                    </p>

                    {/* Paragraph Text */}
                    <p className=" mt-4 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-white">
                        Elon Musk recently proposed (FAFO) “Federal Agency for Financial Oversight” as the enforcement arm
                        for his (DOGE) “Department of Government Efficiency”.

                        This strategic branding, aims to bolster the Trump administration’s efforts to streamline governmental operations and enhance financial accountability. The idea is that this new entity would act as an enforcement arm focused on financial oversight within the federal government.

                        This vision aligns with Musk’s DOGE role, where he’s already pushing to dismantle inefficiencies, and the FAFO name—playing on “F**k Around and Find Out”—suggests a no-nonsense, confrontational approach to enforcement and would tie into his ongoing efforts to reshape the federal agencies.
                    </p>

                    {isMobile ?? <><Tokenomics /></>}

                </div>

            </div>
            <Tokenomics />
            <ImageSlider />
            <div className="bg-white px-2 py-2">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-2 p-6">
                        <h1 className="  px-4 py-1 text-4xl font-bold uppercase">News</h1>
                        <hr className="border-t-2 border-dotted border-gray-400 my-6" />
                        <img className="mb-5 mt-8" src={`./PHOTO2.jpg`} />
                        <p>
                            US President Donald Trump yet again praised Elon Musk for his leadership in streamlining federal operations through the Department of Government Efficiency (DOGE). During a speech, Trump highlighted Musk’s contributions and joked about his unique naming choices. In response, Musk posted on X (formerly Twitter), saying, "Everything is called X." This marks another instance of Trump publicly applauding Musk’s role in government reforms.

                            <span><a className="text-blue-950 underline" target="_blank" href="https://www.livemint.com/news/us-news/elon-musk-gets-donald-trump-s-seal-of-approval-great-job-running-doge-elon-musk-responds-with-classic-x-wit/amp-11740323734004.html"> Source-</a> </span>
                        </p>

                        <div className="flex justify-center items-center  mt-16">
                            <img className="mb-5 " src={`./PHOTO3.png`} /></div>
                        <p>
                            The “America First” policy is like putting on a superhero cape for the U.S. It’s about flexing muscle in trade, security, and jobs, making sure America leads the way. It’s less about playing by everyone else’s rules and more about making moves that benefit the country, whether it’s cutting deals, securing borders, or bringing jobs back home.

                            On top of that, the “America First” approach was all about breaking free from long-standing international commitments that didn’t seem to give the U.S. enough in return. Whether it was pulling out of climate deals or questioning global alliances, it was a statement that America would no longer play second fiddle. It’s like saying, “Let’s focus on what’s best for us right now—no more playing nice just for the sake of it.”
                        </p>
                        <p>
                            Musk weighs a 'DOGE dividend' to send Americans checks using saved funds

                            <span><a className="text-blue-950 underline" target="_blank" href="https://www.foxbusiness.com/politics/musk-weighs-doge-dividend-send-americans-checks-using-saved-funds"> Source-</a> </span>
                        </p>

                        <div className="flex justify-center items-center  mt-16"> <img className="mb-5" src={`./PHOTO4.png`} /></div>
                        <p>
                            FAFO: What it means and why it’s trending – Musk calls it ‘Awesome’ amid Trump’s Colombia clash
                            While Trump’s post reignited discussions about his ‘America First’ approach to foreign policy, it also brought the acronym FAFO into the spotlight, prompting many to ask: What does it mean, and where did it come from?
                            <span><a className="text-blue-950 underline" target="_blank" href="https://www.financialexpress.com/trending/fafo-what-it-means-and-why-its-trending-musk-calls-it-awesome-amid-trumps-colombia-clash/3727289/"> Source-</a> </span>
                        </p>

                        <YouTubeEmbed id="ddzlVzc_ypE?si=vCKa226aXTM5ccov" />
                        <YouTubeEmbed id="RK91Ji6GCZ8?si=wiMg0sptC4_ebn6C" />
                        <YouTubeEmbed id="dIaoZqMrbCo?si=sF4Mnna3MC6W4K9-" />

                    </div>
                    <div className="p-6">
                        <h1 className="  px-4 py-1 text-4xl font-bold uppercase">Featured</h1>
                        <hr className="border-t-2 border-dotted border-gray-400 my-6" />

                        <img className="mb-5" src={`./PHOTO1.jpg`} />
                        <img className="mb-5" src={`./FAFO3.jpeg`} />
                        <img className="mb-5 mt-8" src={`./PHOTO5.png`} />
                        <img className="mb-5 mt-8" src={`./FAFO2.JPG`} />
                        <div className="mb-4">
                            <VideoPlayer video={'./video1.mp4'} />
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}


function YouTubeEmbed({ id }) {
    const iframeRef = useRef(null);

    useEffect(() => {
        // Load the YouTube API if not already loaded
        if (!window.YT) {
            const script = document.createElement("script");
            script.src = "https://www.youtube.com/iframe_api";
            script.async = true;
            document.body.appendChild(script);
        }

        // Wait for API to be ready
        const onYouTubeIframeAPIReady = () => {
            if (window.YT) {
                new window.YT.Player(iframeRef.current, {
                    events: {
                        onReady: (event) => event.target.playVideo(),
                    },
                });
            }
        };

        // Check if API is already available, otherwise, wait for it
        if (window.YT && window.YT.Player) {
            onYouTubeIframeAPIReady();
        } else {
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
        }
    }, []);

    return (
        <div className="flex justify-center items-center h-auto mt-6 mb-4">
            <div className="w-full max-w-4xl aspect-video">

                <iframe className="w-full h-full shadow-lg"
                    ref={iframeRef}
                    src={`https://www.youtube.com/embed/${id}?enablejsapi=1&autoplay=1&mute=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}


export default Home;