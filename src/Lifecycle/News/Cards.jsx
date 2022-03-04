import React from "react";
import { Card, Button } from "react-bootstrap";

const Cards = ({ news }) => {
  return (
    <div>
      <Card>
        <Card.Header>
          <Card.Img src={news.urlToImage} alt={news.title} />
          <Card.Title>
            {`${news.title}`.length >= 100 ? `${news.title}` : `${news.title}`}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {`${news.description}` !== "null"
              ? `${news.description}`
              : "No content"}
          </Card.Text>
          <a href={news.url}>
            <Button>Read More..</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
