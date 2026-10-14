import students from '../data'
import StudentCard from './StudentCard'

function StudentList() {
  return (
    <section className="student-section" aria-label="Student profiles">
      <div className="student-grid">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </section>
  )
}

export default StudentList
