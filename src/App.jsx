import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import MusicSection from "./components/MusicSection";

const App = () => {
  return (
    <Container fluid className="my-0 px-0 bg-black">
      <Row>
        <Col xs={12} sm={3} md={2} lg={2} className="p-0">
          <Sidebar />
        </Col>

        <Col xs={12} sm={9} md={10} lg={10} className="">
          <div
            style={{
              height: "100vh",
              overflowY: "auto",
              paddingBottom: "100px"
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
