import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

const MusicSection = ({ genre, querySelector }) => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${genre}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSongs(data.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSongs();
  }, [genre]);

  return (
    <div className="music-section bg-black text-white py-4">
      <h2 className="mb-4">Rock Classic</h2>
      {error && (
        <div className="text-center">
          Errore nel caricamento dei dati: {error}
        </div>
      )}
      <Row xs={1} sm={2} lg={3} xl={4} className="me-4">
        {songs.slice(0, 4).map((song) => (
          <Col key={song.id} className="mb-2">
            <Card className="border-0 text-center bg-transparent">
              <Card.Img
                variant="top"
                src={song.album.cover_medium}
                alt={song.title}
              />
              <Card.Body className="text-white custom-card-body">
                <Card.Title>{song.title}</Card.Title>
                <Card.Text>{song.artist.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MusicSection;
