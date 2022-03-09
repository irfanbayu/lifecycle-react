import React from "react";
import { Row, Col } from "react-bootstrap";
import Cards from "./Cards";

const Headline = ({ headline, findKey }) => {
  return (
    <>
      <Row className="gy-2 gy-md-3">
        {headline
          .filter((cards) => {
            if (findKey === "") {
              return cards;
            } else if (
              cards.title.toLowerCase().includes(findKey.toLowerCase())
            ) {
              return cards;
            }
            return false;
          })
          .map((cards, index) => {
            return (
              <>
                <Col sm="6" md="4" key={index}>
                  <Cards cards={cards} />
                </Col>
              </>
            );
          })}
      </Row>
    </>
  );
};

export default Headline;
