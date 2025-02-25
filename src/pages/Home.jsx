
function Home({ isMobile }) {
    return (
        <>
            <div
                className={`relative w-full ${isMobile ? 'auto' : 'h-screen'}  bg-cover bg-center mb-8`}
                style={{
                    backgroundImage: "url('./ELON1.jpg')",
                    backgroundSize: `100% ${isMobile ? 'auto' : '100%'}`,
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                }}
            >

                {/* Top Disclaimer */}
                <div className="bg-black top-0 text-center w-full text-xs text-gray-400 p-2">
                    THIS IS NOT AN OFFICIAL WEBSITE OF THE UNITED STATES GOVERNMENT
                </div>
                {/* Content */}
                <div className="relative mt-16 h-full  px-4 bottom-0">
                    {/* Small Highlighted Text */}
                    <span className="bg-black text-white px-4 py-1 text-xs sm:text-sm md:text-base font-bold uppercase">
                        “FAFO” stands for “F*** Around and Find Out”
                    </span>

                    {/* Main Heading */}
                    <h1 className="bg-black mt-4 text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                        Musk’s history with “FAFO”
                    </h1>


                    {/* Paragraph Text */}
                    <p className=" bg-black mt-4 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
                        “FAFO” stands for “F*** Around and Find Out,” a slang phrase implying that actions have consequences. Musk has used this term on multiple occasions, first in a tweet in December 2022 after suspending Kanye West’s Twitter account for posting a swastika and violating rules against incitement to violence. Musk tweeted “FAFO” as a succinct warning that West had pushed boundaries and faced the repercussions.
                        Musk has been linking “FAFO” to his work with the Department of Government Efficiency (DOGE), a Trump administration initiative he co-leads to streamline federal operations. “FAFO” could be a proposed enforcement arm for something like “Federal Agency for Financial Oversight,” tied to DOGE’s mission.
                    </p>

                </div>
            </div>
            <div className="bg-white px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-2 p-6">
                        <h1 className="  px-4 py-1 text-4xl font-bold uppercase">Featured</h1>
                        <hr className="border-t-2 border-dotted border-gray-400 my-6" />

                        <YouTubeEmbed id="ddzlVzc_ypE?si=vCKa226aXTM5ccov" />
                        <YouTubeEmbed id="RK91Ji6GCZ8?si=wiMg0sptC4_ebn6C" />
                        <YouTubeEmbed id="dIaoZqMrbCo?si=sF4Mnna3MC6W4K9-" />
                        <p className="">
                            The “America First” policy is like putting on a superhero cape for the U.S. It’s about flexing muscle in trade, security, and jobs, making sure America leads the way. It’s less about playing by everyone else’s rules and more about making moves that benefit the country, whether it’s cutting deals, securing borders, or bringing jobs back home.

                            On top of that, the “America First” approach was all about breaking free from long-standing international commitments that didn’t seem to give the U.S. enough in return. Whether it was pulling out of climate deals or questioning global alliances, it was a statement that America would no longer play second fiddle. It’s like saying, “Let’s focus on what’s best for us right now—no more playing nice just for the sake of it.”
                        </p>
                    </div>
                    <div className="p-6">
                        <h1 className="  px-4 py-1 text-4xl font-bold uppercase">NEWS</h1>
                        <hr className="border-t-2 border-dotted border-gray-400 my-6" />
                        <img className="mb-5" src={`./PHOTO1.jpg`} />
                        <img className="mb-5" src={`./PHOTO2.jpg`} />
                        <p>
                            US President Donald Trump yet again praised Elon Musk for his leadership in streamlining federal operations through the Department of Government Efficiency (DOGE). During a speech, Trump highlighted Musk’s contributions and joked about his unique naming choices. In response, Musk posted on X (formerly Twitter), saying, "Everything is called X." This marks another instance of Trump publicly applauding Musk’s role in government reforms.

                            <span><a className="text-blue-950 underline" target="_blank" href="https://www.livemint.com/news/us-news/elon-musk-gets-donald-trump-s-seal-of-approval-great-job-running-doge-elon-musk-responds-with-classic-x-wit/amp-11740323734004.html"> Source-</a> </span>
                        </p>

                        <img className="mb-5 mt-8" src={`./PHOTO3.png`} />
                        <p>
                            Musk weighs a 'DOGE dividend' to send Americans checks using saved funds

                            <span><a className="text-blue-950 underline" target="_blank" href="https://www.foxbusiness.com/politics/musk-weighs-doge-dividend-send-americans-checks-using-saved-funds"> Source-</a> </span>
                        </p>

                        <img className="mb-5 mt-8" src={`./PHOTO4.png`} />
                        <p>
                            FAFO: What it means and why it’s trending – Musk calls it ‘Awesome’ amid Trump’s Colombia clash

                            <span><a className="text-blue-950 underline" target="_blank" href="https://www.financialexpress.com/trending/fafo-what-it-means-and-why-its-trending-musk-calls-it-awesome-amid-trumps-colombia-clash/3727289/"> Source-</a> </span>
                        </p>
                    </div>
                </div>
            </div>

        </>

    );
}


function YouTubeEmbed({ id }) {
    return (
        <div className="flex justify-normal items-start h-auto mt-18 mb-4">
            <div className="w-full max-w-4xl aspect-video">

                <iframe className="w-full h-full rounded-lg shadow-lg"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    );
}


export default Home;