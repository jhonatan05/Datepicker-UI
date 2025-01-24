import React from 'react'
import './Calendar.scss'

const Calendar = () => {
  let arr = Array.from({ length: 31 }, (e, i) => i)
  return arr.map((i) => <div>{i + 1}</div>)
}
export default Calendar
