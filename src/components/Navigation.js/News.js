import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const News = ({ news }) => {
  const { author, description, urlToImage, url } = news;
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{author}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <a href={url} target="_blank" rel="noreferrer">
            <Button variant="primary">See More...</Button>
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default News;
