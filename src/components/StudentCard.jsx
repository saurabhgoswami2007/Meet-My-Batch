function StudentCard({ student }) {
  return (
    <article className="student-card">
      <div className="student-emoji" aria-hidden="true">
        {student.emoji}
      </div>
      <h2 className="student-name">{student.name}</h2>
      <p className="student-city">{student.city}</p>
      <p className="student-funfact">{student.funFact}</p>

      <div className="student-skills" aria-label="Skills and interests">
        {student.skills.map((skill) => (
          <span key={`${student.id}-${skill}`} className="student-skill">
            {skill}
          </span>
        ))}
      </div>
    </article>
  )
}

export default StudentCard