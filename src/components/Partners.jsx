import React from 'react';
import backButton from '../images/slider/back.png';
import cambridge from '../images/partners/cambridge.png';
import harvard_university from '../images/partners/harvard_university.png';
import mit_crest from '../images/partners/mit_crest.png';
import ucla from '../images/partners/ucla.png';

export default function Partners() {

  const partners = [
    { id: 0, image: cambridge, title: "Cambridge" },
    { id: 1, image: harvard_university, title: "Harvard" },
    { id: 2, image: mit_crest, title: "MIT" },
    { id: 3, image: ucla, title: "UCLA" },
  ]

  return (
    <section className="partners" id="partners">
      <h2 className="title">Партнери - освітні заклади</h2>
      <div className="container">
        <div className="button button-prev"><img src={backButton} alt="prev" /></div>
        <div className="button button-next"><img src={backButton} alt="next" /></div>
        <ul className="points">
          <li className="active"></li>
          <li></li>
          <li></li>
        </ul>
        <ul className="list">
          {partners.map(item => (
            <li key={item.id} className="item">
              <img src={item.image} alt="partners" />
              <a href="#" className="title">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
