import { useState } from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const Playbar = ({ song, isPlaying, onPlayPause, onSeek, onVolumeChange }) => {
  const [volume, setVolume] = useState(100);
  const [progress, setProgress] = useState(0);

  const handleSeek = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    onSeek(newProgress);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    onVolumeChange(newVolume);
  };

  return (
    <div
      className="px-5 py-2"
      style={{
        background:
          "linear-gradient(90deg, rgb(63, 86, 119) 0%, rgba(33, 44, 61, 1) 42%, rgb(15, 21, 29) 100%)",
        position: "fixed",
        bottom: 0,
        width: "80%",
        color: "white"
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={6} md={8}>
            <h6>{song ? song.title : "Song Title"}</h6>
            <p>{song ? song.artist : "Artist Name"}</p>
          </Col>

          <Col xs={6} md={2} className="d-flex align-items-center">
            <ProgressBar
              now={progress}
              max={100}
              onClick={handleSeek}
              style={{
                cursor: "pointer",
                flexGrow: 1
              }}
            />
          </Col>

          <Col xs={12} md={2} className="d-flex justify-content-between">
            <Button
              variant="link"
              onClick={onPlayPause}
              style={{ color: "#fff" }}
            >
              {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
            </Button>

            <div className="d-flex align-items-center me-4">
              <FaVolumeMute size={18} style={{ marginRight: "8px" }} />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                style={{
                  width: "100px",
                  marginRight: "10px"
                }}
              />
              <FaVolumeUp size={18} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Playbar;
