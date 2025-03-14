import React, { useEffect, useRef } from "react";

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

export default YouTubeEmbed;
