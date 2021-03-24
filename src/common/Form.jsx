import React, { useState } from 'react';

export default function Form({ registration }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !name) {
      return
    }
    resetForm();
    alert(email);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {
        registration && (
          <input
            type="text"
            placeholder="Name:"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        )
      }
      <input
        type="email"
        placeholder="Email:"
        value={email}
        onChange={e => setEmail(e.target.value)}

      />
      {
        !registration && (
          <input
            type="password"
            placeholder="Password:"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        )
      }
      <button className="btn" type="submit">{registration ? "Submit" : "розпочати!"}</button>
    </form>
  )
}
