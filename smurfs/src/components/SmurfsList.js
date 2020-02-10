import React from 'react';
// We need redux store here
import { useSelector } from "react-redux";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Col,
  Row,
} from "reactstrap";
import Smurfsg from "../image/Smurfsg.jpg";

const SmurfsList = () => {
  const smurfs = useSelector(state => state.smurfs);
  const error = useSelector(state => state.error);

  const black = {
    color: "black",
    fontWeight: "900",
  };
  const margin = {
    margin: "2%",
  };

  return (
    <section>
      {error && <div className="error">{error}</div>}
      <Row>
        {smurfs.map(smurf => (
          <Col lg="4">
            <Card inverse className="card" style={margin}>
              <CardImg
                width="50%"
                height="100%"
                src={Smurfsg}
                alt="Card of Smurfs!"
              />
              <CardImgOverlay>
                <CardTitle>
                  <h1 style={black}>{smurf.name}</h1>
                </CardTitle>
                <CardText style={black}>
                  <p>
                    {smurf.name} is {smurf.age} years old!
                  </p>
                  <p>Height: {smurf.height}cm</p>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default SmurfsList;