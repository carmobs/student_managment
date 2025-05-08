import React from 'react';

export default function StudentList({ students, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="empty-message">
        <p>No students registered yet</p>
      </div>
    );
  }

  return (
    <div className="student-grid">
      {students.map((student, index) => (
        <div key={index} className="student-card">
          <div className="student-info">
            <div className="student-name">{student.name}</div>
            <div className="student-age">{student.age} years old</div>
          </div>
          <button 
            onClick={() => onDelete(index)} 
            className="btn-delete"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
