import React from 'react'
import './Calendar.scss'

interface DaysProps {
  days: number
}

const Calendar = ({ days }: DaysProps) => {
  let arr = Array.from({ length: 31 + (days - 1) }, (e, i) => i)
  return arr.map((i) => {
    const dayToShow = i - days + 2
    return <div>{dayToShow <= 0 ? ' ' : dayToShow}</div>
  })
  // return arr.map((i) => <div>{i + 1 - (days - 1) <= 0 ? ' ' : i + 1 - (days - 1)}</div>)
}
export default Calendar
