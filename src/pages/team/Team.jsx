import React from "react";
import "./team.css";
import zidaneimg from "../../assets/zidane.jpg";
import tonikroosimg from "../../assets/tonikroos.jpg";
import ikercasillasimg from "../../assets/ikercasillas.jpg";
import jamesimg from "../../assets/james.jpg";
import cristiano from "../../assets/christiano.jpg";
import medium from "../../assets/medium.png"
import linkedin from "../../assets/linkedin.png"
import nba from "../../assets/nba.png"
import twitter from "../../assets/twitter.png"
import facebook from "../../assets/facebook.png"
const Team = () => {
  return (
    <>
      <div className="TeamContainer">
        <h3 className="teamHeading">
          Without bonding and coordination, every project is a failure. Look at
          who makes KICKSUP great. ;)
        </h3>

        <div className="cardContainer">
          <div className="card">
            <img src={zidaneimg} alt="" className="cardImg" />
            <div className="cardDesignation">
              <h3 className="Name">Zidane</h3>
              <span className="Role">Leadership & management</span>
            </div>
            <div className="socialWrapper"> 
              <img src={linkedin} alt="" className="socialImg"/>
              <img src={medium} alt="" className="socialImg"/>
              <img src={facebook} alt="" className="socialImg"/>
            </div>
          </div>
          <div className="card">
            <img src={tonikroosimg} alt="" className="cardImg" />
            <div className="cardDesignation">
              <h3 className="Name">Toni Kroos</h3>
              <span className="Role">Product developer</span>
            </div>
            <div className="socialWrapper">
              <img src={linkedin} alt="" className="socialImg"/>
              <img src={medium} alt="" className="socialImg"/>
            </div>
          </div>
          <div className="card">
            <img src={ikercasillasimg} alt="" className="cardImg" />
            <div className="cardDesignation">
              <h3 className="Name">Iker Casillas</h3>
              <span className="Role">Marketing strategy</span>
            </div>
            <div className="socialWrapper">
              <img src={medium} alt="" className="socialImg"/>
            </div>
          </div>
          <div className="card">
            <img src={jamesimg} alt="" className="cardImg" />
            <div className="cardDesignation">
              <h3 className="Name">James</h3>
              <span className="Role">Product designer</span>
            </div>
            <div className="socialWrapper">
              <img src={medium} alt="" className="socialImg"/>
              <img src={twitter} alt="" className="socialImg"/>
            </div>
          </div>
          <div className="card">
            <img src={cristiano} alt="" className="cardImg" />
            <div className="cardDesignation">
              <h3 className="Name">Cristiano</h3>
              <span className="Role">Financial operations</span>
            </div>
            <div className="socialWrapper">
              <img src={linkedin} alt="" className="socialImg"/>
              <img src={facebook} alt="" className="socialImg"/>
              <img src={nba} alt="" style={{height:"25px",width:"25px",objectFit:"cover"}}/>
            </div>
          </div>
        </div>

        <span className="bottomTxt">and You! ;)</span>
      </div>
    </>
  );
};

export default Team;
