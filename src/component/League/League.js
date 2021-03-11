import React from "react";
import {Card,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const League = (props) => {

  const {idLeague,strLeagueAlternate,strLeague} = props.league;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mt-4  text-center my-3">
        <div className="d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>{strLeagueAlternate}</Card.Title>
              <Card.Text>
                  {strLeague}
              </Card.Text>
              <Button as={Link} to={`/league/${idLeague}`} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
            </Card.Body>
          </Card>
        </div>
      </div>
  );
};

export default League;

