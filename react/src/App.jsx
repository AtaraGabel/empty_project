import { useState } from 'react'
import StudentCard from './StudentCard.jsx'
import './App.css'

const Icon = ({ name, size = 20 }) => {
  const icons = {
    home: <><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10.5V20h13v-9.5M9.5 20v-6h5v6" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V5H6.5A2.5 2.5 0 0 0 4 7.5z" /><path d="M4 7.5v12" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

const students = [
  { id: 1, name: 'נועה לוי', age: 11, grade: 'ה׳1', average: 96 },
  { id: 2, name: 'עומר בן דוד', age: 12, grade: 'ה׳1', average: 84 },
  { id: 3, name: 'מאיה כהן', age: 11, grade: 'ה׳1', average: 57 },
  { id: 4, name: 'ליאם אביב', age: 12, grade: 'ה׳1', average: 72 },
  { id: 5, name: 'יונתן פז', age: 11, grade: 'ה׳1', average: 93 },
  { id: 6, name: 'רוני שמש', age: 12, grade: 'ה׳1', average: 68 },
]

function School() {
  const openGate = () => {
    console.log('השער נפתח')
  }

  return (
    <div className="school-page">
      <section className="school-heading">
        <div>
          <p className="eyebrow">כיתה ה׳1</p>
          <h1>רשימת התלמידים</h1>
        </div>
        <span className="student-count">{students.length} תלמידים</span>
      </section>

      <section className="student-list" aria-label="רשימת תלמידי בית הספר">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} onLeave={openGate} />
        ))}
      </section>
    </div>
  )
}

function App() {
  const [active, setActive] = useState('ראשי')
  const [noticeRead, setNoticeRead] = useState(false)

  const navItems = [
    ['ראשי', 'home'],
    ['לוח שנה', 'calendar'],
    ['קורסים', 'book'],
    ['הכיתה', 'users'],
    ['הודעות', 'message'],
  ]

  return (
    <div className="school-app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            <span>ב</span>
          </div>
          <div>
            <strong>בית הספר</strong>
            <small>שערים</small>
          </div>
        </div>

        <nav className="nav" aria-label="ניווט ראשי">
          {navItems.map(([label, icon]) => (
            <button
              key={label}
              type="button"
              className={active === label ? 'nav-item active' : 'nav-item'}
              onClick={() => setActive(label)}
            >
              <Icon name={icon} />
              <span>{label}</span>
              {label === 'הודעות' && <b className="nav-badge">3</b>}
            </button>
          ))}
        </nav>

        <div className="school-year">
          <div className="year-icon"><Icon name="calendar" /></div>
          <div>
            <span>שנת הלימודים</span>
            <strong>2026–2027</strong>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="search">
            <Icon name="search" size={18} />
            <input aria-label="חיפוש" placeholder="חיפוש..." />
            <kbd>⌘ K</kbd>
          </div>
          <div className="profile-actions">
            <button className="icon-button" type="button" aria-label="התראות" onClick={() => setNoticeRead(true)}>
              <Icon name="bell" />
              {!noticeRead && <span className="notification-dot" />}
            </button>
            <div className="profile">
              <div className="avatar">ד</div>
              <div className="profile-copy">
                <strong>דנה כהן</strong>
                <span>מחנכת כיתה ה׳</span>
              </div>
            </div>
          </div>
        </header>

        <div className="content">
          <School />
        </div>
      </main>
    </div>
  )
}

export default App
