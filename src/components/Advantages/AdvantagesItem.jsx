import React from 'react';

export default function AdvantagesItem({ image, title, text }) {
  return (
    <div className="item">
      <img src={image} alt="advantages" />
      <div className="title">{title}</div>
      <p>{text}</p>
    </div>
  )
}
