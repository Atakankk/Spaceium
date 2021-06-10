import React from "react";
import Astroinspace from "../Api/Astroinspace";
import { Row, Card } from "react-bootstrap";

export default function AstroSpace() {
  const { data } = Astroinspace();
  return (
    <Row className="justify-content-center">
      {data["people"].map((data) => (<Card className="text-center m-3 bg-success text-white" style={{ width: '25rem' }}>
          <Card.Title>
              {data.name}
          </Card.Title>
          <Card.Body>
              <Card.Text>
                  Craft: {data.craft}
              </Card.Text>
          </Card.Body>
      </Card>))}
    </Row>
  );
}
