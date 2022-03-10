import React from "react";
import { Card, Button } from "react-bootstrap";

const Cards = ({ cards }) => {
  return (
    <div>
      <br />
      <Card>
        <Card.Header>
          <Card.Img src={cards.urlToImage} alt={cards.title} />
          <Card.Title>
            {`${cards.title}`.length >= 100
              ? `${cards.title}`
              : `${cards.title}`}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {`${cards.description}` !== "null"
              ? `${cards.description}`
              : "No content"}
          </Card.Text>
          <a href={cards.url}>
            <Button>Read More..</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
