import React from "react";
import "./Box.css";
import { Card, CardColumns, CardDeck } from "react-bootstrap";
import DashboardNavbar from "./DashboardNavbar";

const Slotstatus = () => {
  const cardInfo = [
    {
      title: "Slot 1",
      status: "empty",
    },
    {
      title: "Slot 2",
      status: "empty",
    },
    {
      title: "Slot 3",
      status: "occupied",
    },
    {
      title: "Slot 4",
      status: "empty",
    },
    {
      title: "Slot 5",
      status: "occupied",
    },
    {
      title: "Slot 3",
      status: "occupied",
    },
    {
      title: "Slot 4",
      status: "booked",
    },
    {
      title: "Slot 5",
      status: "occupied",
    }
    
  ];

  const renderCard = (card, index) => {
    return (
      <Card 
        border="secondary" 
        style={{width: "25rem"}} 
        key={index} 
        className="mb2"
        bg = {card.status === "empty"?"success" : card.status === "booked" ? "primary" : "danger"}
        text = {'light'}
      >
        <Card.Header>
            Node Id: {card.title}
          </Card.Header>
          <Card.Body >
            <Card.Title style={{justifyContent:"center"}}>
              <h1>Slot No: {card.title}</h1>
            </Card.Title>
            <Card.Text>
              <h2 className="text-center text danger text-capitalize my-5">{card.status}</h2>
            </Card.Text>
            {/*<div>  
              <Switchbutton/> 
            </div>*/}
          </Card.Body>
      </Card>
    );
  };

  return (<>
    <div style = {{marginLeft: 50}}>
      <DashboardNavbar />
      <h1 className="text-center text danger text-capitalize my-5">Slot Summary</h1>
      <CardColumns>
        {cardInfo.map(renderCard)}
      </CardColumns>
    </div>
    </>
  );
};

export default Slotstatus;