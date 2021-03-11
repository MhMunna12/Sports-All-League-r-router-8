import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAirFreshener,
  faFlagUsa,
  faFutbol,
  faTransgender,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import "./LeagueDetail.css";
import maleImage from "../../Image/male.png";
import femaleImage from "../../Image/female.png"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const LeagueDetail = () => {
  const { leagueId } = useParams();
  const [league, setLeague] = useState({});
  // console.log(leagueId);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeague(data.leagues[0]));
  });
  const {
    strLeague,
    intFormedYear,
    strCountry,
    strGender,
    strSport,
    strDescriptionEN,
    strDescriptionFR,
    strBadge
  } = league;
  let genderImage;
  genderImage = strGender ?<img src={maleImage} alt=""/>:
      <img src={femaleImage} alt=""/>

  return (
    <div className="league-container">
    <Header ><img className="logo" src={strBadge} alt=""/></Header>
      <div className=" container">
        <div className="row  bg-primary league-style ">
          <div className="col-sm-12 col-md-6 text-center text-sm-left">
            <div>
              <h2>{strLeague}</h2>
              <br />
              <h5>
                <FontAwesomeIcon icon={faAirFreshener} /> Founded
                <span style={{ fontSize: "15px" }}>(year)</span> :{" "}
                {intFormedYear}
              </h5>
              <h5>
                <FontAwesomeIcon icon={faFlagUsa} /> Country: {strCountry}
              </h5>
              <h5>
                <FontAwesomeIcon icon={faFutbol} /> Sports type: {strSport}
              </h5>
              <h5>
                <FontAwesomeIcon icon={faTransgender} /> Sports type: {strGender}
              </h5>
            </div>
          </div>
          <div className="col-sm-12 col-md-6  gender">
            {
              genderImage
            }
          </div>
        </div>
        <div className="description">
          <p>{strDescriptionEN}</p>
          <br />
          <p>{strDescriptionFR}</p>
        </div>
      </div>
      <div>
        <Footer league={league}></Footer>
      </div>
    </div>
    
  );
};

export default LeagueDetail;
