import { useSelector } from "react-redux";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";

const Playbar = () => {
  const currentSong = useSelector((state) => state.song.currentSong);

  return (
    <Container
      fluid
      className="fixed-bottom bg-black"
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
              <Button variant="link">
                <img src={shuffle} alt="shuffle" width="20%" />
              </Button>
              <Button variant="link">
                <img src={prev} alt="previous" width="20%" />
              </Button>
              <Button variant="link">
                <img src={play} alt="play/pause" width="20%" />
              </Button>
              <Button variant="link">
                <img src={next} alt="next" width="20%" />
              </Button>
              <Button variant="link">
                <img src={repeat} alt="repeat" width="20%" />
              </Button>
            </div>

            <ProgressBar
              max={100}
              className="w-75 mt-3"
              style={{ height: "5px", backgroundColor: "#999" }}
            />
            {currentSong && (
              <div className="mt-3 text-white text-center d-flex align-items-center">
                <img
                  src={currentSong.album.cover_small}
                  alt={currentSong.title}
                  className="me-3 mb-3"
                  style={{ maxWidth: "80px", height: "auto" }}
                />

                <div className="d-flex flex-column">
                  <h5>{currentSong.title}</h5>
                  <p>{currentSong.artist.name}</p>
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Playbar;
