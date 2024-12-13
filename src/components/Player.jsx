import React, { useState, useRef, useEffect } from "react";
import { Button, ProgressBar, Form } from "react-bootstrap";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaStepForward,
  FaStepBackward
} from "react-icons/fa";

const Playbar = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      };

      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
  };

  return (
    <div className="playbar d-flex align-items-center justify-content-between p-3 bg-dark text-white fixed-bottom">
      <audio ref={audioRef} src={track?.preview_url} preload="auto" />

      <div className="d-flex align-items-center">
        <Button variant="link" onClick={() => {}}>
          <FaStepBackward size={20} color="white" />
        </Button>
        <Button variant="link" onClick={handlePlayPause}>
          {isPlaying ? (
            <FaPause size={30} color="white" />
          ) : (
            <FaPlay size={30} color="white" />
          )}
        </Button>
        <Button variant="link" onClick={() => {}}>
          <FaStepForward size={20} color="white" />
        </Button>
      </div>

      <div className="d-flex flex-column w-50">
        <ProgressBar
          now={(currentTime / duration) * 100}
          label={`${Math.floor(currentTime)}s`}
          className="mb-2"
          style={{ height: "5px" }}
        />
        <div className="d-flex justify-content-between">
          <span>{Math.floor(currentTime)}s</span>
          <span>{Math.floor(duration)}s</span>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <FaVolumeUp size={20} />
        <Form.Range
          value={volume * 100}
          onChange={handleVolumeChange}
          min={0}
          max={100}
          style={{ width: "100px", marginLeft: "10px" }}
        />
        {volume === 0 && <FaVolumeMute size={20} />}
      </div>
    </div>
  );
};

export default Playbar;
