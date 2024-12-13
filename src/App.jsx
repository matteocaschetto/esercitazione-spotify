import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import MusicSection from "./components/MusicSection";

const App = () => {
  return (
    <Container fluid className="my-0 px-0 bg-black">
      <Row>
        <Col xs={2} md={2} lg={2} className="p-0">
          <Sidebar />
        </Col>

        <Col xs={10} md={10} lg={10} className="p-0">
          <div
            style={{
              height: "100vh",
              overflowY: "auto",
              paddingBottom: "60px"
            }}
          >
            <MusicSection />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
