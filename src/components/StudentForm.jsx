import React, { useState } from 'react';

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && age) {
      onAdd({ name, age });
      setName('');
      setAge('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student name"
          required
          autoComplete="off"
        />
      </div>
      <div className="input-group">
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          required
          min="1"
          max="120"
        />
      </div>
      <button type="submit" className="btn-submit">
        Add
      </button>
    </form>
  );
}
