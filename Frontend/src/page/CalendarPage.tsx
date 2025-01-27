import React from 'react'
import './CalendarPage.scss'
import Calendar from '../components/Calendar'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CalendarPage = () => {
  const days = 4
  return (
    <section className="calendar-page">
      <section className="calendar-page__date">
        <input type="date" />
      </section>
      <section className="calendar-page__month">
        <FontAwesomeIcon icon={faCaretLeft} /> December <FontAwesomeIcon icon={faCaretRight} />
      </section>
      <section className="calendar-page__days">
        <span>S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <Calendar days={days} />
      </section>
      <section className="calendar-page__calendar"></section>
    </section>
  )
}

export default CalendarPage
