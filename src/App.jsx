import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>Student Management System</h1>
      </header>
      <main className="app-main">
        <div className="container">
          <section className="form-section">
            <StudentForm onAdd={addStudent} />
          </section>
          <section className="list-section">
            <StudentList students={students} onDelete={deleteStudent} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
