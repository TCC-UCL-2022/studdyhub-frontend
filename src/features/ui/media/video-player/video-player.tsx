import { useEffect, useRef, useState } from "react";
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from "video.js";
import "video.js/dist/video-js.css";

type VideoPlayerProps = {
  options: VideoJsPlayerOptions;
  onReady?: (player: VideoJsPlayer) => void;
  onEnded?: () => void;
};

export const VideoPlayer = ({
  options,
  onReady,
  onEnded,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  const [options2] = useState<VideoJsPlayerOptions>({
    controls: true,
    autoplay: false,
    fill: true,
    preload: "auto",
    playbackRates: [0.5, 1, 1.5, 2],
    ...options,
  });

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      const player = (playerRef.current = videojs(
        videoElement,
        options2,
        () => {
          videojs.log("player is ready");
          onReady?.(player);
        }
      ));

      player.on("ended", () => {
        onEnded?.();
        alert("Video has ended");
      });
    }
  }, [onEnded, onReady, options, options2, videoRef]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};
