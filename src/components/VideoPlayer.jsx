import { useRef, useState, useEffect } from "react";

const VideoPlayer = ({ video }) => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);


    useEffect(() => {
        if (videoRef.current) {
            if (playing) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setPlaying(!playing);
        }
    }, [])

    return (

        <video
            ref={videoRef}
            className="w-full shadow-lg"
            autoPlay
            muted
            loop
            controls
        >
            <source src={`./${video}`} type="video/mp4" />
            Your browser does not support the video tag.
        </video>

    );
};

export default VideoPlayer;
