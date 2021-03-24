import React from 'react';
import Form from '../common/Form';

export default function Registration() {
  return (
    <section className="registration" id="registration">
      <div className="container">
        <h2 className="title">Зареєструйся зараз</h2>
        <p>Та отримай задоволення від навчання</p>
        <Form registration />
      </div>
    </section>
  )
}
