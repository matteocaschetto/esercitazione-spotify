import React, { useState } from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";

const Playbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleShuffle = () => console.log("Shuffle");
  const handlePrevious = () => console.log("Previous");
  const handleNext = () => console.log("Next");
  const handleRepeat = () => console.log("Repeat");

  React.useEffect(() => {
    if (isPlaying && progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, progress]);

  return (
    <Container
      fluid
      className="fixed-bottom bg-black "
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        margin: 0,
        zIndex: 999
      }}
    >
      <Row className="h-100 justify-content-center align-items-center">
        <Col xs={10} md={8}>
          <div className="d-flex flex-column align-items-center pb-3">
            <div className="d-flex justify-content-center">
              <Button variant="link" onClick={handleShuffle}>
                <img src={shuffle} alt="shuffle" width="20%" />
              </Button>
              <Button variant="link" onClick={handlePrevious}>
                <img src={prev} alt="previous" width="20%" />
              </Button>
              <Button variant="link" onClick={handlePlayPause}>
                <img src={play} alt="play/pause" width="20%" />
              </Button>
              <Button variant="link" onClick={handleNext}>
                <img src={next} alt="next" width="20%" />
              </Button>
              <Button variant="link" onClick={handleRepeat}>
                <img src={repeat} alt="repeat" width="20%" />
              </Button>
            </div>
            <ProgressBar
              now={progress}
              max={100}
              className="w-75 mt-3"
              style={{ height: "5px", backgroundColor: "#999" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Playbar;
