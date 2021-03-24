import React from 'react';
import AdvantagesItem from './AdvantagesItem';
import сlockIcon from '../../images/advantages/Clock.png';
import globe from '../../images/advantages/Globe.png';
import iPhone from '../../images/advantages/iPhone.png';
import man from '../../images/advantages/Man.png';
import advantages_icon from '../../images/advantages/advantages_icon.png'

export default function Advantages() {

  const advantages = [
    {
      title: "Будь-коли",
      text: "Навчайтесь у зручний для вас час. Відеолекції, тести та форум доступні цілодобово.",
      image: сlockIcon,
      id: 1
    },
    {
      title: "Будь-де",
      text: "Проходьте курси, не виходячи з дому чи в дорозі. Все, що Вам знадобиться, - цедоступ до інтернету.",
      image: globe,
      id: 2
    },
    {
      title: "Будь-коли",
      text: "Навчайтесь у зручний для вас час. Відеолекції, тести та форум доступні цілодобово.",
      image: iPhone,
      id: 3
    },
    {
      title: "Будь-коли",
      text: "Навчайтесь у зручний для вас час. Відеолекції, тести та форум доступні цілодобово.",
      image: man,
      id: 4
    }
  ]

  const numberInBlock = (advantages.length > 0) ? Math.ceil(advantages.length / 2) : 2
  const advantagesNewArr = [[...advantages.slice(0, numberInBlock)],
  [...advantages.slice(numberInBlock)]];

  return (
    <section className="advantages">
      <div className="container">
        <h2 className="title">переваги</h2>
        <div className="wrapper">
          <div className="block">
            {advantagesNewArr[0].map(el => (
              <AdvantagesItem key={el.id}  {...el} />
            ))}
          </div>
          <div className="advantages_image">
            <img src={advantages_icon} alt="advantages" />
          </div>
          <div className="block">
            {advantagesNewArr[1].map(el => (
              <AdvantagesItem key={el.id}  {...el} />
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
