import React from 'react';
import team_1 from '../images/developers/team-1.jpg';
import team_2 from '../images/developers/team-2.jpg';
import team_3 from '../images/developers/team-3.jpg';
import team_4 from '../images/developers/team-4.jpg';
import facebook from '../images/social/facebook_small.png';
import twitter from '../images/social/twitter_small.png';
import google from '../images/social/google_small.png';

export default function Developers() {

  const developers = [
    { id: 0, title: "Daniel Raynolds", image: team_1 },
    { id: 1, title: "Daniel Raynolds", image: team_2 },
    { id: 2, title: "Daniel Raynolds", image: team_3 },
    { id: 3, title: "Daniel Raynolds", image: team_4 }
  ]

  return (
    <section className="developers" id="developers">
      <div className="container">
        <h2 className="title">Розробники</h2>
        <ul className="list">
          {developers.map(item => (
            <li key={item.id} className="card">
              <img src={item.image} alt="developer" />
              <div className="title">{item.title}</div>
              <p className="description">
                After the first 50 completed projects to make a mistake with the deadlines almost
                unreal. After the first hundred projects to break the promises already impossible.
              </p>
              <div className="social">
                <a href="#"><img src={facebook} alt="social" /></a>
                <a href="#"><img src={twitter} alt="social" /></a>
                <a href="#"><img src={google} alt="social" /></a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
