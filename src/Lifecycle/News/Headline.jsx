import React from "react";
import { Row, Col } from "react-bootstrap";
import Cards from "./Cards";

const Headline = ({ headline, findKey }) => {
  return (
    <>
      <Row className="gy-2 gy-md-3">
        {/* Uncaught TypeError: Cannot read properties of undefined (reading
        'filter') */}
        {headline
          .filter((card) => {
            if (card.title.toLowerCase().includes(findKey.toLowerCase())) {
              return card;
            }
          })
          .map((card, index) => {
            return (
              <>
                <Col sm="5" md="3" key={index}>
                  <Cards card={card} />
                </Col>
              </>
            );
          })}
      </Row>
    </>
  );
};

export default Headline;
