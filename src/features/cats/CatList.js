import React from "react";
import { Row, Col, Container } from "react-bootstrap";
function CatList({ catPics }) {
  return (
    <div>
      <Container>
        <Row>
          {catPics.map((cat) => {
            return (
              <Col key={cat.id} className="mb-3" sm={6}>
                <img
                  style={{ width: "100%" }}
                  height="400"
                  src={cat.url}
                  alt="cat"
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default CatList;
