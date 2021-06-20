import React from "react";
import "./Box.css";
import { Card, CardColumns, CardDeck } from "react-bootstrap";
import Switchbutton from "./Switchbutton";
import CssBaseline from '@material-ui/core/CssBaseline';
import DashboardNavbar from "./DashboardNavbar";

class Slotmanipulate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminID: "60a67ba2e9200da3e0f34250",
      parkingSlots: [],
    }
  }

  componentDidMount() {
    fetch("http://localhost:9090/admin/60a67ba2e9200da3e0f34250/slots")
    .then((response) => {
      response.json()
      .then(parkingSlotsResponse => {
        this.setState({parkingSlots: parkingSlotsResponse.parkingSlots});
      })
    })
    .catch((error) => console.log(error))
  }

  renderCard = (card, index) => {
    return (
        <Card 
          border="light"
          bg = {card.status === "empty"?"success" : card.status === "booked" ? "primary" : "danger"}
          style={{width: "18rem"}} 
          key={index} 
          className="mb2"
          text = {'light'}
        >
          <Card.Header>
            Node Id: {card.nodeId}
          </Card.Header>
          <Card.Body >
            <Card.Title style={{justifyContent:"center"}}>
              <h1>Slot No: {card.slotNo}</h1>
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

  render() {
    return (
      <div style = {{marginLeft: 20, marginRight: 20}}>
        <DashboardNavbar />
        <CssBaseline/>
        <h1 className="text-center text danger text-capitalize my-5">Slot Status of your Parking Area</h1>
        <CardDeck>
          {this.state.parkingSlots.map(this.renderCard)}
        </CardDeck>
      </div>
    );
  }
};

export default Slotmanipulate;