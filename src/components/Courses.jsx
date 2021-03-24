import React from 'react';
import algoritm from '../images/courses/algoritm.png';
import programming from '../images/courses/programming.png';
import economic from '../images/courses/economic.png';
import history from '../images/courses/history.png';

export default function Courses() {

  const courses = [
    {
      title: "Основи програмування",
      image: programming,
      id: 0
    },
    {
      title: "Розробка та аналіз алгоритмів",
      image: algoritm,
      id: 1
    },
    {
      title: "Економіка для всіх",
      image: economic,
      id: 2
    },
    {
      title: "Істория України",
      image: history,
      id: 3
    },
  ]

  return (
    <section className="courses" id="courses">
      <div className="container">
        <h2 className="title"> Доступні курси </h2>
        <p>Запишіться прямо зараз на безкоштовні курси</p>
        <ul className="list">
          {courses.map(item => (
            <li key={item.id} className="item" >
              <div className="block">
                <div className="title">{item.title}</div>
                <div className="image mobile"><img src={item.image} alt="courses" /></div>
                <p>After the first 50 completed projects to make a mistake with the deadlines almost
                unreal.
                  </p>
                <a href="#">Read more...</a>
                <button className="btn">зареєструватись на курс</button>
              </div>
              <div className="image"><img src={item.image} alt="courses" /></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
