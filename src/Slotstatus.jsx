import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";

const Slotstatus = () => {
  const cardInfo = [
    {
      title: "Slot 1",
      status: "free",
    },
    {
      title: "Slot 2",
      status: "free",
    },
    {
      title: "Slot 3",
      status: "occupied",
    },
    {
      title: "Slot 4",
      status: "free",
    },
    {
      title: "Slot 5",
      status: "occupied",
    },
    
  ];

  const renderCard = (card, index) => {
    return (
      <Card border="secondary" style={{borderBlockColor:"dark", width: "2rem",backgroundColor:card.status==="free"?"green":"red"}} key={index} className="box">
        <Card.Body>
          <Card.Title style={{justifyContent:"center"}}><h1>{card.title}</h1></Card.Title>
          <Card.Text><h2>{card.status}</h2></Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (<>
    <div><h1 className="text-center text danger text-capitalize my-5">Slot Summary</h1>
    <div className="grid">{cardInfo.map(renderCard)}</div></div></>);
};

export default Slotstatus;