import { useCallback, useEffect, useRef } from "react";
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from "video.js";
import "video.js/dist/video-js.css";

// Lib to handle quality resolutions
import videoQualitySelector from "@silvermine/videojs-quality-selector";
import "@silvermine/videojs-quality-selector/dist/css/quality-selector.css";

// Bind the videojs library to the window object
videoQualitySelector(videojs);

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

  const createVideoPlayerJs = useCallback(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      const player = (playerRef.current = videojs(
        videoElement,
        {
          controls: true,
          autoplay: false,
          fill: true,
          preload: "auto",
          playbackRates: [0.5, 1, 1.5, 2],
          ...options,
        },
        () => {
          videojs.log("Player is ready");
          onReady?.(player);
        }
      ));

      player.controlBar.addChild("QualitySelector");

      player.on("ended", () => {
        videojs.log("Video has ended");
        onEnded?.();
      });
    }
  }, [onEnded, onReady, options, videoRef]);

  useEffect(() => {
    createVideoPlayerJs();
  }, [createVideoPlayerJs]);

  const handleUpdateSources = useCallback(() => {
    if (playerRef.current && options.sources) {
      const player = playerRef.current;

      player.src(options.sources);
    }
  }, [options]);

  useEffect(() => {
    handleUpdateSources();
  }, [handleUpdateSources]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};
