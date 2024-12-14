import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Playbar from "./Playbar";

const MusicSection = () => {
  const [rockSongs, setRockSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [jazzSongs, setJazzSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async (genre, setter) => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${genre}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setter(data.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSongs("rock", setRockSongs);
    fetchSongs("pop", setPopSongs);
    fetchSongs("jazz", setJazzSongs);
  }, []);

  return (
    <div
      className="music-section bg-black text-white py-4"
      style={{
        background:
          "linear-gradient(90deg, rgb(63, 86, 119) 0%, rgba(33, 44, 61, 1) 42%, rgb(15, 21, 29) 100%)",
        minHeight: "100vh",
        color: "white",
        padding: "2rem"
      }}
    >
      <Row className="justify-content-center">
        <Col
          xs={12}
          md={8}
          lg={8}
          className="text-center d-flex justify-content-between fw-bold text-secondary"
        >
          <p href="#">TRENDING</p>
          <p href="#">PODCAST</p>
          <p href="#">MOODS AND GENRES</p>
          <p href="#">NEW RELEASES</p>
          <p href="#">DISCOVER</p>
        </Col>
      </Row>
      <div>
        {error && (
          <div className="text-center">
            Errore nel caricamento dei dati: {error}
          </div>
        )}

        <Row className="justify-content-center mt-2">
          <Col xs={12} md={9}>
            <h2 className="mb-4">Rock Classics</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="me-4">
              {rockSongs.slice(0, 4).map((song) => (
                <Col key={song.id} className="mb-4">
                  <Card className="border-0 text-center bg-transparent fs-6">
                    <Card.Img
                      variant="top"
                      src={song.album.cover_medium}
                      alt={song.title}
                      className="w-100 rounded-0"
                      style={{ objectFit: "cover" }}
                    />
                    <Card.Body className="text-white custom-card-body border-0">
                      <Card.Title className="fs-6">{song.title}</Card.Title>
                      <Card.Text className="fs-6">{song.artist.name}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-center mt-2">
          <Col xs={12} md={9}>
            <h2 className="mb-4">Pop Hits</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="me-4">
              {popSongs.slice(0, 4).map((song) => (
                <Col key={song.id} className="mb-4">
                  <Card className="border-0 text-center bg-transparent fs-6">
                    <Card.Img
                      variant="top"
                      src={song.album.cover_medium}
                      alt={song.title}
                      className="w-100 rounded-0"
                      style={{ objectFit: "cover" }}
                    />
                    <Card.Body className="text-white custom-card-body border-0">
                      <Card.Title className="fs-6">{song.title}</Card.Title>
                      <Card.Text className="fs-6">{song.artist.name}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-center mt-2">
          <Col xs={12} md={9}>
            <h2 className="mb-4">Jazz Vibes</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="me-4">
              {jazzSongs.slice(0, 4).map((song) => (
                <Col key={song.id} className="mb-4">
                  <Card className="border-0 text-center bg-transparent fs-6">
                    <Card.Img
                      variant="top"
                      src={song.album.cover_medium}
                      alt={song.title}
                      className="w-100 rounded-0"
                      style={{ objectFit: "cover" }}
                    />
                    <Card.Body className="text-white custom-card-body border-0">
                      <Card.Title className="fs-6">{song.title}</Card.Title>
                      <Card.Text className="fs-6">{song.artist.name}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Playbar />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MusicSection;
