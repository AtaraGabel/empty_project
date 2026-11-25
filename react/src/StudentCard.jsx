function StudentCard({ student, onLeave }) {
  const { name, age, grade, average } = student

  let achievement = null
  if (average > 90) {
    achievement = 'תלמיד מצטיין'
  } else if (average < 60) {
    achievement = 'טעון שיפור'
  }

  const handleLeave = () => {
    const exitTime = new Intl.DateTimeFormat('he-IL', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date())

    console.log(`${name}- יצאת בשעה ${exitTime}`)
    onLeave()
  }

  return (
    <article className="student-card">
      <div className="student-avatar" aria-hidden="true">
        {name.charAt(0)}
      </div>

      <div className="student-info">
        <div className="student-name-row">
          <h3>{name}</h3>
          {achievement && (
            <span className={`achievement ${average > 90 ? 'excellent' : 'improvement'}`}>
              {achievement}
            </span>
          )}
        </div>
        <p>כיתה {grade} <span>·</span> גיל {age}</p>
        <div className="average-row">
          <span>ממוצע ציונים</span>
          <strong>{average}</strong>
        </div>
      </div>

      <button type="button" className="leave-button" onClick={handleLeave}>
        יציאה מבית הספר
      </button>
    </article>
  )
}

export default StudentCard
